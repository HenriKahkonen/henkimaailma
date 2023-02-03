import {useLoaderData} from "react-router-dom";
import { KontsaArray } from "../..";
import { HenkimaailmaPage } from "../../../components";

export async function loader({ params }) {
    const miscMusiikki = KontsaArray.miscMusiikki
    let musicItem = miscMusiikki.find(p => p.url === params.miscMusicItem)
    console.log("Misc musiikkiprojekti, Loaderiin tulee projecttitle:", params.miscMusicItem)
    if (!musicItem) {
            throw new Response("", {
                status: 404,
                statusText: "Misc music project seeked not found"
        })
    }
    return musicItem;
}


export function MiscMusiikkiPage() {
    const musicItem = useLoaderData();
    if (!musicItem) {
        throw new Response("", {
            status: 404,
            statusText: "Project seeked not found"
    })
    }
    return musicItem.element
}



export class MiscMusiikkiSivu extends HenkimaailmaPage {
    render() {
        return (
            <div>
                <p>TODO: SIVUSI</p>
            </div>
        )
    }
}

export default MiscMusiikkiPage;