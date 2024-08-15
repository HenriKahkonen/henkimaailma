//import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//SIVUIMPORTIT
import './index.css';
import {Root} from "./contentpages/Root/Root.jsx"
import {
  Sivu404,
  ErrorRoot,
  Etusivu,

  Posts as PostsList,
  PostPage,
  PostLoader,
  YouTubePeliarviot,
  YouTubePeliarviosivu,
  youTubePeliarvioLoader,

  Levyraati,
  LevyraatiDocs,
  LevyraatiTietosuoja,

  Meta,
  Yhteys,
  CV




} from "./contentpages"

import { 
  LevyRaatiLeaderboard,
  SkriimBuilder
 } from './contentpages/Etusivu/Etusivu';
import { 
  FetchLevyRaatiData, 
  isSkriimOnline
 } from './components/functions';

const renderRouter = (lrData,liveStatus) => { 
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
            loader: () => {
              const levyRaatiLeaderBoard = LevyRaatiLeaderboard(lrData)
              const skriimThings = SkriimBuilder(liveStatus)
              return {levyRaatiLeaderBoard, skriimThings}
            },
            element:<Etusivu/> },

            //SYÖTE
            { path: "posts",
            children : [
              { index:true, element:<PostsList/> }, // TODO:CHANGE THIS 
              { path: ":postUrl", element: <PostPage/>, loader: PostLoader, },
              { path: "peliarviot",
                children : [
                  { index:true, element:<YouTubePeliarviot/>},
                  { path:":peliarvioTitle", 
                    loader: youTubePeliarvioLoader,
                    element: <YouTubePeliarviosivu/>,},
                  ],
              },
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
  console.log("Data haettu, sivu käynnistyy")
  //console.log("Sivu käynnistyy, lrdata: "+lrData+" livestatus: "+livestatus)
  return renderRouter(lrData,livestatus);
}
StartSite();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// En halua, kiitos kysymästä
//reportWebVitals();

