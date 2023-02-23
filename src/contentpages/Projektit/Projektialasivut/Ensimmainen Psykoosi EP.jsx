import { HenkimaailmaPage } from "../../../components";
import { parseDate } from "../../../components/functions";

function hideBlock(id) {
    var x = document.getElementById(id)
    if (x===null) {
        console.log("null")
        return
    }
    console.log("klik")
    if (x.style.display === "none") {
        x.style.display ="block";
    } else {
        x.style.display = "none";
    }
}

export class EnsimmainenPsykoosiEP extends HenkimaailmaPage {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <iframe 
                    width = "350px"
                    height = "470px" 
                    src="https://bandcamp.com/EmbeddedPlayer/album=3350533764/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
                    seamless>
                    <a href="https://ensimmainenpsykoosi.bandcamp.com/album/ensimm-inen-psykoosi">Ensimmäinen Psykoosi by Ensimmäinen Psykoosi</a>
                </iframe>
                <h2>Ensimmäinen Psykoosi</h2>
                <h3>Ensimmäinen psykoosi EP</h3>
                {parseDate(new Date("2016-07-01T16:00:00Z"))}
                <br/><br/><p>
                    EP syntyi vähäisellä suunnittelulla, ja osaksi siksi se tuntuu jälkikäteen onnistuneelta. Muuttooni Oulusta Turkuun oli aikaa puoli vuotta, jonka aikana käytettävissäni oli yliopiston musiikkikasvatuksen oppiaineen äänityslaitteet. Rokkaamaan oli päästävä, ja bändikavereiksi valikoitui sen isommin miettimättä kolme ihmistä joista pidän: <b>Joonatan Rajala</b> (kitara), <b>Tatu Palo</b> (basso) ja <b>Janne Alakiuttu</b> (rummut). 
                </p>
                <p>
                    Piereskelin biisejä kasaan mahdollisimman nopeasti ja  vein ne treeneihin mahdollisimman raakileina. Lauluaihioita syntyi mm. masennuksesta, seksismistä, eroista ja huumeista - siis kaikesta mitä maailmassa ulkopuoliseksi itsensä kokeva nuori mies ympärillään näkee.
                </p>
                <p>
                    Minulla on joskus paha tapa ylikirjoittaa ja -sovittaa lauluja. Tätä ongelmaa ei <i>Psykoosin</i> löysäranteisen biisituotannon aikana kohdattu, ja tunkkaisen nauhoitusprosessin läpäisseet kappaleet kuulostavat siksi yhtä lailla soittajiltaan kuin kirjoittajaltaan. 
                </p>
                <p>
                    Ihailin (ja ihailen) laulunkirjoituksessani suomalaisyhtye <b>Reginaa</b>, jonka vaikutuksia voi paikoin kuulla myös Psykoosi-biiseissä. EP:n kaikenläpäisemää nihilismiä tasapainottaa elämänvoimainen meno ja rokkailun ilo. Maailma on paskaa, mutta elämä on ihanaa. 
                </p>
                <p>
                    Kansitaiteen EP:lle loi Joonatan <b>Suomen Kuvalehden</b> kuvituskuvasta, jossa potilasta lääkitään sydämensisäisellä injektiolla.
                </p>
                <br/>
                <h2>Lyriikat</h2>
                <a><h3 onClick={function() {
                    var x= document.getElementById("s1")
                    if (x.style.display !== "block") {
                        x.style.display = "block";
                      } else {
                        x.style.display = "none";
                      }
                    }
                }>Psykoosi voi tappaa</h3></a>
                <div id="s1">
                    Hei appelsiini / <br/>
                    Älä tuijota sormiin / <br/>
                    Vaan pistä silmät kiinni  / <br/>
                    Ja tule valoa kohti / <br/>
                    Kun Faunin iltapäivän / <br/>
                    Viimeiset tunnit / <br/>
                    On tullut päätökseensä / <br/>
                    Susta tulee kevätuhri / <br/>
                    <br/>
                    Jo ensimmäinen / <br/>
                    Psykoosi voi tappaa / <br/>
                    <br/>
                    Sä et osaa lentää / <br/>
                    vaan tipahdat tonttiin / <br/>
                    Nyt olet yksi meistä / <br/>
                    Rock n' roll zombie / <br/>
                    Ja sun viattomuutes / <br/>
                    On iäksi pilalla / <br/>
                    Kun sä et osaa enää muuta  / <br/>
                    Kun olla ihan vitun pihalla / <br/>
                    <br/>
                    Ensimmäinen / <br/>
                    Jo ensimmäinen / <br/>
                    Psykoosi voi tappaa / <br/>
                    Jo ensimmäinen psykoosi / <br/>
                    Jo ensimmäinen psykoosi voi tappaa / <br/>
                </div>
                <a><h3 onClick={function() {
                    var x= document.getElementById("s2")
                    if (x.style.display !== "block") {
                        x.style.display = "block";
                      } else {
                        x.style.display = "none";
                      }
                    }
                }>Koiran Sydän</h3></a>
                <div id="s2">
                    Mä voisin jäädä vaan nukkumaan /<br/>
                    Katsoa peiton alta kun tunnit vaihtuu ja on taas ilta /<br/>
                    Mä en jaksa mitään saavuttaa  /<br/>
                    Potkin kivet kadulla ja ilman suuntaa aina ajelehdin /<br/>
                    Kun mun maailma ei oo avoinna /<br/>
                    Mä en voi vaan päättää alkaa olla parempi persoona /<br/>
                    Aloittaa alusta /<br/>
                    Ja tehdä oikeat valinnat /<br/>
                    Sisällä koiran sydän /<br/>
                    <br/>
                    Joskus toivon että elämän /<br/>
                    Vois vaan lopettaa ja vaihtaa uuteen, vähän parempaan /<br/>
                    Westit savuavat käsissä /<br/>
                    Oikopolkua tulevaisuuteen dallaan niin että keuhkot kahisee /<br/>
                    Mut voi olla vähän vaikeaa /<br/>
                    Välittää tai kiinnostua mistään jos ei oo siihen sanaa /<br/>
                    Ja voi vain tuijotella maisemaa  /<br/>
                    Pihalla kaulastaan kiinni kettingissä /<br/>
                    Sisällä koiran sydän /<br/>
                </div>
                <a><h3 onClick={function() {
                    var x= document.getElementById("s3")
                    if (x.style.display != "block") {
                        x.style.display = "block";
                      } else {
                        x.style.display = "none";
                      }
                    }
                }>Eeva</h3></a>
                <div id="s3">
                    Meille sanottiin  /<br/>
                    Että muita pitää kunnioittaa /<br/>
                    Kohdella kunnolla /<br/>
                    Tehdä niin kuin itsellensäkin haluaa /<br/>
                    Se pyörii mielessä /<br/>
                    Kun illalla kävelen Eevan vieressä /<br/>
                    <br/>
                    Talot ovat tuttuja /<br/>
                    Ne on ollut siinä niin kauan kuin muistamme /<br/>
                    Jo silloin nuorina /<br/>
                    Ekoja kertoja tässä baarissa /<br/>
                    Hyvinä aikoina /<br/>
                    Oli vain tuttuja /<br/>
                    <br/>
                    Viidensadan idylli  /<br/>
                    On enää sahanpurusavuke Eevani huulilla /<br/>
                    Kun kävelemme kadulla ja jännitämme kaupungin kulmilla /<br/>
                    Yö on jo pitkällä kun baarit sulkevat /<br/>
                    Ja Hän on esillä /<br/>
                    Kohta ollaan kotona /<br/>
                    <br/>
                    Jotkut ihmiset ei /<br/>
                    Ei osaa kuulla kielteistä vastausta /<br/>
                    Ja jäävät nuokkumaan /<br/>
                    Etsimään jotain muuta viestiä kasvoilta /<br/>
                    No sopii katsoa /<br/>
                    Jos joku koittaa viedä Eevan minulta /<br/>
                </div>
                <a><h3 onClick={function() {
                    var x= document.getElementById("s4")
                    if (x.style.display !== "block") {
                        x.style.display = "block";
                      } else {
                        x.style.display = "none";
                      }
                    }
                }>Mulla menee hyvin</h3></a>
                <div id="s4">
                    Soitellaan jos tuut kaupunkiin /<br/>
                    Ja jutellaan kaikki siitä mihin me jäätiin /<br/>
                    Mut unohdin sun nimesi /<br/>
                    Ja en vastaa outoihin numeroihin /<br/>
                    <br/>
                    Koska mua ei kiinnosta käydä sun kanssasi kahvilla /<br/>
                    Me ollaan puhuttu jo tarpeeksi /<br/>
                    Tiedän jo kaiken mitä sanoisin /<br/>
                    Joo, mulla menee hyvin /<br/>
                    <br/>
                    Kaduttaa että me tunnetaan /<br/>
                    Mä tahtoisin vain unohtaa mitä me tehtiin /<br/>
                    Sä yrität ommella /<br/>
                    Silppua vielä jotenkin kokonaiseksi /<br/>
                    <br/>
                    Mutta mua ei kiinnosta /<br/>
                    Kuunnella tyhjiä lauseita /<br/>
                    Mä olen kuullut tän ennenkin /<br/>
                    Ja sanon kaikille muillekin /<br/>
                    Vain joo, mulla menee hyvin /<br/>
                </div>
            </div>
        )
    }
}