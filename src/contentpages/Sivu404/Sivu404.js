import { HenkimaailmaPage } from "../../components";
import './Sivu404.css'

class Sivu404 extends HenkimaailmaPage {
    
    render() {
        return (
        <div className="sisalto">
            <h1>404</h1>
            <div>
                <p>
                    Oletkohan eksynyt? Sivua {window.location.pathname} ei taida olla olemassa.
                </p>
            </div>
        </div>
        )
        }
}

export default Sivu404;