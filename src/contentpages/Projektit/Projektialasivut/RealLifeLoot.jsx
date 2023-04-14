
import { HenkimaailmaPage } from "../../../components";
import { parseDate } from "../../../components/functions";

export class RealLifeLoot extends HenkimaailmaPage {
    constructor(props) {
        super(props)
        this.state = {
            item:1,
        }
    }

    rllNext=()=> {
        const oldItem=this.state.item
        const totalItems=this.items.length
        if (oldItem===totalItems) {
            return()=>{
                this.setState({item:1})
            }
        } else
        return()=>{
            this.setState({item:(oldItem+1)})
        }
    }
    rllLast=()=> {
        const oldItem=this.state.item
        const totalItems=this.items.length
        if (oldItem===1) {
            return()=>{
                this.setState({item:totalItems})
            }
        } else
        return()=>{
            this.setState({item:(oldItem-1)})
        }
    }
    rllJump=(itemNro)=>{
        return()=>{
            this.setState({item:itemNro})
        }
    }

    items = [
        {
            link:"https://i.redd.it/8j4asl8gg7sa1.gif",
            date: new Date("2023-04-03T16:00:00Z"),
            title: "Pills"   
        },
        {
            link:"https://i.redd.it/s83bttaakfsa1.gif",
            date: new Date("2023-04-04T16:00:00Z"),
            title: "The Last Cigarette"  
        },
        {
            link:"https://i.redd.it/d76d47lej0ta1.gif",
            date: new Date("2023-04-05T16:00:00Z"),
            title: "A 3D Rendering of a Pipe"  
        },
        {
            link:"https://i.redd.it/awx3g98bplta1.gif",
            date:new Date("2023-04-06T16:00:00Z"),
            title: "Hobo leather shoes"
        },
    ]

    render() {
        return (
            <div className="rll">
                <div className="rllNav">

                    <button
                    id="rllLast"
                    onClick={this.rllLast()}    
                    >{String.fromCharCode(60,60,60)}</button>
                
                    <div>
                        <img src={this.items[(this.state.item-1)].link}></img>
                        <div>{parseDate(this.items[(this.state.item-1)].date)}</div>
                    </div>
                    <button
                    id="rllNext"
                    onClick={this.rllNext()}    
                    >{String.fromCharCode(62,62,62)}</button>

                </div>
            <div className="rllList">
                <b>Jump to:</b><br/><br/>
                {this.items.map(item =>
                    <div>
                        <button
                        id={item.title}
                        onClick={this.rllJump((this.items.indexOf(item)+1))}>{"("}{this.items.indexOf(item)+1}{") "}{item.title}</button>
                        <span className="rllDate">{parseDate(item.date)}</span>
                    </div>
                )}
            </div>
            

            </div>
        )
    }
}

/**/