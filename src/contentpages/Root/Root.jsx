import '../../App.css'

import 
    {
        Outlet,
    } from "react-router-dom";

import 
    {
      Header,
      NavigationColumn,
      SomeLinkkiLaja,
      FinalFooter,
    } from "../../components";

export function Root() {
    return (
        <div className="App">
          <div className="Master-container">
            <Header/>
            <div id="Kontsabox-ja-navbar">
              <NavigationColumn/>
              <div className="MainContainer">
                  <div className="Kontsa">
                    <Outlet/>
                  </div>
              <SomeLinkkiLaja/>
              </div>
            </div> 
          </div>
        <FinalFooter/> 
        </div>
    );
}
