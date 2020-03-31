import React, {useState} from 'react';
import './App.css';
import Home from "./Components/Home"
import List from "./Components/List"
import SimpleMap from "./Components/SimpleMap"
import {Switch, Route, Link, Redirect} from "react-router-dom"

function App() {
  //setting state to pass down to list
  const [driverList, setDriverList] = useState([])
  const [driverCoordinates, setDriverCoordinates] = useState([])
  const [rideList, setRideList] = useState([])
  const [rideCoordinates, setRideCoordinates] = useState([])
  const [assignDriver, setAssignDriver] = useState([])

  //retrieving name and address from home
  const passDriverInfo = (inputName, inputAdd, dLat, dLng) =>{
    setDriverCoordinates([...driverCoordinates, {lat: dLat, lng: dLng}])
    setDriverList([...driverList, {name: inputName, address: inputAdd}])
  }
  const passRideInfo = (inputName, inputAdd, rLat, rLng) =>{
    setRideCoordinates([...rideCoordinates, {lat: rLat, lng: rLng}])
    setRideList([...rideList, {name: inputName, address: inputAdd}])
  }

  //receiving information from maps to send to list
  const assignToDriver = (driverName, currentPassengerName) => {
    setAssignDriver([...assignDriver, {driver: driverName, passenger: currentPassengerName}])
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=> <Home passDriverInfo={passDriverInfo} 
                                                 passRideInfo={passRideInfo} 
                                                 driverList={driverList}
                                                 rideList={rideList}/>}/>
        <Route path="/map"  render={()=> <SimpleMap driverCoordinates={driverCoordinates} 
                                                    rideCoordinates={rideCoordinates} 
                                                    driverList={driverList} 
                                                    rideList ={rideList}
                                                    assignToDriver={assignToDriver}
                                                    assignDriver={assignDriver}/>}/>
        <Route path="/list" render={()=> <List driverList={driverList} 
                                               rideList={rideList} 
                                               assignDriver={assignDriver}/>}/>
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
