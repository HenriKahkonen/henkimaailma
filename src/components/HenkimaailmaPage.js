import React from 'react';
import { listTags, parseDate } from './functions';

class HenkimaailmaPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.state
        }

    //Yleiset tsekkifunktiot
    constructLog() {
        console.log(this.constructor.name, "Constructasi")
    }
    mountLog() {
         console.log(this.constructor.name, "Mounttasi")
    }
    renderLog() {
        console.log(this.constructor.name, "Renderöi")
    }
    currentPageLog() {
        console.log("Logataan nykyinen sivu komponentissa",this.constructor.name,"Sivu on",this.state.currentPage)
    }
    arraysLog() {
        console.log("Logataan arrayt komponentissa",this.constructor.name,"Arrayt:",this.contentArray,"(Näiden pitäisi olla kiinteästi sama ihan sama mistä kutsutaan)")
    }
    stateLog() {
        console.log("Logataan state komponentissa",this.constructor.name,"-> State:",this.state)
    }
    hereditaryStateLog() {
        console.log("Logataan peritty state komponentissa",this.constructor.name,"-> State:",this.state.hereditaryState)
    }   

    generatePostHeader () {
        return (
            <div>
            <h1>{this.arrayItem.title}</h1>
            <div className ="postInfoBox">
                <span className="postDate">{parseDate(this.arrayItem.date)}</span><br/>
                {listTags(this.arrayItem,true)}
            </div>
        </div>
        )
    }

}

export default HenkimaailmaPage;