/*
import React from 'react';
import './App.css';
//TEST
import {
  Header,
  FinalFooter,
  SomeLinkkiLaja,
  KontsaFetcher
}  from './components';

import {CurrentTab} from './components/functions.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: props.currentPage,
        showPosts: [
          "Musiikki",
          "YouTube",
          "Muut",
          "Peliarviot",
          "Meta",
          "Ohjelmointi",
          "Musiikkitiede",
          "Teatteri",
          "Koulu"
        ],
        levyRaatiData: [],
      }
    
    console.log('App constructaa')
    }
      

  asetaShowPosts= (asetettavasivu) => {
    return () => {
      this.setState({showPosts : asetettavasivu})
      console.log('state vaihdettu')
    }
  }

  componentDidMount = () => {
    console.log('App mounttasi')  
    /*

    let htmlUrl;
    if (CurrentTab()==="etusivu"){htmlUrl = "https://raw.githubusercontent.com/HankTheMachine/Henkimaailma-contents/main/etusivu.html";}
      else {htmlUrl = "https://raw.githubusercontent.com/HankTheMachine/Henkimaailma-contents/main/"+CurrentTab()+'.html';}
    
      axios
      .get(htmlUrl)
      .then(res => {
        console.log('haetaan sisalto serverilta')
        var parser = new DOMParser();
        var doc = parser.parseFromString(res.data, "text/html");
        console.log(doc)
        var docArticle = doc.querySelector('.sisalto').innerHTML;
        document.getElementById("sivusisalto").innerHTML = docArticle;
      })

    */
  }

  

  render() {
    console.log('App renderöi, currentPage on',CurrentTab()) 

    return (
        <div className="App">
          <div className="Master-container">
            <Header/>
            <div id="Kontsabox-ja-navbar">
              <div className="MainContainer">
              <div className = "Kontsa">
                  <KontsaFetcher state={this.state} asetaShowPosts={this.asetaShowPosts}/>
                  {/* NÄIDEN PÖKÄLEIDEN VÄISSÄ OLEVA HTML LISÄYTYY SIVULLE */}
                      {/*{haeSisalto(CurrentTab())}*/}
                      <div id="sivusisalto"></div>
                  {/* NÄIDEN PÖKÄLEIDEN VÄISSÄ OLEVA HTML LISÄYTYY SIVULLE */}
              </div>
              <SomeLinkkiLaja></SomeLinkkiLaja>
              </div>
            </div> {/* End of kontsabox-ja-navbar */}
          </div> {/* End of Master-container */}
        <FinalFooter></FinalFooter>  
        </div>
    )}
}

export default App;

*/
