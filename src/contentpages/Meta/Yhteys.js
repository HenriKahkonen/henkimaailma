import { NavLink } from 'react-router-dom';
import "./meta.css";


function Yhteys() {
    return (
        <div className="KontentBox">
        <div>

        <div className="KontentBoxSubNav">
                <NavLink to="/meta">
                    <div className="KBSubNav"><h1>changelog</h1></div> 
                </NavLink>
                <NavLink to="/meta/yhteys"> 
                    <div className="KBSubNavActive"><h1>yhteys</h1></div>
                </NavLink>
                {/*<NavLink to="/meta/cv"> 
                    <div className="KBSubNav"><h1>cv</h1></div>
                </NavLink>*/}
            </div>   

                <br/>
                <div className="yhteys">
                    <div><img className="YhteysIcon" alt="" src={process.env.PUBLIC_URL+"/img/icon/posti.png"}></img></div>
                    <div><p>Kyselyt, palaute-ehdotukset, risut, ruusut ja vihapostit voi lähettää sähköpostiosoitteeseen
                    <br/><b>henkonenvideo (ÄT) gmail (PISTE) com</b>.</p></div>
                </div>

                <div className="yhteys">
                    <div><img className="YhteysIcon" alt="" src={process.env.PUBLIC_URL+"/img/icon/sormi.png"}></img></div>
                    <div><p>Muualta internetistä minut löytää alapalkin linkeistä.</p></div>
                </div>
            </div>

            </div>
    )
}

export default Yhteys;