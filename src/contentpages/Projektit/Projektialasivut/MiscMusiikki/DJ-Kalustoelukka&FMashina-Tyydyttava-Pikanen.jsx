import { HenkimaailmaPage } from "../../../../components";
import { parseDate } from "../../../../components/functions";

export class DJKEFMTP extends HenkimaailmaPage {
    render() {
        return (
            <div>
                <iframe 
                    title="DKE&FM Tyydyttävä Pikane"
                    width="50%" 
                    height="300" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/845958271&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
                <h2>DJ KALUSTOELUKKA & F-MASHINA - TYYDYTTÄVÄ PIKAINEN</h2>
                {parseDate(new Date("2020-05-01T16:00:00Z"))}
                <p><b>Vilho Talvela</b> on rakas ystäväni ja pitkäaikainen aisaparini erinäisissä musiikki- ja muissa kulttuuritouhuissa. Pitkä kumppanuus esimerkiksi teatterimuusikkoina ja humpansoittajina huomioiden on ironista, että yhteisistä, "taiteellisesti antoisammista" musiikkiprojekteista juuri mitään ei ole jalostettu nauhoituksiin asti. Kuvioihin ovat astuneet milloin taiteelliset erimielisyydet, milloin bändikavereiden isyyslomat.</p>
                <p>
                Kevät 2020 oli itselleni kaoottinen, mutta aikaa sattui löytymään täydellisesti juuri kun Vilho pyysi minua parantelemaan ja miksaamaan erästä irtonaista tanssibiisiään. Suomisaundijytä oli täyskäännös silloin työstämiini pastissisovituksiin ja erääseen ambient-projektiin, ja "Tyydyttävän Pikaisen" sykkivät acid-syntikat, pornosämplet ja töykeä tasapoljento ovat liimautuneet aivoihini erottamattomasti tuon kevään äänimaisemana.
                </p>
                <p>
                Vilho halusi kreditoida minut kappaleen co-producerina, vaikka osani itse tuotantoon oli sanalla sanoen vähäinen. Tuntuikin rehellisimmältä kirjata itseni tähän kappaleeseen vain mahdollisimman typerällä pseudonyymillä. Tämä on todennäköisesti <b>NUSSIMISKONE F-MASHINAN</b> ensimmäinen ja viimeinen biisi.
                </p>
            </div>
        )
    }
}