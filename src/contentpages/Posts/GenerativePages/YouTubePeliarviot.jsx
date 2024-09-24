/*import { PostsList as KontsaArray } from "../../../contentArrays.js";*/
import React from "react";
import { parseDate } from "../../../components/functions";
import { listTags } from "../../../components/functions";
import { NavLink, Link } from "react-router-dom";
import './Peliarviolistaus.css'

class PeliarvioListItem extends React.Component {
    render() {
        let shortName = this.props.item.title.replace('Peliarvio: ','')
        let thumbnailsrc = "https://img.youtube.com/vi/"+this.props.item.ytid+"/maxresdefault.jpg"
        //let autoplaysrc = "https://i.ytimg.com/an_webp/"+this.props.item.ytid+"/mqdefault_6s.webp?du=3000&sqp=COyg3p4G&rs=AOn4CLCnwkDLx1ggmhs7gZLgfcvjMr84Cw"
        let date = parseDate(this.props.item.date)
        let tags = listTags(this.props.item, true)
        let url = "/posts/peliarviot/"+this.props.item.url
        
        return (
            <Link to={url}>
            <div className="peliarvioListItemContainer">
                <div className="peliarvioThumbnailContainer">
                    
                        <div className="peliarvioThumbnail">
                            <img className="peliarvioThumbnail"src={thumbnailsrc} alt="Thumbnail"></img>
                        </div>
                    
                </div>
                <div className="peliarvioTextBox">
                    
                    <div className="peliarvioTitle">{shortName}</div>
                    
                    <div>{date}</div>
                    <div>{tags}</div>
                </div>
            </div>
            </Link>
            
        )
    }
}

export class YouTubePeliarviot extends React.Component {
    peliarvioarray = this.props.posts.filter((post) => post.category==="Peliarviot")
    render() {
        return (
            <div className="KontentBox">
                <h1><NavLink to="/posts/">posts</NavLink> / peliarviot</h1>
                <h2>Näistä videoista:</h2>
                <p>
                    Loppuvuonna 2021 halusin opetella videoeditointia, ja ilman 
                    kunnon kamerakalustoa videopelien nauhoittaminen osoittautui kelvoksi väyläksi hankkia editoitavaa
                    materiaalia. Samalla sain tekosyyn suhtautua peliharrastukseen kuin se olisi 
                    järkevää, tavoitteellista toimintaa!
                </p>
                <p>
                    Annan käsittelemilleni peleille videoissani <i>*objektiivisen, perustellun ja keskenään vertailukelpoisen*</i> arvosanan,
                    mutta kaikkia käsittelemiäni pelejä yhdistää arvosanaan katsomatta vilpitön suositus niiden kokeilemiseen.
                    Vaikka kanavoinkin näissä videoissa paikoin sisäistä hupiukkoani, haluan näillä videoilla nostaa
                    peliteollisuuden suuresta mäskiämpäristä esille pelit, jotka ansaitsevat tulla nähdyksi.
                </p>
                <h2>Arviot</h2>

                <div id="peliarvioContainer">
                    {this.peliarvioarray.map((post) =>
                        <PeliarvioListItem item={post} key={post.id}/>)}
                </div>
            </div>
        )
    }
}