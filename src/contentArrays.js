// HERRA MUN VERENI

// Tämä tiedosto on yksi frontin tärkeimmistä tietokasoista. Tähän viitataan melkein kaikkialla --> tätä päivittämällä suuri osa sivusta päivittyy ehjästi
/*import { sortByDate } from "./components/functions.js";*/

import {EnsimmainenPsykoosiEP} from './contentpages/Posts/Pages/Ensimmainen Psykoosi EP.jsx';
import {Ympyrat} from './contentpages/Posts/Pages/Ympyrat.jsx';
import {DJKEFMTP} from './contentpages/Posts/Pages/DJ-Kalustoelukka&FMashina-Tyydyttava-Pikanen.jsx';
import {IPodAikakapseli} from "./contentpages/Posts/Pages/iPodAikakapseli.jsx";
import {TYTWabuKaba2021} from "./contentpages/Posts/Pages/TYT-Wappukabaree2021.jsx";
import {HTMTheSpaceRace} from "./contentpages/Posts/Pages/HTM-The-Space-Race.jsx";
import {AnnanHeviOpinnot} from "./contentpages/Posts/Pages/AnnanHeviOpinnot.jsx";
import {HTMItalwaysForgets} from './contentpages/Posts/Pages/HTM-It-Always-Forgets';

import {RealLifeLoot} from "./contentpages/Posts/Pages/RealLifeLoot.jsx";

import { SnSSamplepacksAll } from './contentpages/Posts/Pages/SnS-Samplepacks-All.jsx';
//import {SnSSamplepack123} from "./contentpages/Posts/Pages/SnS-Samplepack.jsx";
//import {SnSSamplepack4} from "./contentpages/Posts/Pages/SnS-Samplepack4.jsx";

import  {DDLKCNTBI}  from "./contentpages/Posts/Pages/DDLKCNTBI.jsx";
import  {NDFETO}  from "./contentpages/Posts/Pages/NDFETO.jsx";

import { MitaHemmettia } from "./contentpages/Posts/Pages/MitaHemmettia.jsx";
import { IdeoitaNayttamolla } from "./contentpages/Posts/Pages/IdeoitaNayttamolla.jsx";
import { HyvatJaHuonotTeatterit } from "./contentpages/Posts/Pages/HyvatJaHuonotTeatterit.jsx";


// Sivut uudessa elämänjärjestyksessä

export const PostsList = [
    //Musajutut
    {
        "dateUpdate": new Date("2024-11-27T16:00:00Z"),

        "id": "SnS-All",
        "title": "Sounds and Scapes: CC0 sound effect collections (Aggregate page)",
        "url": "sns-samplepacks",
        "imgurl": "https://i.imgur.com/Yso2Ak7.png",
        "imgform": "SmallSquare",
        "date": new Date("2023-04-03T12:45:00Z"),

        "tags": ["Music production, sound design, field recordings"],
        "category": "SnS",
        "element": <SnSSamplepacksAll/>,
        "desc": "Royalty-free sound effects, samples and ambient tracks."
    },
    {
        "id": "mu1",
        "title": "Ensimmäinen Psykoosi - Ensimmäinen Psykoosi EP",
        "url": "ensimmainen-psykoosi-ep",
        "imgurl": "https://i.imgur.com/yIwK34x.jpg",
        "imgForm": "square",
        "date": new Date("2016-07-01T16:00:00Z"),
        "tags": ["Bandcamp"],
        "category": "Musiikki",
        "sl": false,
        element: <EnsimmainenPsykoosiEP/>,
        "desc": "EP:n eponyyminen EP."
    },
    {
        "id": "mu2",
        "title": "DJ KALUSTOELUKKA & F-MASHINA - TYYDYTTÄVÄ PIKAINEN",
        "url": "dj-kalustoelukka-f-mashina-tyydyttava-pikainen",
        "imgurl": "https://i.imgur.com/wg4MqeB.png",
        "imgform": "Soundcloud",
        "date": new Date("2020-05-01T16:00:00Z"),
        "tags": ["Soundcloud"],
        "category": "Musiikki",
        "sl": false,
        element: <DJKEFMTP/>,
        "desc": "Ding!"
    },
    {
        "id": "mu3",
        "title": "The Space Race",
        "url": "htm-the-space-race",
        "imgurl": "https://i.imgur.com/ChOu6d3.png",
        "imgform": "Soundcloud",
        "date": new Date("2021-11-01T16:00:00Z"),
        "tags": ["Soundcloud"],
        "category": "Musiikki",
        "ytid" : "7EBasiMtlDc",
        "sl": false,
        element: <HTMTheSpaceRace/>,
        "desc": "Tuijota välinpitämättömään avaruuteen."
    },
    {
        "id": "mu4",
        "title": "It Always Forgets",
        "url": "htm-it-always-forgets",
        "imgurl": "https://i.imgur.com/1Z9Uuur.png",
        "imgform": "Soundcloud",
        "date": new Date("2022-06-09T16:00:00Z"),
        "tags": ["Soundcloud","YouTube"],
        "category": "Musiikki",
        "sl": false,
        element: <HTMItalwaysForgets/>,
        "desc": "Yhtä samplea manipuloimalla tehty kappale."
    },

    //Kaikenlaista muuta
    {
        "id": "pr1",
        "title": "Ympyrät",
        "url": "ympyrat",
        "imgurl": "https://i.imgur.com/QnciJoJ.png",
        "imgform": "SmallSquare",
        "date": new Date("2018-12-01T16:00:00Z"),
        "tags": ["Musiikkikritiikki"],
        "category": "Muuta",
        "sl": false,
        element: <Ympyrat/>,
        "desc": "Kuule paremmasta."
    },
    {
        "id": "pr2",
        "title": "iPod-aikakapseli",
        "url": "ipod-aikakapseli",
        "imgurl": "https://i.imgur.com/ThNSS88.png",
        "imgform": "Landscape",
        "date": new Date("2021-04-27T16:00:00Z"),
        "tags": ["Radio"],
        "category": "Muuta",
        "sl": false,
        element: <IPodAikakapseli/>,
        "desc": "Lähetetty Turun Wappuradiossa 27.04.2021."
    },
    {
        "id": "pr3",
        "title": "Turun Ylioppilasteatteri - Wappukabaree 2021",
        "url": "tyt-wappukabaree2021",
        "imgurl": "https://i.imgur.com/5SU1ClM.png",
        "imgform": "Landscape",
        "date": new Date("2021-04-30T18:00:00Z"),
        "tags": ["Teatteri","Musiikki"],
        "sl": false,
        "category": "Muuta",
        element: <TYTWabuKaba2021/>,
        "desc": "Teatterii, teatterii!"
    },
    {
        "id": "pr4",
        "title": "Annan Hevi Opinnot",
        "url": "annan-hevi-opinnot",
        "imgurl": "https://i.imgur.com/m9WyZOC.png",
        "imgform": "Landscape",
        "date": new Date("2022-04-24T16:00:00Z"),
        "tags": ["Radio"],
        "category": "Muuta",
        "sl": false,
        element: <AnnanHeviOpinnot/>,
        "desc": "Lähetetty Turun Wappuradiossa 24.4.2022."
    },
    // Sounds and Scapes
    /*{
        "id": "SnS3",
        "title": "Sample packs: Sounds and Scapes 1-3",
        "url": "sns-samplepack",
        "imgurl": "https://i.imgur.com/ehzDePS.png",
        "imgform": "SmallSquare",
        "date": new Date("2023-04-03T16:00:00Z"),
        "tags": ["Musiikkituotanto, Äänisuunnittelu, kenttä-äänitteet"],
        "category": "SnS",
        "element": <SnSSamplepack123/>,
        "desc": "Tekijänoikeusvapaita sampleja ja kenttä-äänitteitä. Osat 1-3."
    },
    {
        "id": "SnS2",
        "title": "Sounds and Scapes 4 - Drumkit oneshots",
        "url": "sns-samplepack4",
        "imgurl": "https://i.imgur.com/Yso2Ak7.png",
        "imgform": "SmallSquare",
        "date": new Date("2023-08-26T12:45:00Z"),
        "tags": ["Musiikkituotanto, äänisuunnittelu, kenttä-äänitteet"],
        "category": "SnS",
        "element": <SnSSamplepack4/>,
        "desc": "Tekijänoikeusvapaita rumpusampleja ja Ableton-drumrack."
    },*/

    // 3D-mallinnus
    {
        "id": "3D1",
        "title": "Real Life Loot",
        "url": "reallifeloot",
        "imgurl": "https://i.imgur.com/i96PNGy.png" ,
        "imgform":"SmallSquare",
        "date": new Date("2023-04-03T16:00:00Z"),
        "dateUpdate": new Date("2023-04-20T16:00:00Z"),
        "tags": ["3D-mallinnus"],
        "category": "3D",
        "element": <RealLifeLoot/>,
        "desc": "3D-mallinnuksia tavallisista esineistä."
    },


    
    //   ARVIOT  
    {
        "id": "a2",
        "type": "Album",
        "title": "Arvio: Napalm Death - From Enslavement To Obliteration",
        "url": "arvio-napalm-death-from-enslavement-to-obliteration",
        "date": new Date("2023-02-21T16:00:00Z"),
        "tags": ["Musiikki","Grindcore"],
        "imgurl": "https://i.discogs.com/g-CnSpZefboKTRrLwhqITDyK_o7aOxMWn_ofzRS9s3s/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzM1/Ny0xNDAwNjY3NjA2/LTM5NDcuanBlZw.jpeg",
        "data": {
                "artist": ["Napalm Death"],
                "albumtitle": "From Enslavement To Obliteration",
                "year": "1988",
                "label": "Earache Records",
        },
        "category":"Musiikkiarviot",
        "rating": "81",
        "sl": false,
        "element": <NDFETO/>
    },
    {
        "id": "a1",
        "type": "Album",
        "title": "Arvio: Dxxxa D & Hzzzt - Low Key Cue New Tan Bloss It",
        "url": "arvio-dxxxa-d-&-hzzzt-low-key-cue-new-tan-bloss-it",
        "date": new Date("2023-02-20T16:00:00Z"),
        "tags": ["Musiikki","Hip hop", "Spoken word"],
        "imgurl": "https://i.discogs.com/lMtOVApOVAEg6zVhSFml1Q9uqHk6jAyz59j9wdPwhkY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2MjA1/ODItMTM5ODE4NzQ1/My02NDQ4LmpwZWc.jpeg",
        "data": {
                "artist": ["Dxxxa D", "Hzzzt"],
                "albumtitle": "Low Key Cue New Tan Bloss It",
                "year": "2014",
                "label": "Helmi Levyt"
        },

        "category": "Musiikkiarviot",
        "sl": false,
        "rating": "83",
        "element": <DDLKCNTBI/>
    },

    // Blog
    {
        "id": "blog1",
        "title": "Mitä hemmettiä nyt taas Henkka",
        "category": "Blog",
        "url": "mita-hemmettia-nyt-taas-henkka",
        "date": new Date('2023-02-22T20:00:00Z'),
        "imgurl": "https://i.imgur.com/zirAgsS.png",
        "tags": ["Meta", "Ohjelmointi"],
        "sl": false,
        "element": <MitaHemmettia/>,
        "desc": "Tein itselleni kotisivut."
    },
    {
        "id": "blog2",
        "title": "Ideoita näyttämöllä - Merkitysten konstruointi näyttämömusiikin tuotantoprosessissa",
        "category": "Blog",
        "url": "ideoita-nayttamolla",
        "dateUpdate": new Date('2023-02-23T16:00:00Z'),
        "date": new Date('2023-02-22T20:00:00Z'),
        "imgurl": "https://i.imgur.com/wNIBxfY.png",
        "tags": ["Musiikkitiede", "Teatteri", "Kouluhommat"],
        "sl": false,
        "element": <IdeoitaNayttamolla/>,
        "desc": "Mitä kulisseissa tehdään, jotta musiikki viestisi näyttämöllä sitä, mitä sen pitää viestiä?" 
    },
    {
        "id": "blog3",
        "title": "Hyvät ja huonot teatteriesitykset",
        "category": "Blog",
        "url": "hyvat-ja-huonot-teatteriesitykset",
        "dateUpdate": new Date('2024-08-26T18:00:00Z'),
        "date": new Date('2023-03-31T20:00:00Z'),
        "imgurl": "https://i.imgur.com/GDkSb3C.png",
        "tags": ["Teatteri", "Listat"],
        "sl": false,
        "element": <HyvatJaHuonotTeatterit/>,
        "desc": "Onko paskaa, onko kunnollista?" 
    },
]

/*
const filterCategory=(fullArray,category)=> {
    let peliarviot=[]
    for (let i=0;i < fullArray.length; i++) {
        if (fullArray[i]["category"]===category) {
            peliarviot= peliarviot.concat(fullArray[i])
        }
    }
    return sortByDate(peliarviot)
}

const filterSpotLighteds=(fullArray)=> {
    let spotlighteds=[]
    for (let i=0;i < fullArray.length; i++) {
        if (fullArray[i]["sl"]===true) {
            spotlighteds = spotlighteds.concat(fullArray[i])
            }
        }
    return sortByDate(spotlighteds)
}
*/

/*
export const PostsLists = {
    peliarviot : filterCategory(PostsList,"Peliarviot"),
    videot: filterCategory(PostsList,"Videot"),
    arviot: filterCategory(PostsList,"Arviot"),
    blog: filterCategory(PostsList,"Blog"),
    spotlight: filterSpotLighteds(PostsList),

    findById(id) {
        for (let i=0;i < PostsList.length; i++) {
            if (PostsList[i]["id"]===id) {
                return PostsList[i]
                }
            }
        return null
    }
}
    */