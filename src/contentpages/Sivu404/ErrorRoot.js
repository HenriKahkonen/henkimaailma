import { HenkimaailmaPage } from "../../components";
import './Sivu404.css'

import '../../App.css'

import 
    {
      Header,
      NavigationColumn,
      SomeLinkkiLaja,
      FinalFooter,
    } from "../../components";

class ErrorRoot extends HenkimaailmaPage {
    
    render() {
        return (
            <div className="App">
            <div className="Master-container">
              <Header/>
              <div id="Kontsabox-ja-navbar">
                <NavigationColumn/>
                <div className="MainContainer">
                    <div className="Kontsa">
                            <h1>404</h1>
                            <div>
                                <p>
                                    Jokin meni vikaan yrittäessäsi mennä osoitteeseen {window.location.pathname}.
                                </p>
                    </div>
                </div>
                <SomeLinkkiLaja/>
              </div> 
            </div>
          <FinalFooter/> 
          </div>

        </div>
        )
        }
}

export default ErrorRoot;