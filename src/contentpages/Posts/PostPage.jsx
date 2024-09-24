import "./Posts.css"
/*import { PostsList } from "../../contentArrays.js";*/
import {parseDate,listTags,/*getRatingPng,*/listArtists,generatePostHeader, /*percRatingImgs*/} from "../../components/functions";
import {
    useLoaderData,
} from "react-router-dom";
import { NavLink } from "react-router-dom";

export async function loader({ params }) {
    /*const posts = PostsList
    let post = posts.find(p => p.url === params.postUrl)
    console.log("Projektiloader: Projecttitle:", params.postUrl)
    console.log("löydetty post:")
    console.log(post)
    if (!post) {
            throw new Response("", {
                status: 404,
                statusText: "Project seeked not found"
        })
    }*/
    return params.postUrl;
}

export function PostPage({posts}) {
    const postUrl = useLoaderData();
    /*console.log("Lista")
    console.log(posts)
    console.log("Posturl")
    console.log(postUrl)*/

    let post = posts.find(p => p.url === postUrl)
    //console.log("Projektiloader: Projecttitle:", postUrl)
    //console.log("löydetty post:")
    console.log(post)
    if (!post) {
            throw new Response("", {
                status: 404,
                statusText: "Project seeked not found"
        })
    }

    window.scrollTo(0,0);

    if (post.category==="Muu video" || post.category==="euroviisut") {
        return(
            <div className="KontentBox">
            <div className="PostTitle">
                <h1><NavLink to="../">posts</NavLink> / {post.title.toLowerCase()}</h1>
                {parseDate(post.date)}<br/>
                {listTags(post,true)}
            </div>
            {YTPlayer(post.ytid)}
        </div>

        )
    }
    if (post.category==="Musiikkiarviot") {
        /*const rating = getRatingPng(post)*/
        return (
            <div className="KontentBox">
                <div className="PostKontent">
                    <div className="PostTitle">
                        <h1><NavLink to="/posts">posts</NavLink> / {post.title.toLowerCase()}</h1>
                        <div>{parseDate(post.date)}</div>
                    </div>

                    <div className="Prose">
                    <img src={post.imgurl} alt="Album art"/>
                
                    <div>
                        <div>
                            <h2>{post.data.albumtitle}</h2>
                            <div>
                                {listArtists(post.data.artist)}<br/>
                                {post.data.year} {post.data.label}
                            </div>
                        </div>

                        {/*<div className="arvioPageDataBox-ratingContainer">
                            <img src={rating} alt={"Arvosana: "+(post.rating/10)}/>
                        </div>*/}
                    </div>

                    {post.element}

                    {percRatingBlock(post.rating)}
                    </div>
                </div>
            </div>
        )
        }

    if (post.category==="Blog") {
        if (post['tags'].includes("Vlog")) {
            return(
                <div className="KontentBox">
                    {generatePostHeader(post)}
                    {YTPlayer(post.ytid)}
                </div>
            )
        }
        else return (
            <div className="KontentBox">
                <div className="PostKontent">
                    {generatePostHeader(post)}
                    {/*<div className="PostTitle">
                        <h1><NavLink to="/posts">posts</NavLink> / {post.title.toLowerCase()}</h1>
                        <div>{parseDate(post.date)}</div>
                    </div>*/}
                    
                    <img src={post.imgurl} alt={post.title}/>
                    
                    <div className="Prose">
                    <div>
                        {post.element}
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
    <div className="KontentBox">
        <div className="PostKontent">
        <div className="PostTitle">
            <h1><NavLink to="/posts">posts</NavLink> / {post.title.toLowerCase()}</h1>
            <div>{parseDate(post.date)}</div>
        </div>
        <div>
            {post.element}
        </div>
        </div>
    </div>
    )
}

function YTPlayer(ytid) {
    return (
        <div>
        <iframe
        /*</div>width="1020" height="630"*/
        src={"https://www.youtube.com/embed/"+ytid} 
        title="YouTube video player" 
        allow=
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>

        </div>
    )
}

function percRatingBlock(rating) {
    //let imgs = percRatingImgs(rating)
    return (
        <div className="reviewPageScoreContainer">

        </div>
    )
}