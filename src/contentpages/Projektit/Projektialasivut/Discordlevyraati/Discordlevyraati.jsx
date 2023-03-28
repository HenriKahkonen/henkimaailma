import { NavLink, useLoaderData } from "react-router-dom";
import "./discordlevyraati.css";
import { getRatingPngFromRating } from "../../../../components/functions";
import { HenkimaailmaPage } from "../../../../components";

export function LevyRaatiBigLeaderboardBuilder(leaderb,page) {
    if(leaderb[0]===undefined) {
        return }
    //Kopio juuren listasta
    //const totalAlbumsCount = leaderb.length
    let leaderboard = [...leaderb].splice((page-1)*20,20)
    return (       
        <div id="levyArvioLeaderboard">        
            <div id="blrlbHeader">Discord-levyraati: kaikki tulokset</div>
            <div id="leaderboardNavigation">
                
            </div>
            {leaderboard.map(item => 
                <div className="blrlb-Item" key={item[2]}>
                    <div className="blrlb-ranking">
                        {"#"+(leaderb.indexOf(item)+1)}
                    </div>    
                    <img src={item[2]} alt=""></img>
                    <div className="blrlb-item-databox">
                        <b>{item[0]}</b>
                        {item[1]} ({item[3].slice(0,4)})
                        <div className="blrlbCopyright">{item[4][0].text}</div>
                    </div>
                    <div className="blrlbRatingBox">
                        <img src={getRatingPngFromRating(item[5])} alt={(item[5]/10)+" pistettä"}></img>
                        <div className="blrlbrn">
                            ({item[5]/10}) ({item[6]})
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export function DiscordLevyRaati() {
    const {lrData} = useLoaderData();
    return <DiscordLevyRaatiPage lrData={lrData}/>
}
/*
export function DiscordLevyRaati() {
    const {lrData} = useLoaderData();
    const levyraatiData = [...lrData]
    return (
        <div>
            <h1><NavLink to="/projektit">Proggikset</NavLink> / Discord-levyraati</h1>
            {LevyRaatiBigLeaderboardBuilder(levyraatiData)}
        </div>
    )
}
*/

class DiscordLevyRaatiPage extends HenkimaailmaPage {
    constructor(props) {
        super(props)
        this.state= {
            lrData: this.props.lrData,
            levyraatiPage : 1
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
        const totalPages = (Math.ceil(totalAlbumsCount/20))
        //console.log("Totaalisivut: "+totalPages)
        if (buttonName==="last") {
            if (!(this.state.levyraatiPage===1)) {
                return (
                    <button
                        className="lastbuttonlr"
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
                        className="nextbuttonlr"
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
                l[6]>0
            )})



        //const totalAlbumsCount = levyraatiData.length
        //const totalPages = Math.ceil(totalAlbumsCount/20)
        let leaderboard = [...levyraatiData].splice((this.state.levyraatiPage-1)*20,20)
        return (
            <div>
                <h1><NavLink to="/projektit">Proggikset</NavLink> / Discord-levyraati</h1>
                <div className="discordLevyraatiTopNav">
                    <NavLink to="/projektit/discordlevyraati">
                        <div className="lrNavActive"><h2>Tulokset</h2></div> 
                    </NavLink>
                    <NavLink to="/projektit/discordlevyraati/docs"> 
                        <div className="lrNav"><h2>Dokumentaatio</h2></div>
                    </NavLink>
                    <NavLink to="/projektit/discordlevyraati/tietosuoja"> 
                    <div className="lrNav"><h2>Tietosuojalauseke</h2></div>
                    </NavLink>
                </div>   
                <div id="levyArvioLeaderboard">        
                    <div id="blrlbHeader">
                    <div id="leaderboardNavigation">
                        {this.lrNavThing("last","Edelliset")}
                        <div className="navTexts">
                            Näytetään<br/>
                            {levyraatiData.indexOf(leaderboard[0])+1}{" - "} 
                            {levyraatiData.indexOf(leaderboard[(leaderboard.length)-1])+1}
                            {" / "}{levyraatiData.length}
                        </div>
                        {this.lrNavThing("next","Seuraavat")}
                    </div>

                    </div>
                    {leaderboard.map(item => 
                        <div className="blrlb-Item" key={item[2]}>
                            <div className="blrlb-ranking">
                                {"#"+(levyraatiData.indexOf(item)+1)}
                            </div>    
                            <img src={item[2]} alt=""></img>
                            <div className="blrlb-item-databox">
                                <a href={"https://discord.com/channels/1031479962005409802/1070620790816510003/threads/"+item[7]}><b>{item[0]}</b>
                                <br/>{item[1]} ({item[3].slice(0,4)})</a> 
                                <div className="blrlbCopyright">{item[4][0].text}</div>
                            </div>
                            <div className="blrlbRatingBox">
                                <img src={getRatingPngFromRating(item[5])} alt={(item[5]/10)+" pistettä"}></img>
                                <div className="blrlbrn">
                                    ({item[5]/10}) ({item[6]})
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
        )
    }
}

