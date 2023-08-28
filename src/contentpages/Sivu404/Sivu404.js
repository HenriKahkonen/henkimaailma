import './Sivu404.css'
import React from 'react';

class Sivu404 extends React.Component  {
    
    render() {
        return (
        <div className="KontentBox">
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