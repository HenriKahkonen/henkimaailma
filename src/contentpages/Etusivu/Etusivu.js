import './Etusivu.css'
import axios from "axios";
import { KontsaArray } from "..";
import { 
    NavLink,
    useLoaderData,
    useOutletContext, 
} from "react-router-dom";
import { Component } from 'react';
import { FetchLevyRaatiData, isSkriimOnline } from '../../components/functions';
import { getRatingPngFromRating } from '../../components/functions';


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


/*export async function loader(lrData,livestatus) {

    //const [lrData,livestatus] = useOutletContext();
    //TODO: Käytä promisen tulosta Skriimbuilderissa
    /*let livestatus = isSkriimOnline()
    console.log("loader, live: ",livestatus)
    const SkriimThings =  await SkriimBuilder(livestatus)
    const lrData = await FetchLevyRaatiData();
    const LevyraatileaderboardComponent = LevyRaatiLeaderboard(lrData);
    */
   /*
    return true//{SkriimThings, LevyraatileaderboardComponent}
}
*/


export function LevyRaatiLeaderboard(leaderb) {
    if(leaderb[0]===undefined) {
        return
    }
    let lb = [...leaderb];

    //console.log("Data levyraatikakkaan: ",lb)
    let leaderboard = lb.splice(0,10); // smth funky here??
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

export function SkriimBuilder(status) {
    
    /*
    statusPromise.then(
 
    )
    */
    let isLive = status
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




export function Etusivu() {
    console.log("Etusivu renderz")
    
    //const {lrData, liveStatus} = useLoaderData();
    const {levyRaatiLeaderBoard, skriimThings} = useLoaderData();
    //const lrData=false;
    //const liveStatus=false;
    //console.log("Loaderin lrData: ",lrData)
    //console.log("loaderin Livestat: ", liveStatus)
    //const [lrData,livestatus] = useOutletContext();
    //console.log("Outletista saatu lrData: "+lrData)
    //console.log("Outletista saatu livestatus: "+livestatus)
    //const SkriimThings = SkriimBuilder(livestatus);
    //const LevyraatileaderboardComponent = LevyRaatiLeaderboard(lrData);
    
    //const {SkriimThings, LevyraatileaderboardComponent} = useLoaderData();
        /*LrData;
        livestatus;
        componentDidMount() {
            this.LrData=this.props.lr
            this.livestatus=this.props.livestatus
        }
        */
        /*
        constructor(props) {
        super(props)
        this.state = {
            lrData: [],
            livestatus : undefined,
        }
       }
       */
       /*
       componentDidMount() {
        
        this.setState({
            lrData : this.props.lr,
            livestatus : this.props.live
        })
        console.log("mounted")
       }
       */

        //render=() => {
            //console.log("renderlöt")
            /*this.setState({
                livestatus: this.props.live,
                lrData: this.props.lr    
            })*/
            /*const LrData = this.props.lr
            console.log("Lrdata: ",LrData)
            const livestatus = this.props.livestatus
            */
           //console.log(this.props.lr)
           //console.log("Livestatus: "+this.props.live)
           //console.log("LrData: "+this.props.lr)
            return (
                <>
                {skriimThings}
                <div id="etusivuContainer">
                    {/*<div className="etusivuContentBoxWide">
                        <p>Etusivu</p>
                    </div>*/}
                    <div className="etusivuBoxesContainer">
                        {SpotLightBox()}
                        {ArvioBox()}
                        {BlogBox()}
                    </div>
                    {levyRaatiLeaderBoard}
                </div>
                </>
            )
        //}
}