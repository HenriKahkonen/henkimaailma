import HenkimaailmaPage from "../HenkimaailmaPage";
import axios from "axios";
import {
    parseDate,
    listTags,
} from '../functions.js';

class ProjectPage extends HenkimaailmaPage {
    constructor(props) {
        super(props) 
        this.state = props.state
        }
    
    arrayItem = this.props.item    

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

    getItemHtmlData = (item) => {
        console.log("Get item from",item)
        const htmlUrl = process.env.PUBLIC_URL + '/contents/'+item.url+".html"
        // etsitään postauksen html publicista ja palautetaan
        axios
        .get(htmlUrl)
        .then(res => {
            console.log('haetaan sisalto publicista: ',res.data)
            console.log("haettu data: ",res.data)
            return res.data
        })
    }
    
    getHtml () {
        //console.log("Get item from",this.props.item)
        const htmlUrl = process.env.PUBLIC_URL + '/contents/'+this.props.item.url+".html"
        // etsitään postauksen html publicista ja palautetaan
        axios
        .get(htmlUrl)
        .then(res => {
            //console.log('haetaan sisalto publicista: ',res.data)
            var parser = new DOMParser();
            var doc = parser.parseFromString(res.data, "text/html").querySelector('.sisalto').innerHTML;
            //console.log("parsittu html: ",doc)
            document.getElementById('projektisisalto').innerHTML = doc
        })
    }

    generateHtml() {
        return (
            <div id='projektisisalto'>{this.getHtml()}</div>
        )
    }
    
    render() {
        //this.setHtml();
    return (
        <div>
            {this.generatePostHeader()}
            {this.generateHtml()}
        </div>
    )
    }
}

export default ProjectPage;