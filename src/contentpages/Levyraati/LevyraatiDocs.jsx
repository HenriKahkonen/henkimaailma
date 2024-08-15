import { NavLink, } from "react-router-dom";
import "./Levyraati.css";

export function LevyraatiDocs() {
    return (
        <div className="KontentBox">

            <div className="KontentBoxSubNav">
                <NavLink to="/levyraati">
                    <div className="KBSubNav"><h1>tulokset</h1></div> 
                </NavLink>
                <NavLink to="/levyraati/docs"> 
                    <div className="KBSubNavActive"><h1>dokumentaatio</h1></div>
                </NavLink>
                <NavLink to="/levyraati/tietosuoja"> 
                <div className="KBSubNav"><h1>tietosuojalauseke</h1></div>
                </NavLink>
            </div>   
            <div className="prose">
                <h2>Sisällysluettelo</h2>
                <a href="#about">Discord-levyraati?</a><br/>
                <a href="#bottikomennot">Bottikomennot</a><br/>
                <a href="#submit">- Albumin lähettäminen</a><br/>
                <a href="#DELETEALBUM">- Albumin poistaminen</a><br/>
                <a href="#rate">- Albumin arvioiminen</a><br/>
                <a href="#myrating">- Oman arvion kysyminen</a><br/>
                <a href="#score">- Albumin pistekeskiarvon kysyminen</a><br/>
                <a href="#leaderboard">- Levyraadin top 10-leaderboardin näyttäminen</a><br/>
                {/*<a href="#itjustworks">Miten se toimii?</a><br/>
                <a href="#lahdekoodi">- Lähdekoodi</a><br/>
                <a href="#todo">Suunnitteilla olevat toiminnallisuudet</a><br/>*/}

                <br/><h2 id="about">Discord-levyraati?</h2>
                <div className="sidePic">
                    <img src="https://i.imgur.com/YbKjnh4.png" alt="Jives"></img>
                    <div><i>Henkimaailman Discord-palvelimen botti Jives.</i></div>
                </div>
                <p>    
                    Halusin kastaa varpaani Discordin rajapinnassa ohjelmoimiseen. Ajattelin, että olisi hauskaa jäsentää keskustelua musiikista Discord-palvelimelle, johon voisi liittää myös toiminnallisuutta kuten mahdollisuuden arvioida albumeita suoraan palvelimen sisällä. Näitä tarkoituksia palvelemaan aloitin <b>Jivesin</b> ohjelmoimisen. 
                </p>
                <p>    
                    Jives toimii <a href="https://discord.gg/GPtVSVaVz7">Discord-palvelimellani</a>. <a href='#lahdekoodi'>Jivesin lähdekoodista</a> voi ottaa mallia vastaavan botin rakentamiseen muualle.
                </p>
                <p>
                    Kasvonsa ja nimen Jivesille on (ilman suostumustaan) lainannut <b>Adrian Edmondson</b>, jonka roolihahmo tekeytyy eräässä <b>Bottom</b>-farssikomedian jaksossa hovimestariksi. Palvelimen digitaalisen palvelijan oli ehdottomasti oltava hovimestari, sillä hovimestarit ovat universaalisti hauskoja.
                </p>

                <br/>
                <h2 id="bottikomennot">Bottikomennot</h2>
                <p>
                    Vuorovaikutus Jivesin kanssa tapahtuu viestikomennoin Henkimaailma-Discordpalvelimella.
                </p>
                <p>
                    Jives kuuntelee kaikkia palvelimella lähetettyjä viestejä, ja yrittää reagoida viesteihin jotka alkavat <b>Jives!</b> -prefiksillä. Jives tulkitsee kutsuttavan komennon ja argumentit prefiksin jälkeisistä sanoista. Esimerkiksi allaolevan viestin lähettäminen Jivesin läsnäollessa kertoo Jivesille:
                </p>
                    <ol>
                        <li>Jivesille yritetään lähettää komentoa <b>(Jives!)</b></li>
                        <li>Kutsuttava komento on albumin lähettäminen <b>(submit)</b></li>
                        <li>Lähetettävä albumi on Neljä Ruusua -yhtyeen Popmuseo. <b>({"<albumin Spotify-jakolinkki>"})</b></li>
                    </ol>
                <div className="codeSnippet">Jives! Submit https://open.spotify.com/album/4lIzLpZCts5mtadlJonwTS?si=MlIOib0LQGSzKtzrimZV8Q</div>
                <p>
                    Jotkut Jivesin komennoista toimivat riippumatta siitä, missä niitä kutsutaan. <b>Joitakin komentoja, kuten albumin arvioimiskomentoa, taas on käytettävä albumia vastaavan ketjun alla.</b>
                </p>
                <img className="docsImg"src="https://i.imgur.com/bCrW04l.gif" alt=""></img>
                <p>
                    Botti nojaa vahvasti Discordin thread-ominaisuuteen rajaamalla albumien arviointitoiminnot ja keskustelun niitä vastaaviin ketjuihin <a href="https://discord.com/channels/1031479962005409802/1070620790816510003">#levyraati</a> -kanavan alla. Itse #levyraati-kanavalle ei voi kirjoittaa, jotta albumeiden ketjut eivät katoa muun keskustelun lomaan.
                </p>
                <p>
                    Jivesin vastaanottamat komennot ja prefix ovat case-sensitiivisiä, eli botti ei ymmärrä esimerkiksi kutsuja, jotka alkavat prefiksillä "JIVES!". Helppokäyttöisyyden puhelimella vuoksi komentojen ensimmäisen kirjaimen koolla ei ole väliä, eli Jives ymmärtää prefiksit <b>Jives!</b> ja <b>jives!</b> sekä esimerkiksi komennot <b>Submit</b> ja <b>submit</b> <u>muttei komentoa <b>SUbmit</b></u>.
                </p>
                <p>
                    Kanavan siisteyden ylläpitämiseksi Jives yleensä poistaa käyttäjän lähettämät viestit komentokutsut ymmärrettyään.
                </p>

                <br/>
                <h3 id="submit">Albumin lähettäminen</h3>
                <div className="codeSnippet">{"jives! submit <albumin spotifyjakolinkki>"}</div>
                <p>
                    Jives vastaanottaa Spotifyn albumin jakolinkin (huom! ei embed-linkki), ja hakee botin toiminnallisuuksien kannalta olennaiset tiedot Spotifyn API:sta. Tiedot saatuaan Jives vertaa tietoja tämän tietokannassa oleviin albumeihin. Jos albumia ei ole vielä tietokannassa, Jives luo #levyraati -kanavan alle albumia vastaavan ketjun ja merkitsee viestiinsä albumin lähettäjän. 
                </p>
                <p>
                    <b>Jives tukee tällä hetkellä vain Spotifyssä julkaistuja albumeita. </b>Jos Jives ei tunnista komennon perässä olevaa merkkijonoa spotifyn jakolinkiksi, ei levyn lähettäminen luonnollisesti onnistu.
                </p>
                <p>
                    Kun albumi on lähetetty tietokantaan ja tätä vastaava ketju on luotu Discord-palvelimelle, voi albumia arvostella tätä vastaavassa ketjussa muilla komennoilla.
                </p>
                <p>
                    Jos lähetettävä albumi on jo tietokannassa, Jives vastaa viestiin linkkaamalla  levyä vastaavan ketjun.
                </p>

                <br/>
                <h3 id="DELETEALBUM">Albumin poistaminen</h3>
                <div className="codeSnippet">
                    <div className="codeSnippetalert">Kutsuttava albumia vastaavassa ketjussa.</div>
                    {"jives! DELETEALBUM"}</div>
                <p>
                    Käyttäjä voi poistaa lähettämänsä albumin (ja kaikki sen arviot) tietokannasta ja palvelimesta tällä komennolla.
                </p>
                <p>
                    Vain albumin lähettänyt käyttäjä tai botin haltija voi poistaa lähetetyn albumin.
                </p>
                <p>
                    Albumin poistaminen on Jivesin ainoa komento, joka on pakko antaa KOKONAAN ISOILLA KIRJAIMILLA. Tämä siksi että sitä on vaikeampi kutsua vahingossa.
                </p>
                
                <br/>
                <h3 id="rate">Albumin arvioiminen</h3>
                <div className="codeSnippet">
                    <div className="codeSnippetalert">Kutsuttava albumia vastaavassa ketjussa.</div>
                    {"jives! rate <arvosana 0-100 tai murtolukuna esim. 7/10> p"}
                    <div className="codeSnippetNote">Kirjoittamalla "p" komennon perään viimeisenä argumenttinä lähetetty arvosana näkyy ketjussa. Ilman p:tä voit jättää arvosanan anonyymisti.</div>
                    </div>

                    <div></div>
                    <p>
                        Jives tallentaa käyttäjän antaman pistemäärän albumin tietoihin tietokannassa.
                    </p>
                    <p>
                        Käyttäjän antama arvosana voi olla kokonaisluku välillä 0-100 tai murtoluku, <b>joskin syötetyn murtoluvun osoittajan on oltava kokonaisluku.</b> Jives tulkitsee 
                        esimerkiksi pistearvion <i>6,8/10</i> pisteiksi 6/10 ja pisteellä erotettua desimaalilukua <i>6.8/10</i> se ei ymmärrä lainkaan.
                    </p>
                    <p>
                        Jos käyttäjä on jo arvioinut saman levyn, Jives korvaa vanhan arvion uudella.
                    </p>
                    <p>
                        Levylle voi myös antaa pistemäärän 1-10 Jivesin arvosteluketjuun luomia reaktioita painamalla. Jätetty reaktio poistuu reagoimisen jälkeen, eli äänestäminen on näin anonyymi(hköä).
                    </p>                
                <br/>
                <h3 id="myrating">Oman arvion kysyminen</h3>
                <div className="codeSnippet">
                    <div className="codeSnippetalert">Kutsuttava albumia vastaavassa ketjussa.</div>
                    {"jives! myrating p"}
                    <div className="codeSnippetNote">Kirjoittamalla "p" komennon perään viimeisenä argumenttinä Jives kertoo arvosanan ketjussa julkisesti. Ilman p:tä Jives kertoo arvosanasi yksityisviestilä.</div></div>
                    <p>
                        Jives vastaa käyttäjälle tämän aiemmin antamalla pistemäärällä.
                    </p>
                
                <br/>
                <h3 id="score">Albumin pistekeskiarvon kysyminen</h3>
                <div className="codeSnippet">
                    <div className="codeSnippetalert">Kutsuttava albumia vastaavassa ketjussa.</div>
                    {"jives! score p"}
                    <div className="codeSnippetNote">Kirjoittamalla "p" komennon perään viimeisenä argumenttinä Jives kertoo pistekeskiarvon ketjussa julkisesti. Ilman p:tä Jives kertoo pistekeskiarvon yksityisviestilä.</div></div>
                    <p>
                        Jives vastaa albumin tämänhetkisellä arvioiden keskiarvolla.
                    </p>
                
                <br/>
                <h3 id="leaderboard">Levyraadin top 10 -leaderboardin näyttäminen</h3>
                <div className="codeSnippet">
                    {"jives! leaderboard p"}
                    <div className="codeSnippetNote">Kirjoittamalla "p" komennon perään viimeisenä argumenttinä Jives vastaa julkisella viestillä.</div></div>
                    <p>
                        Jives listaa kymmenen korkeinta pistemäärää saanutta albumia.
                    </p>
                
                {/*
                <br/><h2 id="itjustworks">Miten se toimii?</h2>
                <p>
                    Jives keskustelee toimiessaan Spotifyn API:n ja MongoDB:ssä säilytetyn tietokannan kanssa. Turhien fetchien vähentämiseksi Jives luo käynnistyessään itselleen yksinkertaistetun kopion tietokantansa sisällöstä, jonka avulla lähetettyjen kutsujen tietoja voidaan verrata tietokannan sisältöön hakematta koko tietokannan sisältöä jokaisella funktiokutsulla.
                </p>
                <p>
                    Kun Jivesille lähettää uuden albumin, se parsii viestistä Spotifyn sisäisen albumin ID:n ja pyytää Spotifyn API:sta levyn täydelliset tiedot. Tästä, suurehkosta JSONista yksinkertaistetaan botin tarpeisiin yksinkertaisempi tietue, joka sisältää levyn metadataa (Artistit, albumin nimi, julkaisuajankohta, kansitaide, tekijänoikeustiedot...) sekä listan johon albumia koskevat arviot tallentuvat.
                </p>
                <img src="https://i.imgur.com/VCv7HHY.png" alt=""></img>
                <p>
                    Kaikissa komennoissa ei luonnollisesti tarvitse hakea uutta dataa Spotifyn tietokannasta. Esimerkiksi jo tietokannassa (ja Discordissa) valmiiksi olevaa levyä arvioidessa botti vertaa vastaanotetun arvion tietoja lokaaliin tietokantaansa ja päivittää vain komennon kannalta olennaiset tiedot Mongoon.
                </p>
                <img src="https://i.imgur.com/c5NqMZG.png" alt=""></img>
                <p>
                    Albumien arvosteluja vastaanottaessaan Jives luo arvostelusta taulukon, jossa säilötään arvostelijan tiedot ja arvosana. Jives myös päivittää arvostelukomennon yhteydessä albumiobjektien juuressa olevia arvioiden määrää ja keskiarvoa kuvaavia lukuarvoja. Kun nämä tiedot tallennetaan albumitietueen juureen arvion vastaanottamisen yhteydessä, ei albumien pistekeskiarvojen selvittämiseksi tarvitse erikseen laskea keskiarvoa kaikista arvosteluobjekteista.
                </p>
                <p>
                    Vaikka pisteet syötetään Jivesille asteikolla 0-100, arviot tallennetaan tietokantaan lukuvälille 0-1000, jotta kokonaisluvuiksi pyöristettävät keskiarvot olisivat hieman tarkemmat.
                </p>
                <img src="https://i.imgur.com/AoROrrl.png" alt=""></img>

                <br/><h2 id="lahdekoodi">Lähdekoodi</h2>
                <p>
                    Mikäli haluaa kurkistaa konepellin alle joko kehitysprosessiin osallistuakseen tai ottaakseen mallia vastaavan botin ohjelmoimista varten, on Jivesin lähdekoodi tarkasteltavissa <a href="https://github.com/HankTheMachine/jives-bot">täältä</a>.
                </p>
                <p>
                    Huomautettakoon, että Discord-botin ajamisen ohella Jives tuplaa myös Henkimaailman backendinä, jota kautta levyraadin data fetchataan verkkosivulle.
                </p>
                <br/>

                
                <br/><h2 id="todo">To-do -lista</h2>
                <p>
                    Jivesia kehitellään fiiliksen ja yleisöpalautteen perusteella paremmaksi löytyvän ajan puitteissa. Tällä hetkellä suunnitteilla on seuraavia ominaisuuksia (TBA):
                    <ul>
                        <li>
                            Bandcamp -tuki (kansa janoaa Draama-Helmeä)
                        </li>
                        <li>
                            Levyjen lisääminen raatiin ajastetusti kerran tai kaksi viikossa
                        </li>
                    </ul>
                </p>

                <br/>
                */}
            </div>
        </div>
    )
}
