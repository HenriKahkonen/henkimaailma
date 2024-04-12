import './Etusivu.css'
import {PostsLists} from "../../contentArrays.js";
import { 
    NavLink,
    useLoaderData,
} from "react-router-dom";import { getRatingPngFromRating } from '../../components/functions';

export function Etusivu() {
    window.scrollTo(0,0);
    const {/*levyRaatiLeaderBoard,*/ skriimThings} = useLoaderData();
    return (
        <>
            {skriimThings}

            <div className="KontentBox">
                <div id="SpotlightBoxesContainer">
                    {SpotLightBox("Video:","v6")}
                    {SpotLightBox("Also Check Out:","v5")}
                    {/*{SpotLightBox("Blog:","blog3")}*/}
                    {/*{SpotLightBox("Arvio:","a2")}*/}                   
                </div>
            </div>

            {/*<div className="KontentBox">
                {levyRaatiLeaderBoard}
            </div>*/}

        </>
    )
}

function SpotLightBox(text,id) {
    const post = PostsLists.findById(id)
    let title = post.title
    if (post.category==="Arviot") {
        title = title.replace("Arvio: ","")
    }
    let imgurl = post.imgurl
    if (post.category==="Videot" || post.category==="Peliarviot") {
        imgurl ="https://img.youtube.com/vi/"+post.ytid+"/maxresdefault.jpg"
    }
    let url;
    if (post.category==="Peliarviot") {
        url="posts/peliarviot/"+post.url
    } else {
        url = "posts/"+post.url
    }
    


    return (
    <div className="spotlightbox">

        <div className="spotlightboxheader">
            {text}
        </div>

        <div className="spotlightboxImageContainer">
            <NavLink to={url}>
                <img 
                    src={imgurl} 
                    width="80%" 
                    alt={post.title}>       
                </img>
            </NavLink>
        </div>

        <div className="spotlightboxfooter">
            <div><NavLink to={url}>{title}</NavLink></div>
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
            <div className="levyRaatiLeaderboardHeader"><NavLink to="/levyraati">Discord-levyraati leaderboard</NavLink></div>
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
            <div className="KontentBox">
                <div className="skriimi">
                    <div className="skriimiBanneri">
                        <a href="https://www.twitch.tv/henkonenvideo"><img src={process.env.PUBLIC_URL+"/img/skriimOnline.gif"} width="70" alt="Banneri joka huomauttaa livestreamin olevan käynnissä"></img></a>
                    </div>
                    <div>
                        <iframe
                            title="LiveStream player"
                            src="https://player.twitch.tv/?channel=henkonenvideo&parent=localhost&parent=henkimaailma.net" 
                            allowFullScreen={true} 
                        ></iframe>
                    </div>
                </div>
            </div>
        )
    } else { return }
}



