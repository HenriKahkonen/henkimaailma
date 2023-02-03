import {HenkimaailmaPage} from "../../components";
import './Blog.css'
import axios from "axios";
import {parseDate} from '../../components/functions'

import React, { useEffect } from "react";
import {KontsaArray} from '../'
import { listTags } from "../../components/functions";
import { 
    useLoaderData,
    useNavigation,
    Form,
    useSubmit,
    Link,
     } from "react-router-dom";

const generateBlogList = (blogArray, searchParam) => {
    let blogArrayFiltered 
    if (searchParam!==null){blogArrayFiltered = blogArray.filter(function (p) {
        let etsittavat = p.title.concat(p.tags)
        return (
            etsittavat.toLowerCase().includes(searchParam.toLowerCase())
        )})
    }if (searchParam===null) {
        blogArrayFiltered=blogArray
    }
    return (
        <div>
            <ul id="blogilista">
                {blogArrayFiltered.map((post) => 
                    <li className="blogListItem" key={post.id}>
                        <div className="blogItemContainer">
                            <div className="blogTitleContainer">
                                <Link className="blogTitle" to={post.url}>{post.title}</Link>
                            </div>
                            <div className="blogListDate">{parseDate(post['date'])}</div>
                        </div>
                        {listTags(post,true)}
                    </li>)}
            </ul>
        </div>
    )
}



export async function loader({request}) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    return q ;
}

export function Blog() {
    const q = useLoaderData();
    const blogArray = KontsaArray.blog;
    const submit = useSubmit();

    useEffect(()=> {
        document.getElementById("q").value =q;
    }, [q]);
    return (
        <>
            <h1>Blogiarkisto</h1>
            <Form id="search-form" role="search">
                <input 
                    id="q"
                    aria-label="Etsi blogista"
                    placeholder="Etsi blogista..."
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
            {generateBlogList(blogArray, q)}
        </>
        )
}

class BlogPage extends HenkimaailmaPage {
    constructor(props) {
        super(props)
    }
    q=this.props.q
    blogArray = KontsaArray.blog

    /*
    filterBlogList = () => {
        return "a"
        //this.setState({state})
    }
    */

    /*
    displayStatus(blogitem) {
        let tagsApproved = true
        let titleApproved = true //TODO
        console.log('tämän postauksen tagit on ',blogitem['tags'])
        return 

    }
    */

    

    render() {
        return (
            <div>{generateBlogList(this.blogArray, this.q)}</div>
        )
    }
}

    export default Blog;