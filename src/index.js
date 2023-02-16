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
  //etusivuLoader,
  ProjektiLista,
  Projekti,
  projektiLoader,
  Blog,
  Meta,
  CV,
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
  //discordLevyRaatiLoader
} from "./contentpages"

import { 
  LevyRaatiLeaderboard,
  SkriimBuilder } from './contentpages/Etusivu/Etusivu';
import { 
  FetchLevyRaatiData, 
  isSkriimOnline } from './components/functions';

const renderRouter = (lrData,liveStatus) => {
  const router = createBrowserRouter([
    { path: "*", element: <Root />, errorElement: <ErrorRoot />, 
      children: [{
        errorElement: <Sivu404 />,
        children: [
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
          { path: "projektit",
            children : [
              { index:true, element:<ProjektiLista/> },
              { path: ":projectUrl", element: <Projekti/>, loader: projektiLoader, },
              // TODO Discordlevyraati
              { path: "discordlevyraati",
                children: [
                  { index:true, element: <DiscordLevyRaati/>},
                  { path:":discLevyRaatiSubPage" /*TODO: SUBPAGE-ELEMENT?*/ },],},
              { path: "peliarviot",
                children : [
                  { index:true, element:<YouTubePeliarviot/>},
                  { path:":peliarvioTitle", 
                    loader: youTubePeliarvioLoader,
                    element: <YouTubePeliarviosivu/>,},
                  ],},
              ],},
          { path: "blog",
            children: [
              { index:true, loader: blogLoader, element:<Blog/>},
              { path: ":blogPost", loader: blogItemLoader, element: <BlogItem/>},
            ],},
          { path: "arviot",
            children: [
              { index:true, loader: arviotLoader, element: <Arviot/> },
              { path: ":arvio", loader: arvioItemLoader, element: <ArvioItem/> },
            ],},
          { path: "meta", element: <Meta/> },
          { path: "cv", element: <CV/> },
        ],
      }]
    },
  ]);
  ReactDOM.createRoot(document.getElementById('avtal')).render( 
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

// React-reititin (nettisivu) käynnistyy
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

// En halua, kiitos kysymästä
//reportWebVitals();

