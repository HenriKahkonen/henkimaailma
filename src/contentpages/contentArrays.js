import {TYTWabuKaba2021} from "./Projektit/Projektialasivut/TYT-Wappukabaree2021.jsx";
import {EnsimmainenPsykoosiEP} from './Projektit/Projektialasivut/Ensimmainen Psykoosi EP.jsx';
import {Ympyrat} from './Projektit/Projektialasivut/Ympyrat.jsx';
import {YouTubePeliarviot} from './Projektit/Projektialasivut/YouTubePeliarviot.jsx'
import {DJKEFMTP} from './Projektit/Projektialasivut/MiscMusiikki/DJ-Kalustoelukka&FMashina-Tyydyttava-Pikanen.jsx';
import {HTMItalwaysForgets} from './Projektit/Projektialasivut/MiscMusiikki/HTM-It-Always-Forgets';
import {HTMTheSpaceRace} from "./Projektit/Projektialasivut/MiscMusiikki/HTM-The-Space-Race.jsx";
import { MitaHemmettia } from "./Blog/BlogPosts/MitaHemmettia.jsx";
import { IdeoitaNayttamolla } from "./Blog/BlogPosts/IdeoitaNayttamolla.jsx";
import  DDLKCNTBI  from "./Arviot/ArvioPages/DDLKCNTBI.jsx";
import  NDFETO  from "./Arviot/ArvioPages/NDFETO.jsx";
import { AnnanHeviOpinnot } from "./Projektit/Projektialasivut/AnnanHeviOpinnot.jsx";
import { DiscordLevyRaati } from "./Projektit/Projektialasivut/Discordlevyraati/Discordlevyraati.jsx";

export const ContentArrays = [
    
    {list: "peliarviot",
    content :[
        {
            "id": 1,
            "title": "Shovel Knight (Peliarvio)",
            "url": "shovel-knight",
            "fullUrl": "projektit/peliarviot/shovel-knight",
            "date": new Date("2021-11-13T16:00:00Z"),
            "tags": ["Tasoloikka", "Pikseligrafiikka", "Retro"],
            "ftags": ["YouTube"],
            "ytid" : "tdfxHlKB9yQ",
            "sl": false,
        },
        {
            "id": 2,
            "title": "Star Realms (Peliarvio)",
            "url": "star-realms",
            "fullUrl": "projektit/peliarviot/star-realms",
            "date": new Date("2021-11-27T16:00:00Z"),
            "tags": ["Korttipelit","Lautapelit"],
            "ftags": ["YouTube"],
            "ytid" : "iFO8hB0Cg9w",
            "sl": false
        },
        {
            "id": 3,
            "title": "Crusader Kings III (Peliarvio)",
            "url": "crusader-kings-iii",
            "fullUrl": "projektit/peliarviot/crusader-kings-iii",
            "date": new Date("2021-12-15T17:00:00Z"),
            "tags": ["Strategia","Keskiaika"],
            "ftags": ["YouTube"],
            "ytid" : "pWg2fVGwG6k",
            "sl": false
        },
        {
            "id": 4,
            "title": "Loop Hero (Peliarvio)",
            "url": "loop-hero",
            "fullUrl": "projektit/peliarviot/loop-hero",
            "date": new Date("2022-06-16T16:00:00Z"),
            "tags": ["Indie darling", "Idle", "Pikseligrafiikka"],
            "ftags": ["YouTube"],
            "ytid" : "YQ2q5ePILW0",
            "sl": true
        },
        {
            "id": 5,
            "title": "Vampire Survivors (Peliarvio)",
            "url": "vampire-survivors",
            "fullUrl": "projektit/peliarviot/vampire-survivors",
            "date": new Date("2022-07-12T17:00:00Z"),
            "tags": ["Indie darling", "Pikseligrafiikka"],
            "ftags": ["YouTube"],
            "ytid" :"n5oSsyv8T-U",
            "sl": true
        }
    ]},

    {list:"blog",
    content :[
    {
        "id": "blog1",
        "title": "Mitä hemmettiä nyt taas Henkka",
        "url": "mita-hemmettia-nyt-taas-henkka",
        "date": new Date('2022-12-12T20:00:00Z'),
        "tags": ["Meta", "Ohjelmointi"],
        "sl": false,
        "element": <MitaHemmettia/>
    },
    {
        "id": "blog2",
        "title": "Ideoita näyttämöllä - Merkitysten konstruointi näyttämömusiikin tuotantoprosessissa",
        "url": "ideoita-nayttamolla",
        "date": new Date('2022-12-13T16:00:00Z'),
        "tags": ["Musiikkitiede", "Teatteri", "Koulu"],
        "sl": false,
        "element": <IdeoitaNayttamolla/> 
    }
    ]},

    {list:"projektit",
    content: [
        /*{
            "id": 1,
            "title": "Misc musahommat",
            "url": "music-misc",
            "imgurl": "https://i.imgur.com/M7VXshm.png",
            "date": new Date("2022-06-09T16:00:00Z"),
            "tags": ["Musiikki", "Soundcloud"],
            "sl": false,
        },*/
        {
            "id": 2,
            "title": "Ensimmäinen Psykoosi - Ensimmäinen Psykoosi EP",
            "url": "ensimmainen-psykoosi-ep",
            "imgurl": "https://i.imgur.com/yIwK34x.jpg",
            "date": new Date("2016-07-01T16:00:00Z"),
            "tags": ["Musiikki","Bandcamp"],
            "ftags": ["Musiikki"],
            "sl": false,
            element: <EnsimmainenPsykoosiEP/>
        },
        {
            "id": 3,
            "title": "Ympyrät",
            "url": "ympyrat",
            "imgurl": "https://i.imgur.com/KNi8URi.png",
            "date": new Date("2018-12-01T16:00:00Z"),
            "tags": ["Muut"],
            "ftags": ["Muut"],
            "sl": false,
            "element": <Ympyrat/>,
        },
        {
            "id": 4,
            "title": "Turun Ylioppilasteatteri - Wappukabaree 2021",
            "url": "tyt-wappukabaree2021",
            "imgurl": "https://i.imgur.com/ovxyCTi.jpg",
            "date": new Date("2021-04-30T18:00:00Z"),
            "tags": ["Musiikki","Muut","Teatteri"],
            "sl": false,
            "ftags": ["Muut"],
            "element": <TYTWabuKaba2021/>,
            
        },
        {
            "id": 5,
            "title": "Peliarviot Youtubessa",
            "url": "peliarviot",
            "imgurl": "https://i.imgur.com/TO8XN4w.png",
            "date": new Date("2022-07-12T17:00:00Z"),
            "tags": ["YouTube", "Peliarviot"],
            "ftags": ["YouTube"],
            "sl": false,
            "element": <YouTubePeliarviot/>,
        },
        {
            "id": 6,
            "title": "Hank The Machine - The Space Race",
            "url": "htm-the-space-race",
            "imgurl": "https://i.imgur.com/pepjlCF.png",
            "date": new Date("2021-11-01T16:00:00Z"),
            "tags": ["Musiikki", "Soundcloud"],
            "ftags": ["MusicMisc"],
            "ytid" : "7EBasiMtlDc",
            "sl": false,
            "element": <HTMTheSpaceRace/>
        },
        {
            "id": 7,
            "title": "Hank The Machine - It Always Forgets",
            "url": "htm-it-always-forgets",
            "imgurl": "https://i.imgur.com/IJdHa94.png",
            "date": new Date("2022-06-09T16:00:00Z"),
            "tags": ["Musiikki","Soundcloud","YouTube"],
            "ftags": ["MusicMisc"],
            "sl": false,
            "element": <HTMItalwaysForgets/>
        },
        {
            "id": 8,
            "title": "DJ KALUSTOELUKKA & F-MASHINA - TYYDYTTÄVÄ PIKAINEN",
            "url": "dj-kalustoelukka-f-mashina-tyydyttava-pikainen",
            "imgurl": "https://i.imgur.com/AK6fHpq.png",
            "date": new Date("2020-05-01T16:00:00Z"),
            "tags": ["Musiikki","Soundcloud"],
            "ftags": ["MusicMisc"],
            "sl": false,
            "element": <DJKEFMTP/>
        },
        {
            "id": 9,
            "title": "Annan Hevi Opinnot (Turun Wappuradio 24.4.2022)",
            "url": "annan-hevi-opinnot",
            "imgurl": "https://i.imgur.com/81yV534.jpg",
            "date": new Date("2022-04-24T16:00:00Z"),
            "tags": ["Radio"],
            "ftags": ["Muut"],
            "sl": false,
            "element": <AnnanHeviOpinnot/>
        },
        {
            "id": 10,
            "title": "Discord-levyraati",
            "url" : "discordlevyraati",
            //"imgurl" :
            "date" : new Date("2023-02-08T16:00:00Z"),
            "tags": ["Ohjelmointi"],
            "ftags" : ["Muut"],
            "sl" : false,
            "element" : <DiscordLevyRaati/>
        }
    ]},

    {list:"arviot",
    content: [
        {
            "id": 1,
            "type": "Album",
            "title": "Napalm Death - From Enslavement To Obliteration",
            "url": "napalm-death-from-enslavement-to-obliteration",
            "date": new Date("2023-01-01T16:00:00Z"),
            "genre": ["Grindcore"],
            "coverArt": "https://i.discogs.com/g-CnSpZefboKTRrLwhqITDyK_o7aOxMWn_ofzRS9s3s/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzM1/Ny0xNDAwNjY3NjA2/LTM5NDcuanBlZw.jpeg",
            "data": {
                    "artist": ["Napalm Death"],
                    "albumtitle": "From Enslavement To Obliteration",
                    "year": "1988",
                    "label": "Earache Records",
            },
            "ftags": "Musiikki",
            "rating": 68/100,
            "sl": false,
            "element": <NDFETO/>
        },
        {
            "id": 2,
            "type": "Album",
            "title": "Dxxxa D & Hzzzt - Low Key Cue New Tan Bloss It",
            "url": "dxxxa-d-hzzzt-low-key-cue-new-tan-bloss-it",
            "date": new Date("2023-01-01T16:00:00Z"),
            "genre": ["Hip hop", "Spoken word"],
            "coverArt": "https://i.discogs.com/lMtOVApOVAEg6zVhSFml1Q9uqHk6jAyz59j9wdPwhkY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2MjA1/ODItMTM5ODE4NzQ1/My02NDQ4LmpwZWc.jpeg",
            "data": {
                    "artist": ["Dxxxa D", "Hzzzt"],
                    "albumtitle": "Low Key Cue New Tan Bloss It",
                    "year": "1988",

            },
            "ftags": "Musiikki",
            "sl": false,
            "rating": 80/100,
            "element": <DDLKCNTBI/>
        }
    ]},

    {list: "changeLog",
    content: [
        {
            "id": 1,
            "major": true,
            "title": "Henkimaailma 1.0 on täällä",
            "date": new Date("2023-02-01T16:00:00Z"),
            "bp": [
                "Lisätty asioita",
                "Tehty juttuja",
            ],
        },
        {
            "id": 2,
            "major": false,
            "title": "Testiupdate",
            "date": new Date("2023-02-01T13:00:00Z"),
            "bp": [
                "Testaan asiaa",
            ],
        },
    ]},
]


    /*{list:"miscMusic",
    content: [
        {
            "id": 1,
            "title": "Hank The Machine - The Space Race",
            "url": "htm-the-space-race",
            "imgurl": "https://i.imgur.com/BXQBspf.jpg",
            "date": new Date("2021-11-01T16:00:00Z"),
            "tags": ["Musiikki", "Soundcloud"],
            "ytid" : "7EBasiMtlDc",
            "sl": false,
            "element": <HTMTheSpaceRace/>
        },
        {
            "id": 2,
            "title": "Hank The Machine - It Always Forgets",
            "url": "htm-it-always-forgets",
            "imgurl": "https://i.imgur.com/6zotfzA.jpg",
            "date": new Date("2022-06-09T16:00:00Z"),
            "tags": ["Musiikki","Soundcloud","YouTube"],
            "sl": false,
            "element": <HTMItalwaysForgets/>
        },
        {
            "id": 3,
            "title": "DJ KALUSTOELUKKA & F-MASHINA - TYYDYTTÄVÄ PIKAINEN",
            "url": "dj-kalustoelukka-f-mashina-tyydyttava-pikainen",
            "imgurl": "https://i.imgur.com/r9Kaslf.jpg",
            "date": new Date("2020-05-01T16:00:00Z"),
            "tags": ["Musiikki","Soundcloud"],
            "sl": false,
            "element": <DJKEFMTP/>
        },
    ]}*/
