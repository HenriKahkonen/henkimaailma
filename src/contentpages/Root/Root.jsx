import '../../App.css'

import 
    {
        Outlet,
        useNavigation,
        useLoaderData,
    } from "react-router-dom";
import { Component } from 'react';

import 
    {
      Header,
      NavigationColumn,
      SomeLinkkiLaja,
      FinalFooter,
    } from "../../components";
import { FetchLevyRaatiData, isSkriimOnline } from '../../components/functions';



/*export async function loader({request}) {
  const livestatus = await isSkriimOnline()
  const lrData = await FetchLevyRaatiData();
  console.log("Root loader, live: ",livestatus," lrData: "+lrData)
  return {livestatus, lrData}
}*/


export function Root() {
    /*
    constructor(props) {
      super(props)
      this.state = {
        levyraatidata: [],
        livestatus: false,
      }
    }
    
    async componentDidMount() {
      console.log("root mounttaa")
      const live = await isSkriimOnline();
      const lrdata = await FetchLevyRaatiData()
      this.setState({levyraatidata:lrdata,livestatus:live})
    }
    */
    //const {livestatus,lrData} = useLoaderData();
    //const lrData=this.state.levyraatidata;
    //const livestatus=this.state.livestatus;
    return (
        <div className="App">
          <div className="Master-container">
            <Header/>
            <div id="Kontsabox-ja-navbar">
              <NavigationColumn/>
              <div className="MainContainer">
                  <div className="Kontsa">
                    <Outlet/>
                    {/*<Outlet context={[lrData,livestatus]}/>*/}
                  </div>
              <SomeLinkkiLaja/>
              </div>
            </div> 
          </div>
        <FinalFooter/> 
        </div>
    );
}
//}