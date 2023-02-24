import { useLoaderData } from "react-router-dom";
import { KontsaArray } from "../../contentArrays.js";
import { useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import { listGenreTags, parseDate } from "../../components/functions";
import './Arviot.css'
import { getRatingPng } from "../../components/functions";

const generateArvioList = (arvioArray, searchParam) => {
    let arvioArrayFiltered 
    if (searchParam!==null){arvioArrayFiltered = arvioArray.filter(function (p) {
        let etsittavat = p.title.concat(p.genre)
        return (
            etsittavat.toLowerCase().includes(searchParam.toLowerCase())
        )})
    }if (searchParam===null) {
        arvioArrayFiltered=arvioArray
    }
    return (
        <div id="arviolista">
            {arvioArrayFiltered.map((post) => 
                <div className="arvioItem" key={post.id}>
                    <div className="arvioImgContainer">
                        <div className="arvioImgSpacer">
                            <Link to={post.url}><img src={post.coverArt} alt="Kansitaide"/></Link>
                        </div>
                    </div>
                    <div className="arvioDataContainer">
                        <div className="arvioListTextContainer">
                            <Link to={post.url}>{post.title}</Link>
                            <div className="arvioListGenre">{listGenreTags(post,true)}</div>
                        </div>
                        <div className="arviolistDate">
                            {parseDate(post.date)}
                        </div>
                        <div className="arvioListRatingContainer">
                            <div className="ratingImg">
                                <img src={getRatingPng(post)} alt="Arvosana"></img>
                            </div>
                        </div>

                    </div>
                </div>)}
        </div>
    )
}

export async function loader({request}) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    return q ;
}

export function Arviot() {
    const q = useLoaderData();
    const arvioArray = KontsaArray.arviot;
    const submit = useSubmit();

    useEffect(()=> {
        document.getElementById("q").value =q;
    }, [q]);

    return (
        <>
            <h1>Arviot</h1>
            <Form id="search-form" role="search">
                <input 
                    id="q"
                    aria-label="Etsi arvioista"
                    placeholder="Etsi arvioista..."
                    type="search"
                    name="q"
                    defaultValue={q}
                    onChange={(event) => {
                        const isFirstSearch = q === null;
                        submit(event.currentTarget.form, {
                            replace: !isFirstSearch,
                        });
                    }}
            />
            </Form>
            <br/>
            {generateArvioList(arvioArray, q)}
        </>
    )
}

export default Arviot;