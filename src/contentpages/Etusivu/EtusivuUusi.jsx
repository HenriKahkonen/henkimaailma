import './Etusivu.css'

import {sortByDate,getRatingPng,generatePostListHeader
} from "../../components/functions";

import React from "react";
import {
    NavLink,
    useLoaderData,
} from "react-router-dom"
import HenkimaailmaPage from '../../components/HenkimaailmaPage';

// juuressa palautetaan vain staattinen lista postauksia.
//Listan on päivitettävä omaa stateaan (filtteröinti), ja
//funktio palauttaa siksi React-elementin
function EtusivuFeed() {
    //window.scrollTo(0,0);
    const {liveStatus,postsJSON} = useLoaderData();
    return <Etusivu posts={postsJSON} livestat={liveStatus}/>
}

// Kaikkien postausten listaaminen ja listan filtteröinti
class Etusivu extends HenkimaailmaPage {
    constructor(props) {
        super(props)

        this.state = {
            showPosts : [
                "Blog",
                "Videot",
                "Musiikki",
                "Peliarviot",
                "Arviot",
                "Muuta"
                
            ],
            showAmount : 10,
        }
    }


    postsArray = sortByDate(this.props.posts)
    liveStatus = this.props.livestat

    showMoreButton = () => {
        const oldAmount = this.state.showAmount
        if (this.postsArray.length > this.state.showAmount) {
            return (
                <button
                    className="etusivuShowMore"
                    id="showMoreButtonEtusivu"
                    onClick={() => {this.setState({showAmount:oldAmount+10})}}>
                    <h4>Näytä vanhempia...</h4>
                </button>
            )
        }
    } 

    render() {
        return (
            <>
            {SkriimBuilder(this.liveStatus)}

            <div className="KontentBox">
                {/*<div className="KontentBoxSubNav">
                    {<h1>viimeisimmät</h1>}
                </div>*/}

                <div className='postsListContainer'>
                {this.postsArray
                    .slice(0,this.state.showAmount)
                    .map((post) => 
                    <PostListItem item={post} key={post['id']}/>)}
                </div>
                {this.showMoreButton()}

            </div>
            </>
        )
    }
}

// Yhden postauksen elementti listassa
class PostListItem extends React.Component {
    render() {
        let item = this.props.item
 

        let linkUrl;

        if (item.category==="Peliarviot") {
            linkUrl="./posts/peliarviot/"+item.url
        }
        else {
            linkUrl="./posts/"+item.url
        }

        return (
            <div className="postListItem">
            <NavLink to={linkUrl}>
            <div className="postListItemContainer" key={item['id']}>
                
                <div className="postListImageContainer">
                    {PostListImg(item)}
                </div>
                
                <div className="postListTextContainer">
                    {generatePostListHeader(item)}
                    <div className="postListDesc">{item['desc']}</div>
                </div>
                
            </div>
            </NavLink>
            </div>
            
        )
    }

}

function PostListImg(post) {
    let imgurl = "https://i.imgur.com/fHHgmrq.png" // 720x720px, placeholderlautanen
    if (post.imgurl!==undefined) {imgurl=post.imgurl} 
    let title = post.title
    let ytid = post.ytid
    const soundcloudlogoUrl = "https://i.imgur.com/zPt8g82.png"


    if (post.category==="Arviot") {
        return (
        <>
            <img className="postListImageArvostelu" src={imgurl} alt={title}></img>
            <img className="postListOverlayImg" src={getRatingPng(post)} alt={""}></img>
        </>
        )
    }

    if (post.imgform==="Soundcloud"){
        return (<>
                <img className="postListImageSoundCloud" src={imgurl} alt={title}></img>
                <img className="postListOverlayImg" src= {soundcloudlogoUrl} alt="Soundcloud logo"></img>
        </>)
    }

    if (post.imgform==="Landscape"){
        return (
            <>
                <img className="postListImageLandscape" src={imgurl} alt={title}></img>
            </>
        )
    }
    
    if (post.imgform==="YouTube"||post.category==="Videot") {
        return (
            <>
                <img 
                    className="postListImageLandscape" 
                    src={"https://img.youtube.com/vi/"+ytid+"/maxresdefault.jpg"}
                    alt={title} ></img>
            </>
        )
    }

        
    if (post.imgform==="SmallSquare") {
        return (
            <>
                <img 
                    className="postListImageSquareSmall" 
                    src={imgurl}
                    alt={title} ></img>
            </>
        )
    }
    
    return (
        <>
            <img className="postListImageSquare" src={imgurl} alt={title}></img>
        </>
    )
}

function SkriimBuilder(status) {
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

export default EtusivuFeed;