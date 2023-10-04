import './CV.css'
import { NavLink } from 'react-router-dom';

function CV()  {
    return(
        <div className="KontentBox">
        
            <div className="KontentBoxSubNav">
                    <NavLink to="/meta">
                        <div className="KBSubNav"><h1>changelog</h1></div> 
                    </NavLink>
                    <NavLink to="/meta/yhteys"> 
                        <div className="KBSubNav"><h1>yhteys</h1></div>
                    </NavLink>
                    <NavLink to="/meta/cv"> 
                    <div className="KBSubNavActive"><h1>cv</h1></div>
                    </NavLink>
                </div>                

            <div className="cv">
                <img className="sidePic" src='https://i.imgur.com/e1054Ls.jpg' alt="Henri Kähkönen"></img>
                    <h2>Curriculum Vitae</h2>
                    <h3>Henri Kähkönen</h3>
                    <div className="cvSection">
                        <h4>Koulutus</h4>
                        <div className="KouluItem">
                            <div className="kouluyr">2023</div>
                            <div className="kouludat">
                                <b>Filosofian maisteri</b>, <i>Turun yliopisto, Musiikkitiede</i><br/>
                                Pro Gradu: <a href="https://www.utupub.fi/handle/10024/153797">Musiikkisisällöntuottajat ja YouTuben affordanssit</a><br/>
                                Sivuaine: Tietojenkäsittelytiede, aineopintojen kokonaisuus
                            </div> 
                        </div>
                        <div className="KouluItem">
                            <div className="kouluyr">2019</div>
                            <div className="kouludat">
                                <b>Humanististen tieteiden kandidaatti</b>, <i>Turun yliopisto, Musiikkitiede</i><br/>
                                Sivuaine: Mediatutkimus, aineopintojen kokonaisuus
                            </div> 
                        </div>
                        <div className="KouluItem">
                            <div className="kouluyr">2012-2015</div>
                            <div className="kouludat">
                                <b>Kasvatustieteiden ylioppilas</b>, <i>Oulun yliopisto, Musiikkikasvatus</i>
                            </div> 
                        </div>
                        <div className="KouluItem">
                            <div className="kouluyr">2013</div>
                            <div className="kouludat">
                                <b>Musiikin perustutkinto</b>, <i>Oulun konservatorio, Pop/Jazz -linja</i>
                            </div> 
                        </div>
                        <div className="KouluItem">
                            <div className="kouluyr">2012</div>
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
                        {/*<div className="KouluItem">
                            <div className="kouluyr">2017-2019</div>
                            <div className="kouludat">
                                <b>Vuokratyöntekijä</b>, <i>VMP</i><br/>
                                Varastotyöntekijä, siivooja
                            </div> 
                        </div>*/}
                        <div className="KouluItem">
                            <div className="kouluyr">2015</div>
                            <div className="kouludat">
                                <b>Musiikinopettaja</b>, <i>Mannerheimin lastensuojeluliitto</i><br/>
                                Opetusmateriaalien laatiminen, oppituntien suunnittelu ja toteutus. 0-6 -vuotiaiden lasten musiikkileikkikouluryhmät.
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

                        {/*<div className="KouluItem">
                            <div className="kouluyr">2011</div>
                            <div className="kouludat">
                                <b>Myyntineuvottelija</b>, <i>Novia Oy</i><br/>
                                Puhelinmyynti
                            </div> 
                        </div>*/}

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
                            <div className="kouluyr">2018-2019</div>
                            <div className="kouludat">
                                <b>Sihteeri</b>, <i>Musiikkitieteilijöiden ainejärjestö Tritonus ry</i><br/>
                            </div> 
                        </div>
                        <div className="KouluItem">
                            <div className="kouluyr">2016-2019</div>
                            <div className="kouludat">
                                <b>Stage manager</b>, <i>H2Ö- ja Ilmiö -festivaalit</i><br/>
                            </div> 
                        </div>
                        <div className="KouluItem">
                            <div className="kouluyr">2017-2018</div>
                            <div className="kouludat">
                                <b>Musiikkivastaava</b>, <i>Turkulainen Humanistispeksi</i><br/>
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

export default CV;