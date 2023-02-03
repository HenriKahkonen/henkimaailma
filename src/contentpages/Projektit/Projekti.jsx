import "./Projektit.css"
import {
    parseDate,
    listTags
} from '../../components/functions.js'
import { KontsaArray } from "..";
import {
    HenkimaailmaPage,
} from "../../components";
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

//TODO MAKE THIS BETTER
class ProjectPage extends HenkimaailmaPage {
    constructor(props) {
        super(props) 
        this.state = props.state
        }

    arrayItem = this.props.item


    render() {
    
    return (
        <div>
            {this.generatePostHeader()}
        </div>
    )
    }
}
