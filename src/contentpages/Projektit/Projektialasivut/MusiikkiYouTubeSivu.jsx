import { KontsaArray } from "../../../contentArrays.js"
import { useLoaderData } from "react-router-dom"
import { parseDate } from "../../../components/functions"
import { listTags } from "../../../components/functions"
import { NavLink } from "react-router-dom"

export async function loader({ params }) {
    if (!params.musaYTTitle) {
        return null
    }
    const musaYTarray = KontsaArray.musaYT
    let videotoseek = musaYTarray.find(p => p.url === params.musaYTTitle)
    console.log("MusiikkiYouTube loader: Projecttitle:", params.musaYTTitle)
    if (!videotoseek) {
            throw new Response("", {
                status: 404,
                statusText: "Project seeked not found"
        })
    }
    return videotoseek;
}

const relNavigationNext= (item) => {
    if (item===undefined) {
        return <div></div>
    } 
    const url= item.url
    const name= item.title
    return (
            <div id="nextItem">
                <NavLink to={"../"+url}>
                {String.fromCharCode(62,62,62,62,62)}<br/>
                {name}
                </NavLink>
            </div>
        )
}


const relNavigationLast= (item) => {
    if (item===undefined) {
        return <div></div>
    
    } 
    const url= item.url
    const name= item.title.replace(' (Peliarvio)','')
    return (
            <div id="lastItem">
                <NavLink to={"../"+url}>
                {String.fromCharCode(60,60,60,60,60)}<br/>
                {name}
                </NavLink>
            </div>
        )
}

export function MusiikkiYouTubeSivu() {
    const videotoseek = useLoaderData();
    const kaikkiMusaYTVideot = KontsaArray.musaYT

    const next = kaikkiMusaYTVideot[(kaikkiMusaYTVideot.indexOf(videotoseek))-1]
    const last = kaikkiMusaYTVideot[(kaikkiMusaYTVideot.indexOf(videotoseek))+1]

    console.log("NEXT:",next)
    console.log("LAST:", last)

    const videosrc = "https://www.youtube.com/embed/"+videotoseek.ytid
    return (
        <div>
            <h1><NavLink to="../../">Proggikset</NavLink> / <NavLink to="../">Musiikkiaiheiset YouTube-jutut</NavLink> / {videotoseek.title.replace(' (Peliarvio)','')}</h1>
            <div className="peliarviopage">
            <div className="videoContainerYTpelit">
                <iframe className="videoPlayerYTpelit"
                /*</div>width="1020" height="630"*/
                src={videosrc} 
                title="YouTube video player" 
                allow=
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
                </iframe>
            </div>
            <div id="videoInfoBox">
                {parseDate(videotoseek.date)}<br/>
                {listTags(videotoseek,true)}
            </div>
            <div id="postNavigationContainer">
                {relNavigationLast(last)}
                {relNavigationNext(next)}
            </div>
            </div>
        </div>
    ) 
}