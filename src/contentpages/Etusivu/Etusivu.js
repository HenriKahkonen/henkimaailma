import './Etusivu.css'
import { KontsaArray } from "../../contentArrays.js";
import { 
    NavLink,
    useLoaderData,
} from "react-router-dom";import { getRatingPngFromRating } from '../../components/functions';


function SpotLightBox() {
    let imgurl = "https://i.imgur.com/fHHgmrq.png" //spaceholder
    let imgClass;
    const item = KontsaArray.spotlightArray[0];
    // Jos spotlightin juttu on Tubevideo, sen thumbnailin kuvasuhde on eri
    // --> vaihdetaan kuvan className
    if (item.ftags.includes("YouTube")) {
        imgurl = "http://img.youtube.com/vi/"+item.ytid+"/maxresdefault.jpg"
        imgClass = "contentBoxImageContainerYT"
    } else {
        imgClass = "contentBoxImageContainer"
    }
    return (
        <div className="etusivuContentBox">
            <div className="contentBoxHeader">Uusinta KONTENTTIA:</div>
                <div className={imgClass}>
                    <NavLink to={item.fullUrl}><img src={imgurl} width="100%" alt={item.title}></img></NavLink>
                </div>
                <div className="contentBoxFooter">
                    <div><NavLink to={item.fullUrl}>{item.title}</NavLink></div>
                </div>
        </div>
    )
}
function BlogBox() {
    let imgurl = "https://i.imgur.com/fHHgmrq.png" //spaceholder
    const item = KontsaArray.blog[0];
    if (item.imgurl) {imgurl = item.imgurl}
    return (
        <>
        <div className="etusivuContentBox">
                <div className="contentBoxHeader">Blogi:</div>
                    <div className="contentBoxImageContainer">
                        <NavLink to={"blog/"+item.url}><img src={imgurl} width="100%" alt={item.title}></img></NavLink>
                    </div>
                <div className="contentBoxFooter"><NavLink to={"blog/"+item.url}>{item.title}</NavLink></div>
            
        </div>
        </>
    )
}

function ArvioBox() {
    //Kokeillaan toistaiseksi tehdä näin, jos arviolta puuttuu kuva se vaatii korjausta ja sietääkin näkyä rumasti
    //let imgurl = "https://i.imgur.com/fHHgmrq.png" //spaceholder
    const item = KontsaArray.arviot[0];
    return (
        <div className="etusivuContentBox">
            <div className="contentBoxHeader">Arvioista:</div>
            <div className="contentBoxImageContainer">
            <NavLink to={"arviot/"+item.url}><img src={item.coverArt} width="100%" alt={item.title}></img></NavLink>
            </div>
            <div className="contentBoxFooter">
                <NavLink to={"arviot/"+item.url}>{item.title}</NavLink>
            </div>
        </div>
    )
}

export function LevyRaatiLeaderboard(leaderb) {
    if(leaderb[0]===undefined) { return }
    // Kopio juuren listasta ja 10 ensimmäistä
    let leaderboard = [...leaderb].splice(0,10); 
    return (
        <div id="levyArvioBotTopList">
            <div className="levyRaatiLeaderboardHeader">Discord-levyraati leaderboard</div>
            {leaderboard.map(item => 
                <div className="levyraatiLeaderboardItem" key={item[2]}>
                    <img src={item[2]} alt=""></img>
                    <div className="levyraatiLeaderboardDataBox">
                        <b>{item[0]}</b>
                        {item[1]} ({item[3].slice(0,4)})
                        <div className="lrlbCopyright">{item[4][0].text}</div>
                    </div>
                    <div className="levyraatiLeaderboardRatingBox">
                        <img src={getRatingPngFromRating(item[5])} alt={(item[5]/10)+" pistettä"}></img>
                        <div className="lrlbrn">({item[6]})</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export function SkriimBuilder(status) {
    if (status===true) {
        return (
            <>
            <div id="twitchStreamBox">
                <div className="skriimiBanneri">
                    <img src="https://i.imgur.com/eHZQF0k.png" alt="Banneri joka huomauttaa livestreamin olevan käynnissä"></img>
                </div>
                <div className="skriimiIkkuna"><iframe 
                    title="LiveStream player"
                    src="https://player.twitch.tv/?channel=henkonenvideo&parent=localhost" 
                    allowFullScreen={true} 
                    height="567" 
                    width="930">  
                </iframe></div>
            </div>
            </>
        )
    } else { return }
}




export function Etusivu() {
    const {levyRaatiLeaderBoard, skriimThings} = useLoaderData();
    return (
        <>
        {skriimThings}
        <div id="etusivuContainer">
            <div className="etusivuBoxesContainer">
                {SpotLightBox()}
                {ArvioBox()}
                {BlogBox()}
            </div>
            {levyRaatiLeaderBoard}
        </div>
        </>
    )
}