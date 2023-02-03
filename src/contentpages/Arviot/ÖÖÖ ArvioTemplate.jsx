import { HenkimaailmaPage } from "../../../components";
import "./Arviot.css"

class Arviosi extends HenkimaailmaPage {
    img = "URLISI"
    rating = 100 //arvosana 0-100
    
    render() {
        return (
            <>
                <div className="arvioAlbumArtLarge">
                    <img src={img}/>
                </div>

                <p>
                    Text
                </p>
            </>
        )
    }
}

export default Arviosi