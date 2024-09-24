import React from "react";
import {
    NavLink,
    useLoaderData,
} from "react-router-dom"
import { sortByDate,filterPostsByType,parseDate } from "../../components/functions";
import HenkimaailmaPage from '../../components/HenkimaailmaPage';
import "./Sivukartta.css"

function Sivukartta() {
    window.scrollTo(0,0);
    const {postsJSON} = useLoaderData();
    return <SivuKartta posts={postsJSON}/>
}

class SivuKartta extends HenkimaailmaPage {  

    postsArray = sortByDate(this.props.posts)

    pelikritiikit = filterPostsByType(this.postsArray,"Peliarviot")
    musakritiikit = filterPostsByType(this.postsArray,"Musiikkiarviot")
    muutvideot = filterPostsByType(this.postsArray,"Muu video")
    euroviisuteikut = filterPostsByType(this.postsArray,"euroviisut")

    SnS = filterPostsByType(this.postsArray,"SnS")/*.slice(0,1)*/
    mallit3D = filterPostsByType(this.postsArray,"3D")
    musiikit = filterPostsByType(this.postsArray,"Musiikki")
    blogit = filterPostsByType(this.postsArray,"Blog")
    vlogit = filterPostsByType(this.postsArray,"Vlog")
    blogitJaVlogit = sortByDate(this.blogit.concat(this.vlogit))
    kaikkimuut = filterPostsByType(this.postsArray,"Muuta")

    render() {
        return (
            <div className="KontentBox">
                {/*<div className="KontentBoxSubNav">
                    <h1>posts</h1>
                </div>*/}
                <div className="sivukarttacontainer">
                    <div className="sivukarttacolumn">
                        {osio("Kritiikkiä - videopelit","games",this.pelikritiikit,"./posts/peliarviot/")}
                        {osio("Kritiikkiä - musiikki","musiikkiarvio",this.musakritiikit)}
                        {osio("Mielipiteitä Euroviisuista","euroviisut",this.euroviisuteikut)}
                        {osio("Muita videoita","youtube",this.muutvideot)}
                    </div>
                    <div className="sivukarttacolumn">
                        {osio("Musiikkia","musiikki",this.musiikit)}
                        {osio("Sounds and Scapes -äänikirjastot","SnS",this.SnS)}
                        {osio("Blog","blog",this.blogitJaVlogit)}
                        {/*{osio("Ohjelmointi","ohjelmointi")}*/}
                        {osio("3D-mallinnuksia","3D",this.mallit3D)}
                        {/*{otsikko("Doom","doom")}*/}
                        {osio("Kaikkea muuta","pandorasbox",this.kaikkimuut)}

                    </div>
                </div>
                
            </div>
        )
    }
}

function osio(kategoria, kuva, posts, link) {
    return (
    <>
    <div className="sivukarttaOsioTitle">
        <div className="sivukarttaOsioTitleImg">
            <img alt="" src={process.env.PUBLIC_URL+"/img/icon/"+kuva+".png"}></img>
        </div>
        {osioTitle(kategoria,link)}                        
    </div>
    <div>
        {posts.map((post) =>
            <SivuKarttaLink item={post} key={post['id']}/>
        )}
    </div>
    </>
    )                      
}

function osioTitle(nimi, link) {
    if (link===undefined) {
        return (
            <div className="sivukarttaOsioTitleText">{nimi}</div> 
        )
    }
    else return (
        <a href={link}><div className="sivukarttaOsioTitleText">{nimi}</div></a> 
    )
}



class SivuKarttaLink extends React.Component {
    render() {
        let item = this.props.item
        let url = item.url
        let title = item['title'].replace("Peliarvio: ","")
        let date = parseDate(item['date'])
        let upDate;
        if (item['dateUpdate']===undefined) {
            upDate=""
        } else {
            date = parseDate(item['dateUpdate'])+" (orig. "+parseDate(item['date'])+")"
        }

        if (item.category==="Musiikkiarviot"){
            title = title.replace("Arvio: ","")
        }
        if (item.category==="Peliarviot") {
            url="./peliarviot/"+url
        }
        return (
            <div className="sivukarttaListItem">
                <div className="sivukarttaLink"><NavLink to={url}>
                    {title}
                </NavLink></div>
                <div className="sivukarttaDate">{date}{upDate}</div>
            </div>
        )    
    }
}
export default Sivukartta;