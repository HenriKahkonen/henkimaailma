import { NavLink } from 'react-router-dom';


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
                <NavLink to="/meta/cv"> 
                <div className="KBSubNav"><h1>cv</h1></div>
                </NavLink>
            </div>   


            <div className="Prose">
                Kyselyt, palaute-ehdotukset, risut, ruusut ja vihapostit voi lähettää sähköpostiosoitteeseen
                <br/><b>henkonenvideo (ÄT) gmail (PISTE) com</b>.
                <p>Muualta internetistä minut löytää alapalkin linkeistä.</p><br/>
            </div>

            </div>
        </div>
    )
}

export default Yhteys;