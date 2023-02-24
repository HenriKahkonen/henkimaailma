import { KontsaArray } from "../../../contentArrays.js"
import { useLoaderData } from "react-router-dom"
import { parseDate } from "../../../components/functions"
import { listTags } from "../../../components/functions"
import { NavLink } from "react-router-dom"

export async function loader({ params }) {
    if (!params.peliarvioTitle) {
        return null
    }
    const peliarviot = KontsaArray.peliarviot
    let arvio = peliarviot.find(p => p.url === params.peliarvioTitle)
    console.log("Peliarviot loader: Projecttitle:", params.peliarvioTitle)
    if (!arvio) {
            throw new Response("", {
                status: 404,
                statusText: "Project seeked not found"
        })
    }
    return arvio;
}

const relNavigationNext= (item) => {
    if (item===undefined) {
        return <div></div>
    } 
    const url= item.url
    const name= item.title.replace(' (Peliarvio)','')
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

export function YouTubePeliarviosivu() {
    const arvio = useLoaderData();
    const kaikkiPeliarviot = KontsaArray.peliarviot

    const next = kaikkiPeliarviot[(kaikkiPeliarviot.indexOf(arvio))-1]
    const last = kaikkiPeliarviot[(kaikkiPeliarviot.indexOf(arvio))+1]

    console.log("NEXT:",next)
    console.log("LAST:", last)

    const videosrc = "https://www.youtube.com/embed/"+arvio.ytid
    return (
        <div>
            <h1><NavLink to="../../">Proggikset</NavLink> / <NavLink to="../">Peliarvostelut</NavLink> / {arvio.title.replace(' (Peliarvio)','')}</h1>
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
                {parseDate(arvio.date)}<br/>
                {listTags(arvio,true)}
            </div>
            <div id="postNavigationContainer">
                {relNavigationLast(last)}
                {relNavigationNext(next)}
            </div>
            </div>
        </div>
    ) 
}