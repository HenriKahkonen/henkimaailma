import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//SIVUIMPORTIT
import './index.css';
import Root from "./contentpages/Root/Root.jsx"

import {
  Sivu404,
  ErrorRoot,
  Etusivu,
  etusivuLoader,
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

import reportWebVitals from './reportWebVitals';

  const renderRouter = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorRoot />,
        children: [
          {
          errorElement: <Sivu404 />,
          children: [
            {index:true, loader: etusivuLoader, element:<Etusivu/>},
            {
              path: "projektit",
              children : [
                {
                  index:true, 
                  element: <ProjektiLista/>, 
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
renderRouter();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
