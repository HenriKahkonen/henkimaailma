import axios from "axios";
import { Component } from "react";
import HTMLReactParser from "react";
//import { levyRaatiDataLocal } from "..";
import { NavLink } from "react-router-dom";

export function isSoundCloud(post) {
    if (post.ftags.includes("Soundcloud")) {
        return true
    }
    return false
}

export async function FetchLevyRaatiData() {
    //console.log(localdata.getLevyRaatiData())
    //if (localdata[0]===undefined) {
        let lrSorted;
        await axios.get("https://jives-bot.fly.dev/levyraatidata")
        .then(res => lrSorted = res.data)
        console.log("Levyraatidata haettu serveriltä")
        lrSorted = lrSorted.sort((a,b) => {return b[5] - a[5]})
        //levyRaatiDataLocal=lrSorted
        return lrSorted
    //} else {
    //    console.log("Levyraatidata haettu lokaalisti")
    //    return localdata
    //}
}

export async function isSkriimOnline() {
    let status;
    await axios.get("https://jives-bot.fly.dev/isSkriimOnline")
        .then(res => status = res.data)
    console.log("Skriim status haettu serveriltä")
    return status
}

export async function FetchChangeLog () {
    let ChangeLogData;
    await axios.get("https://raw.githubusercontent.com/HenriKahkonen/HenkimaailmaMarkups/main/ChangeLog.xml")
        .then(res => ChangeLogData = res.data)
    var parser = new DOMParser();

    var ChangeLogHTML = "";
    var updatesDoc = parser.parseFromString(ChangeLogData,"text/xml")
    var updates = updatesDoc.getElementsByTagName("update");

    for (var i = updates.length-1; i >= 0; i--) {
        ChangeLogHTML += 
            "<b>"+updates[i].getAttribute("title")+"</b></br>"
            +"<div>"+updates[i].getAttribute("date")+"</div><ul>";
        
        var bulletpoints = updates[i].getElementsByTagName("li");
        
        for (var bp = 0; bp < bulletpoints.length; bp++) {
            var updateItem = bulletpoints[bp]
            ChangeLogHTML += (updateItem).outerHTML;
        }

        ChangeLogHTML += "</ul><br/>"
    }
    ChangeLogHTML += "</ul>"

    console.log("CL haettu")
    return ChangeLogHTML;
}

export const CurrentTab = () => {
    let a = window.location.pathname;
    if (a===''){
        return 'etusivu'
    }
    return a
}

const convertRatingString = (rating) => {
    //console.log("muunnetaan stringistä")
    let numRating;
    let stringRatingJustNum = rating.replace(" 1/2","").replace("++","").replace("-","").replace("+",'');
    numRating = Number(stringRatingJustNum)*10;
    if (rating.includes("++") || rating.includes(" 1/2")){
        numRating=numRating+5}
    else if (rating.includes("+")) {
        numRating = numRating+2.5}
    else if (rating.includes("-")) {
        numRating = numRating-2.5}
    return numRating
}

export const getRatingPngFromRating = (rating) => {
    let kuvapiste;
    //let kouluarvosanapiste;
    if (!rating && rating!==0) {
        return null
    }

    //MUUNNETAAN KOULUARVOSANAKSI
    //Asteikko 0-1000 -> 375-1000
    //kouluarvosanapiste=(rating*625/1000)+375;

    //KOKONAISLUKU 0-1000
    kuvapiste = Math.floor(rating/25)*25;
    //kouluarvosanapiste = Math.floor(kouluarvosanapiste/25)*25;

    //console.log("Muunnetaan pisteet:",rating,"->",kuvapiste)
    return process.env.PUBLIC_URL+"/img/arvosanat/"+kuvapiste+".png"
}

export const getRatingPng = (post) => {
    let rating = post.rating
    let kuvapiste;
    if (!rating && rating!==0) {
        return null
    }
    if (typeof(rating)==="string") {
        rating = convertRatingString(rating)
    } 
    if (rating < 1) { //Esitetty muodossa x/5 tai yy/100
        kuvapiste = Math.floor((rating*100)/2.5)*25;
    } else { //KOKONAISLUKU 0-100
        if (rating > 100) {rating=100}
        if (rating < 0) {rating = 0}
        kuvapiste = Math.floor(rating/2.5)*25;
    }
    //KOULUARVOSANAKSI: Math.floor(rating/4)*25+375
    //console.log("Muunnetaan pisteet:",post.title,post.rating,"->",kuvapiste)
    return process.env.PUBLIC_URL+"/img/arvosanat/"+kuvapiste+".png"
}

export const areTagsSelected = (itemtocheck, tagsToCompare) => {
    //console.log("Tagit jotka chekataan",itemtocheck['tags'], "Verrataan", tagsToCompare)
    return tagsToCompare.some(function (v) {
        return itemtocheck['category'] ===v;
    })
}

export const filterListByTag = (list, tagsToCompare) => {
    //console.log('Lista filtteröidään: Lista: ',list, "Hyväksyttävät tägit: ",tagsToCompare)
    return list.filter(function (itemtocheck) {
        return areTagsSelected(itemtocheck, tagsToCompare)
    })
}

export const parseDate = (date) => {
    const options = {year: 'numeric', month: 'short', day: 'numeric'}
    return new Date(date).toLocaleDateString(undefined, options)
}

export function generatePostListHeader (post) {
    if (post.dateUpdate===undefined) {
        return(
        <div>  
            <div className="postListTitle">{post.title}</div>
            <div className="postListDate">{parseDate(post['date'])}</div>
            <span className="postListTags">{post.category} - </span>
            {listTags(post,true,"postListTags")}
        </div>
        )
    } else return (
        <div>
            <div className="postListTitle">{post.title}</div>
            <div className="postListDate">{parseDate(post['date'])}<i>{", päivit. "}{parseDate(post['dateUpdate'])}{""}</i></div>
            <span className="postListTags">{post.category} - </span>
            {listTags(post,true,"postListTags")}
        </div>
    )
}

export function generatePostHeader (post) {
    if (post.dateUpdate===undefined) {
        return(
            <div className="PostTitle">
                <h1><NavLink to="/posts">posts</NavLink> / {post.title.toLowerCase()}</h1>
                <div>{parseDate(post['date'])}</div>
                <span className="postListTags">{post.category} - </span>{listTags(post,true,"postListTags")}
            </div>
        )
    } else return (
        <div className="PostTitle">
             <h1><NavLink to="/posts">posts</NavLink> / {post.title.toLowerCase()}</h1>
            <div>{parseDate(post['date'])}<i>{", päivit. "}{parseDate(post['dateUpdate'])}{""}</i></div>
            <span>{post.category} - </span>
            {listTags(post,true)}
        </div>
    )
}

export const getYouTubeThumbnail = (id) => {
    return "https://img.youtube.com/vi/"+id+"/maxresdefault.jpg"
}

export const latestInArray = (array) => {
    let latest=array[0]
    for (let i=0; i < array.length ; i++) {
        if (array[i]['date']>latest['date']) {
            latest = array[i]
        }
    }
    //console.log("Viimeisin postaus listassa ",array,"on nähtävästi",latest)
    return latest
}

export const listTags = (item, divider, classname) => {
    const ProjectTags = item['tags']
    const posttagsDivved = ProjectTags.map((tag) => 
        <span className={classname} key={ProjectTags.indexOf(tag)}>{tag}</span>
        
    )
    
    let posttagsDivvedDivided = []
    if (divider===true) {
        for (let i=0; i<posttagsDivved.length; i++) {
            if (i+1<posttagsDivved.length) {
                posttagsDivvedDivided.push(posttagsDivved[i])
                posttagsDivvedDivided.push(<span className="postTag" key={"divider"+i}> | </span>)
            } else {
                posttagsDivvedDivided.push(posttagsDivved[i])
            }
        } return (
            <span className="BlogTags">{posttagsDivvedDivided}</span>
        )
    } else return posttagsDivved
}

export const listArtists = (artistsarray) => {
    let output = ''
    for (let i=0; i<artistsarray.length; i++) {
        output = output.concat(artistsarray[i]);
        if (artistsarray[i+1]) {
            output = output.concat(", ")
        }
    }
    return output
}

export const listGenreTags = (item, divider) => {
    const ProjectTags = item.genre
    const posttagsDivved = ProjectTags.map((tag) => 
        <span className="postTag" key={ProjectTags.indexOf(tag)}>{tag}</span>
        
    )
    
    let posttagsDivvedDivided = []
    if (divider===true) {
        for (let i=0; i<posttagsDivved.length; i++) {
            if (i+1<posttagsDivved.length) {
                posttagsDivvedDivided.push(posttagsDivved[i])
                posttagsDivvedDivided.push(<span className="postTag" key={"divider"+i}> | </span>)
            } else {
                posttagsDivvedDivided.push(posttagsDivved[i])
            }
        } return (
            <span className="BlogTags">{posttagsDivvedDivided}</span>
        )
    } else return posttagsDivved
}

export const sortByDate = (array) => {
    return array.sort(function(a,b){
        return b.date - a.date})
}

export class LyricQuote extends Component {
    artist = this.props.artist
    source = this.props.source
    content = HTMLReactParser(this.props.content)
    render() {
        return(
            <div>
                <div>
                    {this.content}
                </div>
            <div>
                <span><b>{this.artist} </b></span>
                <span>{this.source}</span>
            </div>
            </div>
        
            )
    }
}