import { sortByDate } from '../components/functions.js';

import Sivu404 from './Sivu404/Sivu404.js';
import ErrorRoot from './Sivu404/ErrorRoot.js'

import {
    Etusivu,
    loader as etusivuLoader} from './Etusivu/Etusivu.js';

import CV from './CV/CV.js';
import Meta from './Meta/Meta.js';

import {ProjektiLista} from './Projektit/Projektilista.jsx';
import {
    loader as projektiLoader,
    Projekti
} from "./Projektit/Projekti.jsx";
/*
import {
    MiscMusiikkiPage,
    loader as miscMusiikkiLoader
} from "./Projektit/Projektialasivut/MiscMusiikkiSivu.jsx";
import {MiscMusiikki} from "./Projektit/Projektialasivut/MiscMusiikki.jsx"*/

import { YouTubePeliarviot } from './Projektit/Projektialasivut/YouTubePeliarviot.jsx';
import { 
    YouTubePeliarviosivu,
    loader as youTubePeliarvioLoader    
} from './Projektit/Projektialasivut/YouTubePeliarviosivu.jsx';

import {
    Blog,
    loader as blogLoader} from './Blog/Blog.js';
import {
    BlogItem,
    loader as blogItemLoader
} from './Blog/BlogItem.jsx';

import {
    Arviot,
    loader as arviotLoader,
} from './Arviot/Arviot.js';
import {
    ArvioItem,
    loader as arvioItemLoader,
} from "./Arviot/ArvioItem.jsx";

import {ContentArrays} from './contentArrays';

export {
    ErrorRoot,
    Sivu404,

    Etusivu,
    etusivuLoader,

    Projekti,
    ProjektiLista,
    /*projektilistaLoader,*/
    projektiLoader,

    /*
    MiscMusiikki,
    MiscMusiikkiPage,
    miscMusiikkiLoader,*/

    YouTubePeliarviot,
    YouTubePeliarviosivu,
    youTubePeliarvioLoader,

    blogLoader,
    Blog,
    blogItemLoader,
    BlogItem,

    Arviot,
    arviotLoader,
    ArvioItem,
    arvioItemLoader,

    CV,
    Meta,
}

const filterSpotLighteds=(fullArray)=> {
    let spotlighteds=[]
    for (let i=0;i < fullArray.length; i++) {
        for (let y=0; y < fullArray[i]["content"].length; y++) {
            if (fullArray[i]["content"][y]["sl"]===true) {
                spotlighteds = spotlighteds.concat(fullArray[i]["content"][y])
            }
        }
    }
    return spotlighteds}

export const KontsaArray = {
        kaikki : sortByDate(ContentArrays),
        peliarviot : sortByDate(ContentArrays[0].content),
        blog : sortByDate(ContentArrays[1].content),
        projektit : sortByDate(ContentArrays[2].content),
        arviot : sortByDate(ContentArrays[3].content),
        /*miscMusiikki : sortByDate(ContentArrays[4].content),*/
        spotlightArray : filterSpotLighteds(sortByDate(ContentArrays))
}