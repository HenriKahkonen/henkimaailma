import { HenkimaailmaPage } from "../../components";
import './Meta.css'
import { KontsaArray } from "../../contentArrays";
import { parseDate } from "../../components/functions";

class Meta extends HenkimaailmaPage {
    render() {
        let clElement = KontsaArray.changeLog.map(item => {
            if (item.major===true) {
                return (
                <div key={item.title}>
                <div className="bigUDhead">{item.title}</div>            
                <div className="UDdate">{parseDate(item.date)}</div>
                <ul>
                    {item.bp.map(bp => {
                        return (
                        <li key={bp}>{bp}</li>
                        )
                    })}
                </ul>
            </div>
            )} else return (
                <div key={item.title}>
                <div className="UDhead">{item.title}</div>            
                <div className="UDdate">{parseDate(item.date)}</div>
                <ul>
                    {item.bp.map(bp => {
                        return (
                        <li key={bp}>{bp}</li>
                        )
                    })}
                </ul>
                </div>
            )})
        
        return (
            <div className="metaPage">
                <h1>Changelog</h1>
                {clElement}
                <br/>
                <h1>Yhteydenotot</h1>
                <p>Kyselyt, palaute-ehdotukset, risut, ruusut ja vihapostit voi lähettää osoitteeseen
                <br/><b>henkonenvideo (ÄT) gmail (PISTE) com</b>.</p>
                <p>Muualta internetistä minut löytää alapalkin linkeistä.</p>
            </div>
        )
    }
}

export default Meta;