import './Sivu404.css'
import '../../App.css'

import React from 'react';

import 
    {
      Header,
      SomeLinkkiLaja as Footer,
    } from "../../components";

class ErrorRoot extends React.Component {
    
    render() {
        return (
            <div className="App">
              <div className="Master-container">
                <Header/>
                <div className="KontentBox">
                  <h1>404</h1>
                    <div>
                        <p>
                          Jokin meni vikaan yrittäessäsi mennä osoitteeseen {window.location.pathname}.
                        </p>
                    </div>
                </div>
                <Footer/>
              </div>
            </div>
        ) 
    }
}

export default ErrorRoot;