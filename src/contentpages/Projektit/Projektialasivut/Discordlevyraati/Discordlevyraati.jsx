// JOS PITÄÄ TEHDÄ UUTTA SIVUA NIIN TÄSTÄ COPYPASTEA

// 1. MUISTA IMPORTTAA SIVU

import { NavLink, useLoaderData } from "react-router-dom";
import { HenkimaailmaPage } from "../../../../components";
import { getLevyRaatiData } from "../../../../components/functions";
import "./discordlevyraati.css";
import axios from 'axios'

export async function loader() {
    console.log("Discordlevyraatiloader:")
    //let albumData = getLevyRaatiData();
    return true;
}

export  function DiscordLevyRaati() {
    axios.get('http://localhost:3001/peliarviot/2')
    .then(res => console.log(res))
    //const albumData = useLoaderData();

    return (
        <div>
            <h1><NavLink to="/projektit">Proggikset</NavLink> / Discord-levyraati</h1>
            <p>TODO Discord-levyraati</p>
        </div>
    )
}

