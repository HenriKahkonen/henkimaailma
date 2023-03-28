import Sivu404 from './Sivu404/Sivu404.js';
import ErrorRoot from './Sivu404/ErrorRoot.js'

import {
    Etusivu,
    //loader as etusivuLoader,
} from './Etusivu/Etusivu.js';

import CV from './CV/CV.js';

import Meta from './Meta/Meta.js';

import {ProjektiLista} from './Projektit/Projektilista.jsx';
import {
    loader as projektiLoader,
    Projekti
} from "./Projektit/Projekti.jsx";

import { YouTubePeliarviot } from './Projektit/Projektialasivut/YouTubePeliarviot.jsx';
import { 
    YouTubePeliarviosivu,
    loader as youTubePeliarvioLoader    
} from './Projektit/Projektialasivut/YouTubePeliarviosivu.jsx';

///TÄÄLLÄ OLLAAN NYT
import { MusiikkiYouTube } from './Projektit/Projektialasivut/MusiikkiYouTube.jsx';
import { 
    MusiikkiYouTubeSivu,
    loader as musiikkiYTLoader    
} from './Projektit/Projektialasivut/MusiikkiYouTubeSivu.jsx';

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

import {
    DiscordLevyRaati,
} from "./Projektit/Projektialasivut/Discordlevyraati/Discordlevyraati.jsx";
import {DiscordLevyRaatiDocs} from "./Projektit/Projektialasivut/Discordlevyraati/DiscordLevyraatiDocs.jsx"
import {DiscordLevyRaatiTietosuoja} from "./Projektit/Projektialasivut/Discordlevyraati/DiscordLevyraatiTietosuoja.jsx"
export {
    ErrorRoot,
    Sivu404,

    Etusivu,

    Projekti,
    ProjektiLista,
    projektiLoader,

    YouTubePeliarviot,
    YouTubePeliarviosivu,
    youTubePeliarvioLoader,

    MusiikkiYouTube,
    MusiikkiYouTubeSivu,
    musiikkiYTLoader,

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

    DiscordLevyRaati,
    DiscordLevyRaatiDocs,
    DiscordLevyRaatiTietosuoja
}

