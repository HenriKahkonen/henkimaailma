import "./Posts.css"
import { PostsList } from "../../contentArrays.js";
import {parseDate,listTags,/*getRatingPng,*/listArtists,generatePostHeader} from "../../components/functions";
import {
    useLoaderData,
} from "react-router-dom";
import { NavLink } from "react-router-dom";

export async function loader({ params }) {
    const posts = PostsList
    let post = posts.find(p => p.url === params.postUrl)
    console.log("Projektiloader: Projecttitle:", params.postUrl)
    if (!post) {
            throw new Response("", {
                status: 404,
                statusText: "Project seeked not found"
        })
    }
    return post;
}

export function PostPage() {
    const post = useLoaderData();
    window.scrollTo(0,0);
    if (!post) {
        throw new Response("", {
            status: 404,
            statusText: "Project seeked not found"
        })
    }
    if (post.category==="Videot") {
        return(
            <div className="KontentBox">
            <div className="PostTitle">
                <h1><NavLink to="../">posts</NavLink> / {post.title.toLowerCase()}</h1>
                {parseDate(post.date)}<br/>
                {listTags(post,true)}
            </div>

            <div>

                <iframe
                /*</div>width="1020" height="630"*/
                src={"https://www.youtube.com/embed/"+post.ytid} 
                title="YouTube video player" 
                allow=
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
                </iframe>

            

            </div>
        </div>
        )
    }
    if (post.category==="Arviot") {
        /*const rating = getRatingPng(post)*/
        return (
            <div className="KontentBox">
                <div className="PostKontent">
                    <div className="PostTitle">
                        <h1><NavLink to="/posts">posts</NavLink> / {post.title.toLowerCase()}</h1>
                        <div>{parseDate(post.date)}</div>
                    </div>
                
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
                </div>
            </div>
        )
        }
    if (post.category==="Blog") {
        return (
            <div className="KontentBox">
                <div className="PostKontent">
                    {generatePostHeader(post)}
                    {/*<div className="PostTitle">
                        <h1><NavLink to="/posts">posts</NavLink> / {post.title.toLowerCase()}</h1>
                        <div>{parseDate(post.date)}</div>
                    </div>*/}

                    <img src={post.imgurl} alt={post.title}/>
                    
                    <div>
                        {post.element}
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

