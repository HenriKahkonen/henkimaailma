import '../../App.css'

import 
    {
        Outlet,
    } from "react-router-dom";

import 
    {
      Header,
      NavigationColumn,
      NavigationBar,
      SomeLinkkiLaja,
      FinalFooter,
    } from "../../components";

export function Root() {
    return (
        <div className="App">
          <div className="Master-container">
              <NavigationColumn/> {/*Ei näytetä kännykällä&tabletilla*/}
              <div className="MainContainer">
                <Header/>
                <NavigationBar/> {/*Ei näytetä PC:llä*/}
                  <div className="Kontsa">
                    <Outlet/>
                  </div>
                <SomeLinkkiLaja/>
              </div>
          </div>
        <FinalFooter/> 
        </div>
    );
}
