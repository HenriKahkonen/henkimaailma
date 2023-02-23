import { HenkimaailmaPage } from "../../components";
import './CV.css'

class CV extends HenkimaailmaPage {

    render() {
        return (
            <div className="sisalto">
                <img className="sidePic" src='https://i.imgur.com/e1054Ls.jpg' alt="Henri Kähkönen"></img>
                <h1>Sivun kirjoittajasta</h1>
                <p>
                    Minä olen <b>Henri Kähkönen</b>: musiikkitieteilijä, muusikko, ja yleinen taiteen ja viihteen ymmärtäjä.
                </p>
                <p>
                    Kulttuurimaailma on ollut monilla tapaa osa minua koko aikuiselämäni ajan, mutta ajoittaisesta musiikkitouhuilusta huolimatta minulle ei koskaan ole kehittynyt varsinaista taiteilijaidentiteettiä. Minulla ei myöskään ole harhakuvitelmia omasta erityisyydestäni taiteen analysoijana tai asiantuntijana - sitä vastoin mitä enemmän aikaa vietän aihepiirin parissa sitä vähemmän tunnen tietäväni mistään mitään.
                </p>
                <p>
                    Kulttuurin tuotanto tai analyysi ei lähtökohtaisesti vaadi ihmiseltä mitään erityisominaisuuksia. Suuri osa valtavirran kulttuurikeskustelusta tapahtuu kuitenkin pienen taideasiantuntijoiden joukon ehdoilla. Menemättä taideasiantuntijuuden tai taiteilijuuden mytologisointiin tämä kulttuurikeskustelun vallan keskittyminen ei ole täysin huono asia: on ehdottomasti hyvä, että osa ihmisistä voi omistaa itsensä sen kritiikille ja analyysille. Taidekritiikin ja analyysin oletetusta hyödyllisyydestä riippumatta se on ainoa asia, joka minuakin on aina vilpittömästi kiinnostanut, ja saatan itsekin positioitua osin tahtomattani tähän rajattuun taide-elitistien joukkoon. 
                </p>
                <p>
                    Taide ja viihde ovat kuitenkin siitä ambivalentteja kategorioita, että kuka tahansa voi kokea kulttuurituotteita ja arvottaa niitä mieltymystensä mukaan - samoin taidetta voi luoda kuka tahansa. Tämä sivusto on minun tilani olla <i>se kuka tahansa</i>.
                </p>
            <br/>
            <div className="cv">
                <h2>Curriculum Vitae</h2>
                <h3>Henri Kähkönen</h3>
                <div className="cvSection">
                    <h4>Koulutus</h4>
                    <div className="KouluItem">
                        <div className="kouluyr">2023</div>
                        <div className="kouludat">
                            <b>Filosofian maisteri</b>, <i>Turun yliopisto, Musiikkitiede</i><br/>
                            Sivuaine: Tietojenkäsittelytiede
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2019</div>
                        <div className="kouludat">
                            <b>Humanististen tieteiden kandidaatti</b>, <i>Turun yliopisto, Musiikkitiede</i><br/>
                            Sivuaine: Mediatutkimus
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2012-2015</div>
                        <div className="kouludat">
                            <b>Kasvatustieteiden ylioppilas</b>, <i>Oulun yliopisto, Musiikkikasvatus</i>
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2012</div>
                        <div className="kouludat">
                            <b>Musiikin perustutkinto</b>, <i>Oulun konservatorio, Pop/Jazz -linja</i>
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2009</div>
                        <div className="kouludat">
                            <b>Ylioppilastutkinto</b>, <i>Madetojan musiikkilukio</i>
                        </div> 
                    </div>
                    <h4>Kokemus</h4>
                    <div className="KouluItem">
                        <div className="kouluyr">2019-2022</div>
                        <div className="kouludat">
                            <b>Valo-/äänimies</b>, <i>Linnateatteri yhdistys ry</i><br/>
                            Valo- ja äänisuunnittelu, näytösten ajaminen, kiertueet
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2017-2019</div>
                        <div className="kouludat">
                            <b>Vuokratyöntekijä</b>, <i>VMP</i><br/>
                            Varastotyöntekijä, siivooja
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2015</div>
                        <div className="kouludat">
                            <b>Musiikinopettaja</b>, <i>Mannerheimin lastensuojeluliitto</i><br/>
                            Muskarin setä
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2014-2015</div>
                        <div className="kouludat">
                            <b>Siviilipalvelusmies</b>, <i>Lintulammen asukasyhdistys ry</i><br/>
                            Työtä lasten, eläkeläisten ja vammaisasiakkaiden parissa. Musiikkileikkikoulun pitoa 0-6 vuotiaiden lasten ryhmille.
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2014</div>
                        <div className="kouludat">
                            <b>Muusikko</b>, <i>Oulun Yliopisto, Eudaimonia -seminaarisarja</i><br/>
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2011</div>
                        <div className="kouludat">
                            <b>Myyntineuvottelija</b>, <i>Novia Oy</i><br/>
                            Puhelinmyynti
                        </div> 
                    </div>

                    <h4>Muu kokemus ja vastuutehtävät</h4>
                    <div className="KouluItem">
                        <div className="kouluyr">2021-2022</div>
                        <div className="kouludat">
                            <b>Tuotantovastaava, rahastonhoitaja</b>, <i>Turun Wappuradio ry</i><br/>
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2018-2019</div>
                        <div className="kouludat">
                            <b>Sisällöntuottaja, perustaja</b>, <i>Ympyrat.net</i><br/>
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2018-2019</div>
                        <div className="kouludat">
                            <b>Äänimies: "Suden Nälkä"</b>, <i>Jo-jo -Teatteri</i><br/>
                        </div> 
                    </div>
                    <div className="KouluItem">
                        <div className="kouluyr">2016-2019</div>
                        <div className="kouludat">
                            <b>Stage manager</b>, <i>H2Ö- ja Ilmiö -festivaalit</i><br/>
                        </div> 
                    </div>

                    <h4>Kielitaito</h4>
                    <div className="kielitaitobox">
                        <div className="kielitaitoItem"><b>Suomi</b>: äidinkieli</div>
                        <div className="kielitaitoItem"><b>Englanti</b>: erinomainen</div>
                        <div className="kielitaitoItem"><b>Ruotsi</b>: tyydyttävä</div>
                        <div className="kielitaitoItem"><b>Saksa</b>: alkeet</div>
                    </div>

                    <h4>Tietotekniset taidot</h4>
                    <div className="skillsSection">
                        <div className="skillCat">Adobe</div>
                        <div>Photoshop, Premiere, After Effects</div>
                    </div>
                    <div className="skillsSection">
                        <div className="skillCat">Musiikki- ja esitysteknologia</div>
                        <div>Ableton Live Suite, Reaper, Audacity, Logic Pro, Sibelius 7, MuseScore 4, Guitar Pro 7, Qlab 4</div>
                    </div>
                    <div className="skillsSection">
                        <div className="skillCat">Ohjelmointi</div>
                        <div>JavaScript, Java, Python, React, Git, MongoDb, fly.io, Node</div>
                    </div>
                    <div className="skillsSection">
                        <div className="skillCat">Office</div>
                        <div>Word-Excel, Powerpoint, Notes, Teams</div>
                    </div>

                    <h4>Muuta</h4>
                    <ul>
                        <li>
                            B-ajokortti
                        </li>
                        <li>
                            Järjestyksenvalvojakortti (voimassa -2027)
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        )
    }    
}

export default CV;