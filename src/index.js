import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

//SIVUIMPORTIT
import './index.css';
import {Root,
  //loader as rootloader
} from "./contentpages/Root/Root.jsx"

import {
  Sivu404,
  ErrorRoot,
  Etusivu,
  //etusivuLoader,
  ProjektiLista,
  Projekti,
  projektiLoader,
  Blog,
  Meta,
  CV,
  /*
  miscMusiikkiLoader,
  MiscMusiikkiPage,
  MiscMusiikki,*/
  YouTubePeliarviot,
  YouTubePeliarviosivu,
  youTubePeliarvioLoader,
  blogLoader,
  blogItemLoader,
  BlogItem,
  Arviot,
  arviotLoader,
  ArvioItem,
  arvioItemLoader,
  DiscordLevyRaati,
  discordLevyRaatiLoader
} from "./contentpages"
import { 
  LevyRaatiLeaderboard,
  SkriimBuilder } from './contentpages/Etusivu/Etusivu';
import reportWebVitals from './reportWebVitals';
import { FetchLevyRaatiData, isSkriimOnline } from './components/functions';

/*
  export let levyRaatiDataLocal = [];
  export function updateLevyraatiDataLocal(data) {
    levyRaatiDataLocal = data
  }
  export let skriimLiveStatus;
  export function updateSkriimLiveStatus(status) {
    //JOTAKIN JOTAKIN JOTAKIN
    skriimLiveStatus = status
  }
*/
  const renderRouter = (lrData,liveStatus) => {
    //console.log(lrData, liveStatus)
    const router = createBrowserRouter(
      [
      {
        
        path: "*",
        element: <Root />,
        //loader: rootloader,
        errorElement: <ErrorRoot />,
        children: [
          {
          errorElement: <Sivu404 />,
          children: [
            {index:true, 
              loader: () => {
                console.log("lrData :",lrData)
                console.log("livestatus: ", liveStatus);
                const levyRaatiLeaderBoard = LevyRaatiLeaderboard(lrData)
                const skriimThings = SkriimBuilder(liveStatus)
                return {levyRaatiLeaderBoard, skriimThings}
              },
              element:<Etusivu/>
            },
            {
              path: "projektit",
              children : [
                {
                  
                  index:true, 
                  element:<ProjektiLista/>
                 
                },
                {
                  path: ":projectUrl",
                  element: <Projekti/>,
                  loader: projektiLoader,
                },
                {
                  path: "discordlevyraati",
                  loader: discordLevyRaatiLoader,
                  children: [
                    {
                      index:true,
                      element: <DiscordLevyRaati/>
                    },
                    {
                      path:"dokumentaatio"
                    },
                    {
                      path:"leaderboard"
                    }
                  ],
                },
                /*{
                  path: "music-misc",
                  children : [
                    {
                      index:true,
                      element:<MiscMusiikki/>,
                    },
                    {
                      path:":miscMusicItem",
                      loader:miscMusiikkiLoader,
                      element: <MiscMusiikkiPage/>
                    },
                  ],
                },*/
                {
                  path: "peliarviot",
                  children : [
                    {
                      index:true,
                      element:<YouTubePeliarviot/>,
                    },
                    {
                      path:":peliarvioTitle",
                      loader: youTubePeliarvioLoader,
                      element: <YouTubePeliarviosivu/>,
                    }
                  ]
                }
              ]
            },
            {
              path: "blog",
              children: [
                {
                  index:true, loader: blogLoader, element:<Blog/>
                },
                {
                  path: ":blogPost",
                  loader: blogItemLoader,
                  element: <BlogItem/>
              }

              ]
            },
            {
              path: "arviot",
              children: [
                {
                  index:true, loader: arviotLoader, element: <Arviot/>
                },
                {
                  path: ":arvio",
                  loader: arvioItemLoader,
                  element: <ArvioItem/> 
                }
              ]
            },
            {
              path: "meta",
              element: <Meta/>
            },
            {
              path: "cv",
              element: <CV/>
            },
          ]
          }
        ]
        /*children: [
          {
            errorElement: <ErrorPage />,
            children: [
              {index:true, element:<Index/>},
              {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
                action: contactAction,
              },
              {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: editAction,
              },
              {
                path: "contacts/:contactId/destroy",
                action: destroyAction,
                errorElement: <div>Oops! There was an error.</div>,
              },
            ],
          },
        ],*/
      },
    ]);
    ReactDOM.createRoot(document.getElementById('avtal')).render( 
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    )}
/*
  const render = () => {
      const root = ReactDOM.createRoot(document.getElementById('avtal'));
      root.render( 
      <React.StrictMode>
        <App currentPage={window.location.pathname}/>
      </React.StrictMode>
      )}
*/

//Nettisivun suoritus alkaa
//render();


async function StartSite() {
  const lrData = await FetchLevyRaatiData()
  const livestatus = await isSkriimOnline()
  console.log("Sivu käynnistyy, lrdata: "+lrData+" livestatus: "+livestatus)
  return renderRouter(lrData,livestatus);
}
StartSite();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
