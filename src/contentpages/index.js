import Sivu404 from './Sivu404/Sivu404.js';
import ErrorRoot from './Sivu404/ErrorRoot.js'

import {
    Etusivu,
    //loader as etusivuLoader,
} from './Etusivu/Etusivu.js';

import Posts from './Posts/Posts.jsx'
import {PostPage, loader as PostLoader} from './Posts/PostPage.jsx'
import {YouTubePeliarviosivu,loader as youTubePeliarvioLoader} from './Posts/GenerativePages/YouTubePeliarviosivu.jsx';
import { YouTubePeliarviot } from './Posts/GenerativePages/YouTubePeliarviot.jsx';

import {Levyraati} from "./Levyraati/Levyraati.jsx";
import {LevyraatiDocs} from "./Levyraati/LevyraatiDocs.jsx"
import {LevyraatiTietosuoja} from "./Levyraati/LevyraatiTietosuoja.jsx"

import {Meta} from './Meta/Meta.jsx';
import CV from './Meta/CV.js';
import Yhteys from './Meta/Yhteys.js';

export {
    ErrorRoot,
    Sivu404,

    Etusivu,

    Posts,
    PostPage,
    PostLoader,
    YouTubePeliarviot,
    YouTubePeliarviosivu,
    youTubePeliarvioLoader,

    Levyraati,
    LevyraatiDocs,
    LevyraatiTietosuoja,
    
    Meta,
    CV,
    Yhteys   
}

