import { KontsaArray } from ".."
import { useLoaderData } from "react-router-dom"
import { NavLink } from "react-router-dom"

export async function loader({ params }) {
    const blog = KontsaArray.blog
    let blogpost = blog.find(p => p.url === params.blogPost)
    console.log("Projektiloader: Projecttitle:", params.blogPost)
    if (!blogpost) {
            throw new Response("", {
                status: 404,
                statusText: "Blog post seeked not found"
        })
    }
    return blogpost;
}

export function BlogItem() {
    const blogpost = useLoaderData();
    if (!blogpost) {
        throw new Response("", {
            status: 404,
            statusText: "Blog post seeked not found"
        })
    }
    return (
        <>
        <h1><NavLink to="/blog/">Blog</NavLink> / {blogpost.title}</h1>
            {blogpost.element}
        </>
    )
}