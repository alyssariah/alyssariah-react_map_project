import React, {useState} from 'react';
import './App.css';
import DownloadApp from "./Components/DownloadApp"
import Home from "./Components/Home"
import List from "./Components/List"
import SimpleMap from "./Components/SimpleMap"
import {Switch, Route, Link, Redirect} from "react-router-dom"

function App() {
  //setting state to pass down to list
  const [driverList, setDriverList] = useState([])
  const [rideList, setRideList] = useState([])

  //retrieving name and address from home
  const passDriverInfo = (inputName, inputAdd, dLat, dLng) =>{
    setDriverList([...driverList, {name: inputName, address: inputAdd, lat: dLat, lng: dLng, assign: "unassigned"}])
  }
  const passRideInfo = (inputName, inputAdd, rLat, rLng) =>{
    setRideList([...rideList, {name: inputName, address: inputAdd, lat: rLat, lng: rLng, assign: "unassigned"}])
  }
  

  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={DownloadApp} /> */}
        <Route exact path="/" render={()=> <Home passDriverInfo={passDriverInfo} 
                                                 passRideInfo={passRideInfo} 
                                                 driverList={driverList}
                                                 rideList={rideList}/>}/>
        <Route path="/map"  render={()=> <SimpleMap driverList={driverList} 
                                                    rideList ={rideList}/>}/>
        <Route path="/list" render={()=> <List driverList={driverList} 
                                               rideList={rideList} />}/>
        <Redirect to="/"/>
      </Switch>
      <nav>
        <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png"/><br/>Home</Link>
        <Link to="/map"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg"/><br/>Map</Link>
        <Link to="/list"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Noun_project_list_icon_1380018_cc.svg"/><br/>List</Link>
      </nav>
    </div>
  );
}

export default App;
