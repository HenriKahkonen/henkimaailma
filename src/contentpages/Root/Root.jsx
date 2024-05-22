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

          {/***/}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8701862352371545"
          crossorigin="anonymous"></script>
          
          <div className="MainContainer">
            <Header/>
              <Outlet/>
            <Footer/>
          </div>
        </div>
    );
}
