import { HenkimaailmaPage } from "../../../components";
import { KontsaArray } from "../..";
import { useLoaderData, NavLink } from "react-router-dom";
import {parseDate, listTags, filterListByTag} from "../../../components/functions.js";
import React from "react"


class ProjectListItem extends React.Component {

    render() {
        let item = this.props.item
        let imgurl = "https://i.imgur.com/fHHgmrq.png" // 720x720px, placeholderlautanen
        if (item.imgurl!==undefined) {imgurl=item.imgurl}        

        return (
            <div className="projectItemContainer" key={item['id']}>
                <div className="projectItemImageContainer">
                <NavLink to={item.url}>
                    <img className="projectItemImage" src={imgurl} alt={item.title}></img>
                </NavLink>
                </div>
                <div className="projectItemTextContainer">
                    <div className='projectItemTitle'><NavLink to={item.url}>{item.title}</NavLink></div>
                    <div className='projectItemDate'>{parseDate(item['date'])}</div>
                    <div className='projectItemTags'>{listTags(item,true)}</div>
                </div>
            </div>
        )
    }

}

export class MiscMusiikki extends HenkimaailmaPage {
    constructor(props) {
        super(props)
        this.state = {
            showPosts : [
                "Musiikki",
                "YouTube",
                "Muut"
            ]
        }
    }
    miscMusicArray = KontsaArray.miscMusiikki

    filterListByTags = (list) => {return filterListByTag(list,this.state.showPosts)}

    changeFilter = (tag) => {
        let filters = this.state.showPosts
        return () => {
            if (filters.includes(tag)) {
                filters = filters.filter(function(filter) {
                    return filter !== tag
                })
                this.setState({showPosts : filters})
            }
            else { // tagi ei ole näytettävien tagien listassa
                this.setState({showPosts : filters.concat(tag)})
            }
        }
    }
    
    filterButton =(buttonName)=> {
        const idScript = "projectfilter-"+buttonName;
        return (
            <span>
                <input id={idScript} 
                type="checkbox" 
                defaultChecked={this.state.showPosts.includes(buttonName)} 
                onChange={this.changeFilter(buttonName)}/>
                <span> {buttonName} </span>
            </span>
        )
    }

    render() {
        return (
            <div>
                <h1>Misc musiikkiprojektit</h1>
                <div className='projectListContainer'>
                {this.filterListByTags(this.miscMusicArray).map((post) => 
                    <ProjectListItem item={post} key={post['id']}/>)}
                </div>
            </div>
        )
    }
}



export class MiscMusiikkiPage extends HenkimaailmaPage {
    render() {
        return (
            <div>
                <p>TODO MISC MUSIIKKI</p>
            </div>
        )
    }
}
