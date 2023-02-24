import { HenkimaailmaPage } from "../../../../components";
import { parseDate } from "../../../../components/functions";

export class HTMTheSpaceRace extends HenkimaailmaPage {
    render() {
        return (
            <div>
                <iframe
                title="Soundcloud The Space Race"
                width="50%"
                height="300"
                frameborder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1165178170&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
                <h2>Soundcloud-turauttelusta</h2>
                <p>
                    Tämä alun perin <a href="https://www.youtube.com/watch?v=iFO8hB0Cg9w&t">YouTube-videon</a> taustamusiikiksi tuotettu raita alkoi kasvaa käyttötarkoitustaan kunnianhimoisemmaksi, ja kiinnyinkin raidalla tekemiini valintoihini niin, että päätin tavoilleni epätavallisesti tösäyttää  kappaleen myös Soundcloudiini. Tämmöisellä <b>Mitch Murderiin</b> päin kumartelevalla syntikkakellunnalla ei tosin ole juurikaan tekemistä minkään muiden musiikillisten ambitioideni kanssa, ja albumikokonaisuuksia arvostavana ihmisenä irtonaisten kappaleiden julkistaminen tuntuu edelleen hieman kiusalliselta. 
                </p> 
                <p>
                    Niin hankalalta kuin musiikillisten pikkupurtavien julkistaminen itsestäni tuntuukin, on tässä asenteessani myös ideologinen kasvun paikka. On toki ehdottomasti hyvä, että paljon jokaisen musiikintekijän tuotannosta jää pöytälaatikoihin ja kansiohierarkioiden uumeniin: taidetta pitäisi saada tehdä myös vain itselleen, ja joidenkin töiden arvo on etupäässä niissä opituissa taidoissa joita soveltaa taiteellisesti eheämmissä kokonaisuuksissa. Toisaalta irtojulkaisujen kategorinen dumaaminen sotii luovuuden rohkaisemisen aksioomaani vastaan: miksei taiteilija voisi sanoa sanottavansa yhdessä tai kahdessa kappaleessa - etenkin, kun liian pitkältä ja toisteiselta tuntuva albumi tuntuu yhtä lailla vastenmieliseltä? Mitä muutakaan <b>Soundcloudin</b> pitäisi tuutata, ellei sitten tällaisia musiikillisia irtoajatuksia?
                </p>
                <p>
                    Tämän raidan julkistaminen vaati myös jonkinlaisen järkevän nettipseudonyymin vakiinnuttamista. Kappaleen jälkeen olen toimittanut asioitani englanninkielisessä internetissä <b>HenKonen</b> (<u>Hen</u>ri Käh<u>könen</u>) -nickin tökeröllä käännöksellä <b>Hank The Machine</b>.
                </p>
                <h2>HTM - The Space Race</h2>
                {parseDate(new Date("2021-11-01T16:00:00Z"))}
                <p>
                    <b>Space Racen </b>ydinajatus oli sitoa ilmava syntikkapulputus harvaan konerumpurytmiin, joka kelluisi 3/4 - ja 4/4 -tahtilajien välillä kiinnittämättä metrisiin modulaatioihinsa huomiota. Atmosfäärisen kellunta kulminoituisi C-osaan, jossa rytmiikka hajoaa, tempo laskee ja syntikkamaton perkussiivisen rytmittämisen sijaan huomio kiinnittyisi vieraalta (alien) kuulostavaan puheeseen. Jo yksipuolinen kielitaito saa minut identifioitumaan avaruuskilvan osapuolista lähemmin Yhdysvaltoihin, jolloin avaruuden vierautta edustamaan päätyi erilaisista Kuulaskeutumista, <b>Sputnkikia</b> tai kosmonauttikoira <b>Laikaa</b> käsittelevistä venäjänkielisistä uutisista editoidut puheraidat. Jos joku venäjäntaitoinen haluaa litteroida minulle, mitä raidalla oikeasti sanotaan, olen kiinnostunut kuulemaan mitä lausumia olen mennyt musiikissani käyttämään.
                </p>
                <p>
                    Eräs arvostamani musiikintekijä sanoi kerran tästä kappaleesta sen kuulostavan siltä, kuin <b>Donkey Kongissa</b> olisi avaruuskenttä. Minun mielestäni se on ilahduttavasti sanottu.
                </p>
            </div>
        )
    }
}
