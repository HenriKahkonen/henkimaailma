import { HenkimaailmaPage } from "../../components";
import './Etusivu.css'
import axios from "axios";
import { TwToken } from "../../auth";
import { TwAppID } from "../../auth";
import { useLoaderData } from "react-router-dom"
import { KontsaArray } from "..";
import { Link, NavLink } from "react-router-dom";

async function isSkriimOnline() {
    let url = "https://api.twitch.tv/helix/streams?user_id=55464815"
    let API_HEADERS = {
        headers: {
        'Authorization' : TwToken,
        'Client-ID': TwAppID,
        }
    }
    let status = axios
        .get(url,API_HEADERS)
        .then(res => {
                console.log(res.data)
                if (res.data.data.length > 0) {
                    console.log("LIVE")
                    return true
                } else {
                console.log("Not live")
                    return false}
        }).catch(function (error) {
            console.log(error.response)
            if (error.response.data.error.status===401) {
                console.log("Twitch api palautti 401, whatup");
            }
        })
    return status;
}

export async function loader() {
    let liveStatus = await isSkriimOnline()
    console.log("loader, live: ",liveStatus)
    const SkriimThings = await SkriimBuilder(liveStatus)
    return {liveStatus, SkriimThings}
}

async function SkriimBuilder(isLive) {
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
            <div className="contentBoxHeader">Kuuntelussa</div>
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
    const {SkriimThings} = useLoaderData();

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
                <div id="levyArvioBotTopList">
                    <div className="contentBoxHeader">Discord-levyraati leaderboard</div>
                </div>
            </div>
            </>
        )
}