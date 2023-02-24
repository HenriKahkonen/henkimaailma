import { KontsaArray } from "../../contentArrays.js";
import { useLoaderData } from "react-router-dom";
import { listArtists } from "../../components/functions";
import { getRatingPng } from "../../components/functions";
import { NavLink } from "react-router-dom";

export async function loader ({params}) {
    const arviot = KontsaArray.arviot
    let arvio = arviot.find(p => p.url === params.arvio)
    console.log("Arvioloader: Arvio:", params.arvio)
    if (!arvio) {
            throw new Response("", {
                status: 404,
                statusText: "Blog post seeked not found"
        })
    }
    return arvio;
}

export function ArvioItem() {
    const arvio = useLoaderData();
    if (!arvio) {
        throw new Response("", {
            status: 404,
            statusText: "Blog post seeked not found"
        })
    }
    return (
        <>
        <h1><NavLink to="/arviot/">Arviot</NavLink> / {arvio.title}</h1>
        <div className="arvioMasterContainer">
            {ArvioHeader(arvio)}
            <div className="arvioTextBox">
                {arvio.element}
            </div>
        </div>
        </>
    )
}

export function ArvioHeader(review) {
    /*const navigation = CurrentTab().replace('/arviot/','');
    const review = KontsaArray.arviot.find(arvio => arvio.url ===
         navigation);*/

    const imgsrc = review.coverArt
    const rating = getRatingPng(review)

return (
    <>
    <div className="arvioAlbumArtLarge">
        <img src={imgsrc} alt="Album art"/>
    </div>
    <div className="arvioPageDataBox">
        <div className="arvioPageDataBox-text">
            <div className="arvioPageTitle">{review.data.albumtitle}</div>
            <div>
                {listArtists(review.data.artist)}<br/>
                {review.data.year} {review.data.label}
            </div>
        </div>
        <div className="arvioPageDataBox-ratingContainer">
            <img src={rating} alt={"Arvosana: "+(review.rating/10)}/>
        </div>
    </div>
    </>
)
}