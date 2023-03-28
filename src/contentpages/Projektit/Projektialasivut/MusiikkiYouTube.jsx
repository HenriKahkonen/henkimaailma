// JOS PITÄÄ TEHDÄ UUTTA SIVUA NIIN TÄSTÄ COPYPASTEA

// 1. MUISTA IMPORTTAA SIVU
import { KontsaArray } from "../../../contentArrays.js";
import React from "react";
import { parseDate } from "../../../components/functions";
import { listTags } from "../../../components/functions";
import { NavLink, Link } from "react-router-dom";



import { HenkimaailmaPage } from "../../../components";

class YouTubeListItem extends React.Component {
    render() {
        let shortName = this.props.item.title.replace(' (Peliarvio)','')
        let thumbnailsrc = "https://img.youtube.com/vi/"+this.props.item.ytid+"/maxresdefault.jpg"
        //let autoplaysrc = "https://i.ytimg.com/an_webp/"+this.props.item.ytid+"/mqdefault_6s.webp?du=3000&sqp=COyg3p4G&rs=AOn4CLCnwkDLx1ggmhs7gZLgfcvjMr84Cw"
        let date = parseDate(this.props.item.date)
        let tags = listTags(this.props.item, true)
        let url = "/projektit/musaYouTube/"+this.props.item.url
        
        return (
            <div className="peliarvioListItemContainer">
                <div className="peliarvioThumbnailContainer">
                    <Link to={url}>
                        <div className="peliarvioThumbnail">
                            <img className="peliarvioThumbnail"src={thumbnailsrc} alt="Thumbnail"></img>
                        </div>
                    </Link>
                </div>
                <div className="peliarvioTextBox">
                    <Link to={url}>
                    <div className="peliarvioTitle">{shortName}</div>
                    </Link>
                    <div>{date}</div>
                    <div>{tags}</div>
                </div>
            </div>
        )
    }
}

export class MusiikkiYouTube extends HenkimaailmaPage {
    musaYTarray = KontsaArray.musaYT
    render() {
        return (
            <div>
                <h1><NavLink to="/projektit/">Proggikset</NavLink> / Musiikkiaiheiset YouTube-jutut</h1>
                <h2>Videot</h2>
                <div id="peliarvioContainer">
                    {this.musaYTarray.map((post) =>
                        <YouTubeListItem item={post} key={post.id}/>)}
                </div>
            </div>
        )
    }
}