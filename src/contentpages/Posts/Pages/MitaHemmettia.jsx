import React from "react";

export function MitaHemmettia() {
    return (
        <>
            <div className="quoteBox">
                "Kyllä se on niin, että kun työtön mies alkaa vähän ohjelmoimaan, niin ei siinä hienhajuiselta manialta yksinkertaisesti voi välttyä!"
                <div className="quoteBoxInfo">
                    - <b>Mauno Koivisto</b>, varmaan
                </div>
            </div>
            <p>
            Kyllä, minulla on nyt kotisivut!
            </p>
            <p>
            Suoritin osana maisterintutkintoani tietojenkäsittelytieteen sivuaineen, jossa kastoin varpaani Fullstack-ohjelmointiin aihepiiriä käsittelevällä kurssilla. Koronasulun ensimmäinen kevät, jonka aikana kurssia suoritin, onnistui maailman pysähtyneisyydestä huolimatta olemaan minulle erittäin hektinen, ja raavin kurssille sen läpäisemiseen hyväksyttävän suorituksen viimeisillä voimillani.
            </p>
            <p>
            Aihepiirin jättämän pahan maun huuhtoutumiseen meni puolitoista vuotta, ja viime syksynä aloin taas innostua ohjelmoimisesta. Eri sosiaaliset mediat tuntuivat meiningiltään ankeilta, ja mielessäni pyöri internetin viattomampi aika, jolloin FaceBookiin ja Twitteriin automaattisen ajautumisen sijaan surffailtiin <a href="www.lintukoto.net">Lintukodon</a> ja <a href="www.jonneweb.net">Jonnewebin</a> kaltaisilla saiteilla. Pohdin, osaisinko itse tehdä jotain samanlaista. Tylsyys ja inspiraatio sekoittuivat sopivassa suhteessa ja päätin, että hemmetti, minä teen itselleni kotisivut!
            </p>
            <p>
                <i>Kuinka vaikeaa se muka voisi olla?</i>
            </p>
            <p>
            Hahmottelin ominaisuuksia ja toiminnallisuuksia, joita haluaisin sivustolla olevan:
            <ul>
                <li>Kompakti etusivu, jolla olisi summaus sivun keskeisestä sisällöstä</li>
                <li>Erilaisista luovista projekteista koottu järjestelty lista, jota voin päivittää sikäli kun keksin tehdä jotakin uutta</li>
                <li>Discord-botti, joka fasilitoi levyarvosteluja ja synkronoi tuloksensa nettisivulle</li>
                <li>Tila tuulettaa mielipiteitäni musiikista / muista kulttuuriobjekteista</li>
                <li>Blogi, jossa sössöttää</li>
                <li>Vapaus muokata näiden sivujen presentaatiota sivukohtaisesti</li>
            </ul>
            </p>
            <p>
                Nämä ominaisuudet alkavat olla valmiina, ja sivu alkaa jo näyttää minulta. Jos yllä listatut asiat kiinnostavat, voi niitä käsittelevää sisältöä löytää nyt tämän sivuston kätköistä.
            </p>
            <p>
                Saitin suhteellisesta yksinkertaisuudesta huolimatta sen pieraiseminen maailmaan ei ollut ihan vaivaton projekti. Kehitin nettisivuprojektin aikana "perse edellä puuhun" -tekniikan sen luonnolliseen huippuunsa: lueskelin taannoisen kurssin oppimateriaaleja niin kärsivällisesti kuin ADD-aivoiltani kykenin ja karkasin mahdollisimman usein soveltamaan oppimaani sivua koodaamalla. Säännöllisin väliajoin huomasin jonkun sivun ominaisuuden vaativan sivun purkamista osiin ja rakentamista uudelleen.
            </p>
            <p>
                Kaikkine vaikeuksineen suhtauduin sivun askartelemiseen haasteena ja luovana kanavana siinä missä sen sisällötkin. Esimerkiksi sivun taustakuvan ja blogiotsikkokuvien laatiminen tarjosi pitkästä aikaa syyn piirtää, ja sivun ulkonäköön liittyvien valintojen tekeminen oli innostavaa. Esimerkiksi Annalta joululahjaksi saamani DYMO-tarrakirjoitin pääsi hyvään käyttöön navigaatiopalkissa.
            </p>

            <div className="Prose-ImgDiv">
                <img 
                src="https://i.imgur.com/A2krucT.jpg"
                width="50%"
                alt="Sivupalkin kuvat ovat skannattuja DYMO-tarrakirjoittimen tarroja."></img>
                <div className="kuvateksti">Sivupalkin kuvat ovat skannattuja DYMO-tarrakirjoittimen tarroja.</div>
            </div>

            <p>
                Kaikkinensa sivu tuntui tarjoavan jatkuvasti mahdollisuuksia päästä leikkimään kuvankäsittelyllä design-ratkaisuja pohtiessa - puhumattakaan siitä miten mukavaa on kirjoittaa huvikseen ja omilla ehdoillaan pitkittyneen yliopistovaiheen jälkeen.  
            </p>
            <p>
                En varsinaisesti odota, että edes lähipiirini tarkastelisi kuulumisiani säännöllisesti tällä sivustolla. Saitin olemassaolo vain minun ehdoillani materialisoituvana internetin palasena tuottaa minulle kuitenkin kummallista lohtua. Tämä on minun nurkkani internetissä.
            </p>
            <p>
                Valtava kiitos Henkimaailman syntymisestä kuuluu Turun Wappuradion <a href="https://www.linkedin.com/in/konsta-purtsi/"><b>Konsta Purtsille</b> (LinkedIn)</a>, jolta kerjäsin ilmaista konsultaatiota vastineeksi viime toimikauden työstäni radion parissa. Konsta osasi töniä minua projektin aikana oikeaan suuntaan ja tunnisti usein korkean tason syyt, miksi koodi ei toimi, ja miksi sen toimimattomuus käy loppujen lopuksi järkeen. Konstan avulla pääsin pois umpikujista ilman, että hänen tarvitsi tulla kirjoittamaan koodia puolestani. 
            </p>
            <p>
                Eli jotakuinkin tämmöistä minulle on viime kuukausina kuulunut.
            </p>
            <p> Sivusto on nyt tässä, ja toivon hartaasti sen olevan toimintakuntoinen vielä kun se deployataan. Toivottavasti viihdyt!
            </p>
        </>
        )
}