import './NavigationColumn.css'
import {NavLink} from "react-router-dom"

const NavButton = (props) => {
    let url = props.link
    let imgUrl = props.imgurl;
    return (
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
        </NavLink>)
}

const NavigationBar = () => {
    return (
        <div className="NavBarContainer">
            <div className="NavBarList">
                <nav>
                <NavButton link="/" imgurl={process.env.PUBLIC_URL+'/img/home.png'}></NavButton>
                <NavButton link="/blog" imgurl={process.env.PUBLIC_URL+'/img/blog.png'}></NavButton>
                <NavButton link="/arviot" imgurl={process.env.PUBLIC_URL+'/img/arviot.png'}></NavButton>
                <NavButton link="/projektit" imgurl={process.env.PUBLIC_URL+'/img/projektit.png'}></NavButton>
                {/*<NavButton link="/linkkeja" imgurl={process.env.PUBLIC_URL+'/img/linkkeja.png'}></NavButton>*/}
                <NavButton link="/meta" imgurl={process.env.PUBLIC_URL+'/img/meta.png'}></NavButton>
                <NavButton link="/cv" imgurl={process.env.PUBLIC_URL+'/img/cv.png'}></NavButton>
                </nav>
            </div>
        </div>
    )
}

export default NavigationBar;