import { NavLink } from "react-router-dom";
import "./Levyraati.css";

export function LevyraatiTietosuoja() {
    return (
        <div className="KontentBox">

            <div className="KontentBoxSubNav">
                <NavLink to="/levyraati">
                    <div className="KBSubNav"><h1>tulokset</h1></div> 
                </NavLink>
                <NavLink to="/levyraati/docs"> 
                    <div className="KBSubNav"><h1>dokumentaatio</h1></div>
                </NavLink>
                <NavLink to="/levyraati/tietosuoja"> 
                <div className="KBSubNavActive"><h1>tietosuojalauseke</h1></div>
                </NavLink>
            </div> 
            <div className="prose">

                <h2 id="tietosuojalauseke">Tietosuojalauseke</h2>
                <p>
                    Koska botin perustoiminnallisuuteen liittyy albumeiden ja niiden lähettäjien ja arvioijien tietojen tallettaminen ja manipulointi, on kohtuullista että käyttäjänä tiedät mitä tietoja sinusta talletetaan. Botti tarvitsee toimiakseen joitakin Discord-käyttäjätunnisteeseen liittyviä tietoja, ja koska käyttäjätunnuksien takana elävät luonnolliset henkilöt, lienee aiheellista kohdella myös Jivesin tietokannan hallintaa <a href="https://eur-lex.europa.eu/legal-content/FI/TXT/?uri=celex:32016R0679">EU:n yleisen tietosuoja-asetuksen</a> alaisena toimintana.
                </p>
                <h3>Käyttäjästä talletettavat tiedot</h3>
                    <ul>
                        <li key="tieto1">Discord-käyttäjä-id</li>
                        <li key="tieto2">Discord-käyttäjän lähetyshetkellä käyttämä nimimerkki</li>
                        <li key="tieto3">Mitä albumeita käyttäjä on lähettänyt arvioitavaksi</li>
                        <li key="tieto4">Mitä arvosanoja käyttäjä on antanut kullekin albumille.</li>
                    </ul>
                <h3>Tietojen julkisuus ja säilytysaika</h3>
                <p>
                    Jivesin tallentamat tiedot ovat lähtökohtaisesti julkisia. Käyttäjien lähettämien pistearvojen keskiarvoja käytetään albumien pistekeskiarvojen laskemiseen tällä sivustolla ja 'Henkimaailma'-Discord-palvelimella.
                </p>
                <p>
                    Jivesin tallentamia tietoja säilytetään MongoDb-tietokannassa Tukholmalaisella AWS -palvelimella.
                </p>
                <p>
                    Tietokannan dataa voidaan lähtökohtaisesti säilyttää ikuisesti ellei rekisteröity erikseen pyydä itseään koskevien tietojen poistamista (ks. alla).
                </p>
                <h3>Rekisteröidyn oikeudet</h3>
                <p>
                    Jives-botin käyttäjällä on oikeus pyytää rekisterinpitäjältä pääsy itseään koskeviin tietoihin sekä oikeus pyytää kyseisten tietojen oikaisemista tai poistamista taikka käsittelyn rajoittamista ja vastustaa käsittelyä.
                </p>
                <p>
                    Käyttäjän lähettämien albumien ja arvioiden poistaminen onnistuu helpoiten botin omia komentoja hyödyntäen.
                </p>
            </div>
        </div>
    )
}
