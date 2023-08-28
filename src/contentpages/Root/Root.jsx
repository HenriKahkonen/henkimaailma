import '../../App.css'

import 
    {
      Outlet,
    } from "react-router-dom";

import 
    {
      Header,
      SomeLinkkiLaja as Footer,
    } from "../../components";


export function Root() {
    return (
        <div className="App">
          <div className="MainContainer">
            <Header/>
              <Outlet/>
            <Footer/>
          </div>
        </div>
    );
}
