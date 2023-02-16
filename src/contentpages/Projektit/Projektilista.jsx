
import React from "react";
import {
    NavLink,
} from "react-router-dom"
import './Projektit.css'
import {
    HenkimaailmaPage,
} from "../../components";
import { KontsaArray } from "../../contentArrays.js";
import {
    parseDate,
    filterListByTag,
    listTags
} from '../../components/functions.js'

//Projektisivujen juuressa palautetaan vain staattinen lista projekteja.
//Listan on päivitettävä omaa stateaan (proggisten filtteröinti), ja
//funktio palauttaa siksi React-elementin
export function ProjektiLista() {
    return <ProjektiListaus/>
}

// Kaikkien projektien listaaminen ja listan filtteröinti
class ProjektiListaus extends HenkimaailmaPage {
    constructor(props) {
        super(props)
        this.state = {
            showPosts : [

            ]
        }
    }
    projektiArray = KontsaArray.projektit

    filterListByTags = (list) => {
        if (this.state.showPosts[0]===undefined) {
            return list
        }
        else return (
            filterListByTag(list,this.state.showPosts)
        )
    }

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
    
    filterButton =(buttonName, buttonText)=> {
        const idScript = "projectfilter-"+buttonName;
        return (
            <span>
                <input id={idScript} 
                type="checkbox" 
                defaultChecked={this.state.showPosts.includes(buttonName)} 
                onChange={this.changeFilter(buttonName)}/>
                <span> {buttonText} </span>
            </span>
        )
    }

    render() {
        return (
            <div>
                <h1>Proggikset</h1>
                <span>Näytä vain: </span>
                {this.filterButton("Musiikki","Musa")}
                {this.filterButton("MusicMisc","Musa (irtsat)")}
                {this.filterButton("YouTube","YouTube")}
                {this.filterButton("Muut","Muut")}
                
                <div className='projectListContainer'>
                {this.filterListByTags(this.projektiArray).map((post) => 
                    <ProjectListItem item={post} key={post['id']}/>)}
                </div>
            </div>
        )
    }
}

// Yhden projektin elementti listassa
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

