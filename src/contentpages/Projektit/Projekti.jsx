import "./Projektit.css"
import { KontsaArray } from "../../contentArrays.js";
import {
    useLoaderData,
} from "react-router-dom";
import { NavLink } from "react-router-dom";

export async function loader({ params }) {
    const projects = KontsaArray.projektit
    let project = projects.find(p => p.url === params.projectUrl)
    console.log("Projektiloader: Projecttitle:", params.projectUrl)
    if (!project) {
            throw new Response("", {
                status: 404,
                statusText: "Project seeked not found"
        })
    }
    return project;
}

// Toimintalogiikka sama kuin blogin puolella, täällä alasivujen tyyli vaan vaihtelee enemmän
export function Projekti() {
    const project = useLoaderData();
    if (!project) {
        throw new Response("", {
            status: 404,
            statusText: "Project seeked not found"
        })
    }
    return (
    <>
        <h1><NavLink to="/projektit">Proggikset</NavLink> / {project.title}</h1>
        {project.element}
    </>
    )
}

