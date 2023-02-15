import './Etusivu.css'
import axios from "axios";
import { KontsaArray } from "..";
import { 
    NavLink,
    useLoaderData, 
} from "react-router-dom";
import { FetchLevyRaatiData, isSkriimOnline } from '../../components/functions';
import { getRatingPngFromRating } from '../../components/functions';

export async function loader() {
    //TODO: Käytä promisen tulosta Skriimbuilderissa
    let liveStatus = await isSkriimOnline()
    console.log("loader, live: ",liveStatus)
    const SkriimThings = await SkriimBuilder(liveStatus)
    const levyRaatiData = await FetchLevyRaatiData();
    const LevyraatileaderboardComponent = await LevyRaatiLeaderboard(levyRaatiData);
    return {SkriimThings, LevyraatileaderboardComponent}
}

async function LevyRaatiLeaderboard(leaderboard) {
    leaderboard = leaderboard.splice(0,10);
    console.log(leaderboard)
    return (
        <div id="levyArvioBotTopList">
            <div className="levyRaatiLeaderboardHeader">Discord-levyraati leaderboard</div>
            {leaderboard.map(item => 
                <div className="levyraatiLeaderboardItem" key={item[2]}>
                    <img src={item[2]}></img>
                    <div className="levyraatiLeaderboardDataBox">
                        <b>{item[0]}</b>
                        {item[1]} ({item[3].slice(0,4)})
                        <div className="lrlbCopyright">{item[4][0].text}</div>
                    </div>
                    <div className="levyraatiLeaderboardRatingBox">
                        <img src={getRatingPngFromRating(item[5])}></img>
                        <div className="lrlbrn">({item[6]})</div>
                    </div>
                </div>
            )}
        </div>
    )
}

async function SkriimBuilder(statusPromise) {
    let isLive = statusPromise.data
    if (isLive===true) {
        return (
            <>
            <div id="twitchStreamBox">
                <div className="skriimiBanneri">
                    <img src="https://i.imgur.com/eHZQF0k.png"></img>
                </div>
                <div className="skriimiIkkuna"><iframe 
                    src="https://player.twitch.tv/?channel=henkonenvideo&parent=localhost" 
                    allowFullScreen={true} 
                    height="567" 
                    width="930">  
                </iframe></div>
            </div>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

function SpotLightBox() {
    let imgurl = "https://i.imgur.com/fHHgmrq.png" //spaceholder
    let imgClass;
    const item = KontsaArray.spotlightArray[0];
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
                    <NavLink to={item.fullUrl}><img src={imgurl} width="100%"></img></NavLink>
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
                        <NavLink to={"blog/"+item.url}><img src={imgurl} width="100%"></img></NavLink>
                    </div>
                <div className="contentBoxFooter"><NavLink to={"blog/"+item.url}>{item.title}</NavLink></div>
            
        </div>
        </>
    )
}

function ArvioBox() {
    let imgurl = "https://i.imgur.com/fHHgmrq.png" //spaceholder
    const item = KontsaArray.arviot[0];
    return (
        <div className="etusivuContentBox">
            <div className="contentBoxHeader">Arvioista:</div>
            <div className="contentBoxImageContainer">
            <NavLink to={"arviot/"+item.url}><img src={item.coverArt} width="100%"></img></NavLink>
            </div>
            <div className="contentBoxFooter">
                <NavLink to={"arviot/"+item.url}>{item.title}</NavLink>
            </div>
        </div>
    )
}



export function Etusivu() {
    const {SkriimThings,LevyraatileaderboardComponent} = useLoaderData();

        return (
            <>
            {SkriimThings}
            <div id="etusivuContainer">
                {/*<div className="etusivuContentBoxWide">
                    <p>Etusivu</p>
                </div>*/}
                <div className="etusivuBoxesContainer">
                    {SpotLightBox()}
                    {ArvioBox()}
                    {BlogBox()}
                </div>
                {LevyraatileaderboardComponent}
            </div>
            </>
        )
}