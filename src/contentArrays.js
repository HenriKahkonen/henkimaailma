import { parseDate } from "./components/functions.js";
import { Link } from "react-router-dom";
// HERRA MUN VERENI

// Tämä tiedosto on yksi frontin tärkeimmistä tietokasoista. Tähän viitataan melkein kaikkialla --> tätä päivittämällä suuri osa sivusta päivittyy ehjästi
import { sortByDate } from "./components/functions.js";

import {EnsimmainenPsykoosiEP} from './contentpages/Posts/Pages/Ensimmainen Psykoosi EP.jsx';
import {Ympyrat} from './contentpages/Posts/Pages/Ympyrat.jsx';
import {DJKEFMTP} from './contentpages/Posts/Pages/DJ-Kalustoelukka&FMashina-Tyydyttava-Pikanen.jsx';
import { IPodAikakapseli } from "./contentpages/Posts/Pages/iPodAikakapseli.jsx";
import {TYTWabuKaba2021} from "./contentpages/Posts/Pages/TYT-Wappukabaree2021.jsx";
import {HTMTheSpaceRace} from "./contentpages/Posts/Pages/HTM-The-Space-Race.jsx";
import {AnnanHeviOpinnot} from "./contentpages/Posts/Pages/AnnanHeviOpinnot.jsx";
import {HTMItalwaysForgets} from './contentpages/Posts/Pages/HTM-It-Always-Forgets';
import { SnSSamplepack123 } from "./contentpages/Posts/Pages/SnS-Samplepack.jsx";
import { RealLifeLoot } from "./contentpages/Posts/Pages/RealLifeLoot.jsx";
import {SnSSamplepack4} from "./contentpages/Posts/Pages/SnS-Samplepack4.jsx";

import  {DDLKCNTBI}  from "./contentpages/Posts/Pages/DDLKCNTBI.jsx";
import  {NDFETO}  from "./contentpages/Posts/Pages/NDFETO.jsx";

import { MitaHemmettia } from "./contentpages/Posts/Pages/MitaHemmettia.jsx";
import { IdeoitaNayttamolla } from "./contentpages/Posts/Pages/IdeoitaNayttamolla.jsx";
import { HyvatJaHuonotTeatterit } from "./contentpages/Posts/Pages/HyvatJaHuonotTeatterit.jsx";


// Sivut uudessa elämänjärjestyksessä

export const PostsList = [
    //Musajutut
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
        "title": "Hank The Machine - The Space Race",
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
        "title": "Hank The Machine - It Always Forgets",
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
    {
        "id": "pr5",
        "title": "Sample packs: Sounds and Scapes 1-3",
        "url": "sns-samplepack",
        "imgurl": "https://i.imgur.com/ehzDePS.png",
        "imgform": "SmallSquare",
        "date": new Date("2023-04-03T16:00:00Z"),
        "tags": ["Musiikkituotanto, Äänisuunnittelu, kenttä-äänitteet"],
        "category": "Muuta",
        "element": <SnSSamplepack123/>,
        "desc": "Tekijänoikeusvapaita sampleja ja kenttä-äänitteitä. Osat 1-3."
    },
    {
        "id": "pr6",
        "title": "Real Life Loot",
        "url": "reallifeloot",
        "imgurl": "https://i.imgur.com/i96PNGy.png" ,
        "imgform":"SmallSquare",
        "date": new Date("2023-04-03T16:00:00Z"),
        "dateUpdate": new Date("2023-04-20T16:00:00Z"),
        "tags": ["3D-mallinnus"],
        "category": "Muuta",
        "element": <RealLifeLoot/>,
        "desc": "3D-mallinnuksia tavallisista esineistä."
    },

    {
        "id": "pr7",
        "title": "Sounds and Scapes 4 - Drumkit oneshots",
        "url": "sns-samplepack4",
        "imgurl": "https://i.imgur.com/Yso2Ak7.png",
        "imgform": "SmallSquare",
        "date": new Date("2023-08-26T12:45:00Z"),
        "tags": ["Musiikkituotanto, äänisuunnittelu, kenttä-äänitteet"],
        "category": "Muuta",
        "element": <SnSSamplepack4/>,
        "desc": "Tekijänoikeusvapaita rumpusampleja ja Ableton-drumrack."
    },
    
    

    //Peliarviot
    {
        "id": "pa1",
        "title": "Peliarvio: Shovel Knight",
        "url": "shovel-knight",
        "imgform": "YouTube",
        "date": new Date("2021-11-13T16:00:00Z"),
        "tags": ["Tasoloikka", "Pikseligrafiikka", "Retro"],
        "category": "Peliarviot",
        "ytid" : "tdfxHlKB9yQ",
        "sl": false,
        
        "desc": "Lapio laulaa ja videopelien pelaaminen kiinnostaa."
    },
    {
        "id": "pa2",
        "title": "Peliarvio: Star Realms",
        "category": "Peliarviot",
        "imgform": "YouTube",
        "url": "star-realms",
        "date": new Date("2021-11-27T16:00:00Z"),
        "tags": ["Korttipelit","Lautapelit"],
        "ytid" : "iFO8hB0Cg9w",
        "sl": false,
        "desc": "Korttipeli, avaruuslaivoja ja -tukikohtia."
    },
    {
        "id": "pa3",
        "title": "Peliarvio: Crusader Kings III",
        "category": "Peliarviot",
        "imgform": "YouTube",
        "url": "crusader-kings-iii",
        "date": new Date("2021-12-15T17:00:00Z"),
        "tags": ["Strategia","Keskiaika"],
        "ytid" : "pWg2fVGwG6k",
        "sl": false,
        "desc": "Katsele keskiaikaista Euraasian karttaa."
    },
    {
        "id": "pa4",
        "title": "Peliarvio: Loop Hero",
        "category": "Peliarviot",
        "imgform": "YouTube",
        "url": "loop-hero",
        "date": new Date("2022-06-16T16:00:00Z"),
        "tags": ["Indie darling", "Idle", "Pikseligrafiikka"],
        "ytid" : "YQ2q5ePILW0",
        "desc": "Unohda, kasva ja koeta uudelleen."
    },
    {
        "id": "pa5",
        "title": "Peliarvio: Vampire Survivors",
        "category": "Peliarviot",
        "imgform": "YouTube",
        "url": "vampire-survivors",
        "date": new Date("2022-07-12T17:00:00Z"),
        "tags": ["Indie darling", "Pikseligrafiikka"],
        "ytid" :"n5oSsyv8T-U",
        "desc": "Tyhmänsimppeli puolen tunnin pikseli-ilotulitus."

    },
    {
        "id": "pa6",
        "title": "Peliarvio: Wolfenstein: The New Order",
        "category": "Peliarviot",
        "imgform": "YouTube",
        "url": "wolfenstein-the-new-order",
        "date": new Date("2023-02-23T17:00:00Z"),
        "tags": ["Räiskintä", "Vaihtoehtohistoria"],

        "ytid" :"hmIVHQpGvhg",
        "desc": "Pelastetaan maailma meganatseilta."
    },
    {
        "id": "pa7",
        "title": "Peliarvio: Suomalaiset Freewarepelit 90- ja 00-luvuilta",
        "category": "Peliarviot",
        "imgform": "YouTube",
        "url": "suomalaiset-freewarepelit",
        "date": new Date("2023-12-06T09:00:00Z"),
        "tags": ["Ilmaispelit", "Suomipelit"],

        "ytid" :"ILIggfhUmDg",
        "desc": "Itsenäisyyspäivän tunnelmiin tehty video suomalaisista freewarepeleistä."
    },
    {
        "id": "pa8",
        "title": "Peliarvio: Suomalaiset Freewarepelit, osa 2",
        "category": "Peliarviot",
        "imgform": "YouTube",
        "url": "suomalaiset-freewarepelit-pt2",
        "date": new Date("2023-12-18T16:00:00Z"),
        "tags": ["Ilmaispelit", "Suomipelit", "Mediakritiikki"],

        "ytid" :"lhKfmdEgLkU",
        "desc": "Jatkoa keskustelulle suomalaisista freewarepeleistä."
    },
    {
        "id": "pa9",
        "title": "Peliarvio: Rogue Legacy 2",
        "category": "Peliarviot",
        "imgform": "YouTube",
        "url": "rogue-legacy-2",
        "date": new Date("2024-01-04T16:00:00Z"),
        "tags": ["Roguelite", "Platformer"],

        "ytid" :"St_9QieihVA",
        "desc": "Cellar Door Gamesin tasoloikka-roguelit."
    },

    //VIDEOT
    {
        "id": "v1",
        "title": "(Vain) Yksi sample -> yksi biisi",
        "url": "yksi-sample-yksi-biisi",
        "date": new Date("2022-06-09T16:00:00Z"),
        "tags": ["Musiikkituotanto","Haasteet"],
        "category": "Videot",
        "ytid" : "7EBasiMtlDc",
        "desc": "Musavlog: Millaista oli tehdä 'It Always Forgets'."
    },
    {
        "id": "v2",
        "title": "Vastine Käärijän Cha Cha Cha -plagiointikeskusteluun",
        "url": "cha-cha-cha-plagiarismi",
        "date": new Date("2023-03-28T16:00:00Z"),
        "tags": ["Musiikkianalyysi","Kritiikki","Musiikkitiede","Tekijänoikeus"],
        "category": "Videot",
        "ytid" : "Vw29QZb4_Ng",

        "desc": "Onko Cha Cha Cha plagiaatti?"
    },
    {
        "id": "v3",
        "title": "Tehdään rumpusampler akustisesta rumpusetistä",
        "url": "musavlog-drumrack",
        "date": new Date("2023-08-28T19:30:00Z"),
        "tags": ["Musiikkituotanto"],
        "category": "Videot",
        "ytid" : "7z3H__umOL4",
        "desc": "Musavlog SnS4-samplepäkistä."
    },
    {
        "id": "v4",
        "title": "Kirja-arvio: Lailasta Almaan",
        "url": "arvio-lailasta-almaan",
        "date": new Date("2023-09-14T16:00:00Z"),
        "tags": ["Musiikkitiede","Kritiikki"],
        "category": "Videot",
        "ytid" : "UF2ZfvKXO3I",
        "desc": "Ajatukseni Lailasta-Almaan -kirjan vahvuuksista ja heikkouksista."
    },
    {
        "id": "v5",
        "title": "UMK2024 Tier List",
        "url": "umk2024-tier-list",
        "date": new Date("2024-02-10T16:00:00Z"),
        "tags": ["Musiikki","UMK","Euroviisut"],
        "category": "Videot",
        "ytid" : "NBcTaj2i2R4",
        "desc": "Löysin rantein ajatuksia vuoden 2024 Uuden Musiikin Kilpailu -kandidaateista."
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
        "category":"Arviot",
        "rating": "8+",
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

        "category": "Arviot",
        "sl": false,
        "rating": "8+",
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
        "dateUpdate": new Date('2023-08-26T09:00:00Z'),
        "date": new Date('2023-03-31T20:00:00Z'),
        "imgurl": "https://i.imgur.com/GDkSb3C.png",
        "tags": ["Teatteri", "Listat"],
        "sl": false,
        "element": <HyvatJaHuonotTeatterit/>,
        "desc": "Onko paskaa, onko kunnollista?" 
    },
]

export function changeLog() {
    return(
        <>

    <div>
        <div><b>UMK -reaktiot ja konepellin alla kikkailua</b></div>
        <div className="">{parseDate(new Date("2024-03-11T12:00:00Z"))}</div>
        <ul>
            <li><Link to="../posts/umk2024-tier-list">Video</Link>: UMK2024 tier list lisätty </li>
            <li>Eräs vanha Jives-bugi fiksattu</li>
        </ul>
    </div><br/>

    <div>
        <div><b>Rogue Legacy 2 -arvio</b></div>
        <div className="">{parseDate(new Date("2024-01-04T16:00:00Z"))}</div>
        <ul>
            <li><Link to="../posts/peliarviot/rogue-legacy-2">Arvio</Link>: Rogue Legacy 2 </li>
            <li>Tunkattu <Link to="../posts/peliarviot/">peliarviosivun</Link> navigaatio ja CSS</li>
        </ul>
    </div><br/>

    <div>
        <div><b>Suomipelit pt2</b></div>
        <div className="">{parseDate(new Date("2023-12-18T16:00:00Z"))}</div>
        <ul>
            <li><Link to="../posts/peliarviot/suomalaiset-freewarepelit-pt2">Video</Link> - jatkoa aiemmalle keskustelulle suomalaisista freewarepeleistä </li>
        </ul>
    </div><br/>

    <div>
        <div><b>Suomipelit-video</b></div>
        <div className="">{parseDate(new Date("2023-12-06T10:20:00Z"))}</div>
        <ul>
            <li><Link to="../posts/peliarviot/suomalaiset-freewarepelit">Uusi video</Link> suomalaisista sharewarepeleistä </li>
        </ul>
    </div><br/>

        <div>
        <div><b>Levyraatifiksailua</b></div>
        <div className="">{parseDate(new Date("2023-10-10T12:30:00Z"))}</div>
        <ul>
            <li>Päivitys <Link to="../levyraati">levyraadin</Link> toimintaan: Jives ymmärtää nyt myös spotifyn lyhennettyjä linkkejä (mobiili) </li>
            <li>Saitin footerin linkkejä päivitetty</li>
        </ul>
    </div><br/>

        <div>
        <div><b>Lailasta Almaan-arvio</b></div>
        <div className="">{parseDate(new Date("2023-09-14T16:00:00Z"))}</div>
        <ul>
            <li><Link to="../posts/arvio-lailasta-almaan">Uusi video</Link>: kirja-arvio - Lailasta Almaan</li>
        </ul>
    </div><br/>
        
        <div>
        <div><b>Nettisivun kokonaisvaltainen harjaus</b></div>
        <div className="">{parseDate(new Date("2023-08-28T16:00:00Z"))}</div>
        <ul>
            <li>Nettisivun CSS uudistettu nätimmäksi ja frontin koodia despaghettifioitu</li>
            <li>Blog ja arviot sulautettu {"->"} <Link to="../posts">/posts</Link></li>
            <li><Link to="../posts/sns-samplepack4">SnS4: Rumpusampleja</Link></li>
            <li><Link to="../posts/musavlog-drumrack">Vlog</Link> kyseisten samplejen tuottamisesta</li>
            <li><Link to="../levyraati">Levyraati</Link> nyt omana sivunaan</li>
            <li><Link to="../posts/reallifeloot">Real Life Loottiin</Link> lisätty pari esinettä jotka unohtuneet lisätä aiemmin</li>
        </ul>
    </div><br/>

        <div>
        <div><b>Real Life Loot</b></div>
        <div className="UDdate">{parseDate(new Date("2023-04-14T16:00:00Z"))}</div>
        <ul>
            <li>Projekteihin <Link to="../posts/reallifeloot">lisätty sivu 3D-mallinnuksille "Real Life Loot"</Link></li>
            <li>Metasivu yksinkertaistettu, tukee nyt myös linkkejä</li>
        </ul>
    </div><br/>

    <div>
        <div><b>iPod-aikakapseli ja SnS-samplepack</b></div>
        <div className="UDdate">{parseDate(new Date("2023-04-03T16:00:00Z"))}</div>
        <ul>
            <li>Projekteihin lisätty löytynyt <Link to="../posts/ipod-aikakapseli">iPod-aikakapselin tallenne</Link></li>
            <li><Link to="../posts/sns-samplepack">SnS -samplepaketti</Link> lisätty projekteihin</li>
            <li>Blog: <Link to="../posts/hyvat-ja-huonot-teatteriesitykset">"Hyvät ja huonot teatterijutut"</Link></li>
        </ul>
    </div><br/>

    <div>
        <div><b>Siistintää + Käärijävideo</b></div>
        <div className="UDdate">{parseDate(new Date("2023-03-28T16:00:00Z"))}</div>
        <ul>
            <li>Sivupalkin (navigaatio) järjestystä muutettu</li>
            <li>CSS Yksinkertaistettu kautta linjan ja luettavuutta mobiililaitteilla parannettu hiukan (lisämuutoksia todnäk vielä edessä) </li>
            <li>Lisätty <Link to="../posts/cha-cha-cha-plagiarismi">Käärijä-video ja uusi projektisivu musa-aiheisille YouTube-jutuille</Link></li>
            <li><Link to="../levyraati">Discord-levyraatiin</Link> lisätty filtteri: jos levyä ei ole vielä arvosteltu ei se näy levyjen listassa (ennen näkyi listan perällä, arvosanana 0)</li>
            <li><Link to="../levyraati/docs">Jivesin dokumentaatiota</Link> päivitetty ajankohtaisemmaksi</li>
        </ul>
    </div><br/>

    <div>
        <div><b>Henkimaailma 1.0 on täällä</b></div>
        <div className="UDdate">{parseDate(new Date("2023-02-01T16:00:00Z"))}</div>
        <ul>
            <li>Tervetuloa maailmaan, Henkimaailma</li>
        </ul>
    </div><br/>

    </>
    )
}

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