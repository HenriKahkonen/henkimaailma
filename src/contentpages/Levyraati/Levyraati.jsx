import { NavLink, useLoaderData } from "react-router-dom";
import "./Levyraati.css";
import {percRatingImgs } from "../../components/functions";
import React from "react";
import HenkimaailmaPage from "../../components/HenkimaailmaPage";


class LevyRaatiPage extends HenkimaailmaPage {
    constructor(props) {
        super(props)
        this.state= {
            lrData: this.props.lrData,
            levyraatiPage : 1,
            albumsperPage : 50
        }
    }

    lrNextPage=() => {
        const oldPage=this.state.levyraatiPage
        return()=>{
            //console.log("Kliks seuraava sivu")
            this.setState({levyraatiPage:(oldPage+1)})
        }
    }
    lrLastPage= () => {
        const oldPage=this.state.levyraatiPage
        return() =>{
            //console.log("kliks edellinen sivu")
            this.setState({levyraatiPage:(oldPage-1)})
        }
    }
    lrNavThing =(buttonName, buttonText)=> {
        const idScript = "lrnav-"+buttonName;
        const totalAlbumsCount = this.state.lrData.length
        const totalPages = (Math.ceil(totalAlbumsCount/this.state.albumsperPage))

        if (buttonName==="last") {
            if (!(this.state.levyraatiPage===1)) {
                return (
                    <button
                        className="navbutton"
                        id={idScript}
                        onClick={this.lrLastPage()}>
                        {buttonText}
                    </button>
                )
            } else return (<div className="lastbuttonlr"></div>)
        }
        if (buttonName==="next") {
            if (this.state.levyraatiPage<totalPages) {
                return (
                    <button
                        className="navbutton"
                        id={idScript}
                        onClick={this.lrNextPage()}>
                        {buttonText}
                    </button>
                )
            } else return (<div className="nextbuttonlr">{" "}</div>)
        }
    }

    render() {
        const levyraatiData = [...this.state.lrData]
        .filter(function (l) {
            return (
                l[6]>0 // filter out albums that are submitted but whose total score is 0 (meaning they haven't been rated yet)
            )})

        const albumsOnPage = this.state.albumsperPage
        let leaderboard = [...levyraatiData].splice((this.state.levyraatiPage-1)*albumsOnPage,albumsOnPage)

        return (
            <div className="KontentBox">
                <div className="KontentBoxSubNav">
                    <NavLink to="/levyraati">
                        <div className="KBSubNavActive"><h1>tulokset</h1></div> 
                    </NavLink>
                    <NavLink to="/levyraati/docs"> 
                        <div className="KBSubNav"><h1>dokumentaatio</h1></div>
                    </NavLink>
                    <NavLink to="/levyraati/tietosuoja"> 
                    <div className="KBSubNav"><h1>tietosuojalauseke</h1></div>
                    </NavLink>
                </div>   

                
                <div id="levyArvioLeaderboard">    

                    <div className="blrlbHeaderFooter">
                        <div id="leaderboardNavigation">
                            <div className="navButtonSpacer">{this.lrNavThing("last","Edelliset")}</div>
                            <div className="navTexts">
                                Näytetään<br/>
                                {levyraatiData.indexOf(leaderboard[0])+1}{" - "} 
                                {levyraatiData.indexOf(leaderboard[(leaderboard.length)-1])+1}
                                {" / "}{levyraatiData.length}
                            </div>
                            <div className="navButtonSpacer">{this.lrNavThing("next","Seuraavat")}</div>
                        </div>
                    </div>

                    {leaderboard.map(item => 
                        <div className="blrlb-Item" key={item[2]}>  
                            
                            

                            <div className="blrlb-artandNo">
                                <div> <img src={item[2]} alt=""></img> {/*Kansikuva*/} </div>
                                <div className="blrlb-orderNo">{"#"+(levyraatiData.indexOf(item)+1)}:</div>
                            </div>
                                <div className="blrlb-item-databox">
                                    <div className="blrlb-titlebox">
                                        <div>
                                            <a href={"https://discord.com/channels/1031479962005409802/1070620790816510003/threads/"+item[7]}> <b>{item[0]}</b>
                                            <br/>{item[1]} ({item[3].slice(0,4)})</a>
                                        </div>

                                        <div className = "ratingContainer">
                                            <div className="ratingperc">
                                                {percRatingImgs(item[5]).map(imgsrc =>
                                                    <div className="ratingDigit">
                                                        <img src={imgsrc} alt="Number"></img>
                                                    </div>
                                                )}
                                            </div>
                                            ({item[6]})
                                        </div>

                                        {/*<div className="blrlb-ratingPic">
                                            <img src={getRatingPngFromRating(item[5])} alt={(item[5]/10)+" pistettä"}></img>
                                            ({item[5]/10}) ({item[6]})
                                        </div>*/}
                                    </div>
                                    
                                    <div className="blrlbCopyright">{item[4][0].text}</div>
                                </div>
                        </div>

                    )}
                    

                    <div className="blrlbHeaderFooter">
                        <div id="leaderboardNavigation">
                            <div className="navButtonSpacer">{this.lrNavThing("last","Edelliset")}</div>
                            <div className="navTexts">
                                Näytetään<br/>
                                {levyraatiData.indexOf(leaderboard[0])+1}{" - "} 
                                {levyraatiData.indexOf(leaderboard[(leaderboard.length)-1])+1}
                                {" / "}{levyraatiData.length}
                            </div>
                            <div className="navButtonSpacer">{this.lrNavThing("next","Seuraavat")}</div>
                        </div>
                    </div>

                </div> 
                   

            </div>
        )
    }
}




export function Levyraati() {
    const {lrData} = useLoaderData();
    return <LevyRaatiPage lrData={lrData}/>
}
