// JOS PITÄÄ TEHDÄ UUTTA SIVUA NIIN TÄSTÄ COPYPASTEA

// 1. MUISTA IMPORTTAA SIVU
import { KontsaArray } from "../../../contentArrays.js";
import React from "react";
import { parseDate } from "../../../components/functions";
import { listTags } from "../../../components/functions";
import { NavLink } from "react-router-dom";



import { HenkimaailmaPage } from "../../../components";

class PeliarvioListItem extends React.Component {
    render() {
        let shortName = this.props.item.title.replace(' (Peliarvio)','')
        let thumbnailsrc = "http://img.youtube.com/vi/"+this.props.item.ytid+"/maxresdefault.jpg"
        let autoplaysrc = "https://i.ytimg.com/an_webp/"+this.props.item.ytid+"/mqdefault_6s.webp?du=3000&sqp=COyg3p4G&rs=AOn4CLCnwkDLx1ggmhs7gZLgfcvjMr84Cw"
        let date = parseDate(this.props.item.date)
        let tags = listTags(this.props.item, true)
        let url = "/projektit/peliarviot/"+this.props.item.url
        
        return (
            <div className="peliarvioListItemContainer">
                <div className="peliarvioThumbnailContainer">
                    <a href={url}>
                        <div className="peliarvioThumbnail">
                            <img className="peliarvioThumbnail"src={thumbnailsrc}></img>
                        </div>
                    </a>
                </div>
                <div className="peliarvioTextBox">
                    <a href={url}>
                    <div className="peliarvioTitle">{shortName}</div>
                    </a>
                    <div>{date}</div>
                    <div>{tags}</div>
                </div>
            </div>
        )
    }
}

export class YouTubePeliarviot extends HenkimaailmaPage {
    peliarvioarray = KontsaArray.peliarviot
    render() {
        return (
            <div>
                <h1><NavLink to="/projektit/">Proggikset</NavLink> / Peliarvostelut</h1>
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