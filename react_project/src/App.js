import React, {useState, useEffect} from 'react';
import './App.css';
import Home from "./Components/Home"
import List from "./Components/List"
import SimpleMap from "./Components/SimpleMap"
import {Switch, Route, Link, Redirect} from "react-router-dom"

function App() {
  //setting state to pass down to list
  const [driverList, setDriverList] = useState([])
  const [rideList, setRideList] = useState([])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=> <Home setDriverList={setDriverList}
                                                 driverList={driverList}
                                                 setRideList={setRideList}
                                                 rideList={rideList}/>}/>
        <Route path="/map"  render={()=> <SimpleMap driverList={driverList} 
                                                    rideList ={rideList}/>}/>
        <Route path="/list" render={()=> <List driverList={driverList} 
                                               rideList={rideList} />}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
