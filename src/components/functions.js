export const CurrentTab = () => {
    let a = window.location.pathname;
    if (a===''){
        return 'etusivu'
    }
    return a
}

const convertRatingString = (rating) => {
    console.log("muunnetaan stringistä")
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
    console.log("Muunnetaan pisteet:",post.title,post.rating,"->",kuvapiste)
    return process.env.PUBLIC_URL+"/img/arvosanat/"+kuvapiste+".png"
}

export const areTagsSelected = (itemtocheck, tagsToCompare) => {
    //console.log("Tagit jotka chekataan",itemtocheck['tags'], "Verrataan", tagsToCompare)
    return tagsToCompare.some(function (v) {
        return itemtocheck['ftags'].indexOf(v) >=0;
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

export const listTags = (item, divider) => {
    const ProjectTags = item['tags']
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
