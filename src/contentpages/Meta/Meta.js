import { HenkimaailmaPage } from "../../components";
import './Meta.css'
import { parseDate } from "../../components/functions";
import { Link } from "react-router-dom";

class Meta extends HenkimaailmaPage {
    render() {
        /*let clElement = KontsaArray.changeLog.map(item => {
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
        */
        return (
            <div className="metaPage">

                <h1>Yhteydenotot</h1>
                <p>Kyselyt, palaute-ehdotukset, risut, ruusut ja vihapostit voi lähettää sähköpostiosoitteeseen
                <br/><b>henkonenvideo (ÄT) gmail (PISTE) com</b>.</p>
                <p>Muualta internetistä minut löytää alapalkin linkeistä.</p><br/>

                <h1>Changelog</h1>

                <div>
                    <div><b>Real Life Loot</b></div>
                    <div className="UDdate">{parseDate(new Date("2023-04-14T16:00:00Z"))}</div>
                    <ul>
                        <li>Projekteihin <Link to="../projektit/reallifeloot">lisätty sivu 3D-mallinnuksille "Real Life Loot"</Link></li>
                        <li>Metasivu yksinkertaistettu, tukee nyt myös linkkejä</li>
                    </ul>
                </div><br/>

                <div>
                    <div><b>iPod-aikakapseli ja SnS-samplepack</b></div>
                    <div className="UDdate">{parseDate(new Date("2023-04-03T16:00:00Z"))}</div>
                    <ul>
                        <li>Projekteihin lisätty löytynyt <Link to="../projektit/ipod-aikakapseli">iPod-aikakapselin tallenne</Link></li>
                        <li><Link to="../projektit/sns-samplepack">SnS -samplepaketti</Link> lisätty projekteihin</li>
                        <li>Blog: <Link to="../blog/hyvat-ja-huonot-teatteriesitykset">"Hyvät ja huonot teatterijutut"</Link></li>
                    </ul>
                </div><br/>

                <div>
                    <div><b>Siistintää + Käärijävideo</b></div>
                    <div className="UDdate">{parseDate(new Date("2023-03-28T16:00:00Z"))}</div>
                    <ul>
                        <li>Sivupalkin (navigaatio) järjestystä muutettu</li>
                        <li>CSS Yksinkertaistettu kautta linjan ja luettavuutta mobiililaitteilla parannettu hiukan (lisämuutoksia todnäk vielä edessä) </li>
                        <li>Lisätty <Link to="../projektit/musaYouTube">Käärijä-video ja uusi projektisivu musa-aiheisille YouTube-jutuille</Link></li>
                        <li><Link to="../projektit/discordlevyraati">Discord-levyraatiin</Link> lisätty filtteri: jos levyä ei ole vielä arvosteltu ei se näy levyjen listassa (ennen näkyi listan perällä, arvosanana 0)</li>
                        <li><Link to="../projektit/discordlevyraati/docs">Jivesin dokumentaatiota</Link> päivitetty ajankohtaisemmaksi</li>
                    </ul>
                </div><br/>

                <div>
                    <div><b>Henkimaailma 1.0 on täällä</b></div>
                    <div className="UDdate">{parseDate(new Date("2023-02-01T16:00:00Z"))}</div>
                    <ul>
                        <li>Tervetuloa maailmaan, Henkimaailma</li>
                    </ul>
                </div><br/>


            </div>
        )
    }
}

export default Meta;