import { NavLink } from 'react-router-dom';
//import { changeLog } from '../../contentArrays';
//const XMLParser = require ('react-xml-parser');
import React from "react";
//import HenkimaailmaPage from "../../components/HenkimaailmaPage";


function Meta() {

    FetchChangeLog();

    return ( 
    <div className="KontentBox">
        <div className="KontentBoxSubNav">
                <NavLink to="/meta">
                    <div className="KBSubNavActive"><h1>changelog</h1></div> 
                </NavLink>
                <NavLink to="/meta/yhteys"> 
                    <div className="KBSubNav"><h1>yhteys</h1></div>
                </NavLink>
                {/*<NavLink to="/meta/cv"> 
                    <div className="KBSubNav"><h1>cv</h1></div>
                </NavLink>*/}            
        </div>     
        <div className="Prose">
            <div id="ChangeLogListaus"></div>
        </div>
    </div>
    )
    
}

function FetchChangeLog () {
    var parser = new DOMParser();
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState ===4 && this.status === 200 && this.responseText) {

            var updateHTML = "";
            var updatesDoc = parser.parseFromString(this.responseText,"text/xml");
            var updates = updatesDoc.getElementsByTagName("update");

            for (var i = updates.length-1; i >= 0; i--) {
                updateHTML += 
                    "<b>"+updates[i].getAttribute("title")+"</b></br>"
                    +"<div>"+updates[i].getAttribute("date")+"</div><ul>";
                
                var bulletpoints = updates[i].getElementsByTagName("li");
                
                for (var bp = 0; bp < bulletpoints.length; bp++) {
                    var updateItem = bulletpoints[bp]
                    updateHTML += (updateItem).outerHTML;
                }

                updateHTML += "</ul><br/>"

            }
            updateHTML += "</ul>"
            document.getElementById("ChangeLogListaus").innerHTML = updateHTML
            
        }
    }
    xhttp.open("GET","https://raw.githubusercontent.com/HenriKahkonen/HenkimaailmaMarkups/main/ChangeLog.xml",true);
    xhttp.send();
}

export default Meta;