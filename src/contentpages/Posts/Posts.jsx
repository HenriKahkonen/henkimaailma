import './Posts.css'
import './Pages.css'
import { PostsList } from "../../contentArrays.js";

import {filterListByTag,sortByDate,getRatingPng,generatePostListHeader
} from "../../components/functions";

import React from "react";
import {
    NavLink,
} from "react-router-dom"
import HenkimaailmaPage from '../../components/HenkimaailmaPage';

// juuressa palautetaan vain staattinen lista postauksia.
//Listan on päivitettävä omaa stateaan (filtteröinti), ja
//funktio palauttaa siksi React-elementin
function Posts() {
    return <PostauksetLista/>
}

// Kaikkien postausten listaaminen ja listan filtteröinti
class PostauksetLista extends HenkimaailmaPage {
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
                
            ]
        }
    }

    postsArray = sortByDate(PostsList)

    filterListByTags = (list) => {
        /*if (this.state.showPosts[0]===undefined) {
            return list
        }
        else*/ return (
            filterListByTag(list,this.state.showPosts)
        )
    }

    changeFilter = (tag) => {
        let filters = this.state.showPosts
        return () => {
            console.log(filters)

            if (filters.length===6) {
                filters = []
                filters.concat(tag)
                this.setState({showPosts:filters})
            }
            
            if (filters.includes(tag)) {
                filters = filters.filter(function(filter) {
                    return filter !== tag
                })
                
                if (filters.length===0) {
                    this.setState({
                        showPosts : [ 
                            "Blog",
                            "Videot",
                            "Musiikki",
                            "Peliarviot",
                            "Arviot",
                            "Muuta"
                        ]
                    })

                } else {
                    this.setState({showPosts : filters})
                }
            }

            else { // tagi ei ole näytettävien tagien listassa
                this.setState({showPosts : filters.concat(tag)})
            }
        }
    }
    
    filterButton =(buttonName, buttonText)=> {
        const idScript = "projectfilter-"+buttonName;
        return (
            <span>
                <input id={idScript} 
                type="checkbox" 
                defaultChecked={this.state.showPosts.includes(buttonName)} 
                onChange={this.changeFilter(buttonName)}/>
                <span> {buttonText} </span>
            </span>
        )
    }

    filterButtonImg =(buttonName, buttonImage)=> {
        const idScript = "projectfilterbutton-"+buttonName;
        /*{process.env.PUBLIC_URL+'/img/PNG_Meta2.png'}*/
        if (this.state.showPosts.includes(buttonName)) {
            return (
                <div>
                    <button id={idScript} 
                    onClick={this.changeFilter(buttonName)}>
                        <img
                        alt="filter posts" 
                        src={process.env.PUBLIC_URL+'/img/'+buttonImage}>
                        </img>
                    </button>
                </div>
            )
        } else return (
            <div>
                <button id={idScript} 
                onClick={this.changeFilter(buttonName)}>
                    <img 
                    src={process.env.PUBLIC_URL+'/img/'+buttonImage}
                    style={{"opacity":"0.5"}}
                    alt="filter posts"
                    ></img>
                </button>
            </div>
        )
    }

    render() {
        window.scrollTo(0,0);
        return (
            <div className="KontentBox">

                <div className="imgFiltersBox">

                    {/*<div><h2>Näytetään:</h2></div>*/}

                    <div className="imgFiltersContainer">
                        {this.filterButtonImg("Blog","PNG_Blog.png")}
                        {this.filterButtonImg("Videot","PNG_Videot.png")}
                        {this.filterButtonImg("Musiikki","PNG_Musiikki.png")}
                        {this.filterButtonImg("Peliarviot","PNG_Peliarviot.png")}
                        {this.filterButtonImg("Arviot","PNG_Arviot.png")}
                        {this.filterButtonImg("Muuta","PNG_Muuta.png")}
                    </div>

                </div>

                {/*{this.filterButton("Blog","Blog")}
                {this.filterButton("Videot","Videot")}
                {this.filterButton("Musiikki","Musiikki")}
                {this.filterButton("Peliarviot","Peliarviot")}
                {this.filterButton("Arviot","Arviot")}
                {this.filterButton("Muuta","Muut")}*/}
                
                <div className='postsListContainer'>
                {this.filterListByTags(this.postsArray).map((post) => 
                    <PostListItem item={post} key={post['id']}/>)}
                </div>
            </div>
        )
    }
}

// Yhden postauksen elementti listassa
class PostListItem extends React.Component {
    render() {
        let item = this.props.item
 

        let linkUrl = item.url

        if (item.category==="Peliarviot") {
            linkUrl="./peliarviot/"+linkUrl
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

export default Posts;