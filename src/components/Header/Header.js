import {NavLink} from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <>
            
            <header>
                <h1>h e n k i m a a i l m a</h1>
                    <nav className="NavBarContainer">
                        <NavButton link="/" imgurl={process.env.PUBLIC_URL+'/img/PNG_Etusivu2.png'}></NavButton> 
                        <NavButton link="/posts" imgurl={process.env.PUBLIC_URL+'/img/PNG_Posts.png'}></NavButton>
                        <NavButton link="/levyraati" imgurl={process.env.PUBLIC_URL+'/img/PNG_Levyraati2.png'}></NavButton>
                        <NavButton link="/meta" imgurl={process.env.PUBLIC_URL+'/img/PNG_Meta2.png'}></NavButton>
                        {/*<NavButton link="/projektit" imgurl={process.env.PUBLIC_URL+'/img/projektit.png'}></NavButton>*/}
                        {/*<NavButton link="/blog" imgurl={process.env.PUBLIC_URL+'/img/blog.png'}></NavButton>*/}
                        {/*<NavButton link="/arviot" imgurl={process.env.PUBLIC_URL+'/img/arviot.png'}></NavButton>*/}
                        {/*<NavButton link="/linkkeja" imgurl={process.env.PUBLIC_URL+'/img/linkkeja.png'}></NavButton>*/}
                        {/*<NavButton link="/cv" imgurl={process.env.PUBLIC_URL+'/img/cv.png'}></NavButton>*/}
                    </nav>
            </header>

        </>
    )
}

const NavButton = (props) => {
    let url = props.link
    let imgUrl = props.imgurl;
    return (
        <div className="NavButt">
            <NavLink 
                to={url}
                className={({isActive, isPending}) => 
                    isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
            >
                <img 
                    src={imgUrl} 
                    alt={url}>
                </img>
            </NavLink>
        </div>)
}

export default Header;