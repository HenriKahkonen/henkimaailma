//import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//SIVUIMPORTIT
import './index.css'; import './contentpages/Posts/Pages.css'
import {Root} from "./contentpages/Root/Root.jsx"
import {
  Sivu404, ErrorRoot, EtusivuFeed, //Etusivu,
  Sivukartta,
  PostPage, PostLoader, //Posts as Postslist, 
  YouTubePeliarviot, YouTubePeliarviosivu, youTubePeliarvioLoader,
  Levyraati, LevyraatiDocs, LevyraatiTietosuoja,
  Meta, Yhteys, CV
} from "./contentpages"
/*import { 
  SkriimBuilder //, LevyRaatiLeaderboard
 } from './contentpages/Etusivu/Etusivu';*/
import { 
  FetchLevyRaatiData, isSkriimOnline, FetchChangeLog, postsJsonFetch, SnSJsonFetch
 } from './components/functions';
import { SnSSamplepacksAll } from './contentpages/Posts/Pages/SnS-Samplepacks-All.jsx';

const renderRouter = (lrData,liveStatus,changelog,postsJSON,SnSData) => { 
  const router = createBrowserRouter([
    { path: "*", element: <Root />, errorElement: <ErrorRoot />, 
      children: [{
        errorElement: <Sivu404 />,
        children: [

          //ETUSIVU
          { index:true, 
            // Loadereiden määrittely täällä näin on paras keksimäni ratkaisu siihen 
            // ettei stream statusta ja lr dataa tarvi fetchata niin paljoa
            // ympäri sivustoa
            
            loader: 
            () => {
              //const levyRaatiLeaderBoard = LevyRaatiLeaderboard(lrData)
              //const skriimThings = SkriimBuilder(liveStatus)
              return {liveStatus,postsJSON}
            },
            element:<EtusivuFeed/>
          },

          //SIVUKARTTA
          {path: "sivukartta",
          index:true,
          loader: () => {return {postsJSON}},
          element: <Sivukartta/>
          },

            //SYÖTE
            { path: "posts",
            children : [
              //{ index:true, element:<PostsList/> }, // TODO:CHANGE THIS 
              {index:true, loader: () => {return {postsJSON}}, element:<Sivukartta/>},
              { path: ":postUrl", element: <PostPage posts={postsJSON}/>, loader: PostLoader},
              { path: "peliarviot",
                children : [
                  { index:true, element:<YouTubePeliarviot posts={postsJSON}/>},
                  { path:":peliarvioTitle", 
                    loader: youTubePeliarvioLoader,
                    element: <YouTubePeliarviosivu posts={postsJSON}/>,},
                  ],
              },
              { path: "sns-samplepacks", element: <SnSSamplepacksAll snspacks={SnSData}/>}
            ],
            },

            //LEVYRAATI
            { path: "levyraati",
            children: [
              { index:true, 
                //Selittämättömästä syystä yllä oleva systeemi ei toimi tässä
                //Levyraadin voi kuitenkin buildata lähettämällä datan loaderiin
                loader: () => { 
                  return {lrData}
                },
                element: <Levyraati/>},
              { path:"docs", element:<LevyraatiDocs/> },
              { path:"tietosuoja", element:<LevyraatiTietosuoja/> },
            ],
            },

            //META JA CV
            { path: "meta",
            children: [
              {index:true,
                loader: () => {
                  return {changelog}
                },
              element: <Meta/>},
              { path: "yhteys", element: <Yhteys/>},
              { path: "cv", element: <CV/>},
            ]
          },

        ],
      }]
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('avtal')).render( 
    //<React.StrictMode>
      <RouterProvider router={router} />
    //</React.StrictMode>
  )
}

// React-reititin (nettisivu) käynnistyy
async function StartSite() {
  console.log("Yritetään hakea dataa...")
  const lrData = await FetchLevyRaatiData()
  const livestatus = await isSkriimOnline()
  const changelog = await FetchChangeLog()
  const postsList = await postsJsonFetch()
  const SnSlist = await SnSJsonFetch()
  console.log("Data haettu, sivu käynnistyy")
  //console.log("Sivu käynnistyy, lrdata: "+lrData+" livestatus: "+livestatus)
  return renderRouter(lrData,livestatus,changelog,postsList,SnSlist);
}
StartSite();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// En halua, kiitos kysymästä
//reportWebVitals();

