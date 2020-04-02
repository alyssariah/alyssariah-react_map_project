import React, {useState, useEffect} from 'react';
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

  // //fetching data from google sheet 
  // const pullGoogleSheet = () => {
  //   let sheetUrl = "https://spreadsheets.google.com/feeds/list/1uZdRKonnGEAgksvHTd9g6FKBkiQyzk9vf6u2ec7LEdE/od6/public/values?alt=json"
  //   fetch(sheetUrl)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log("data", data.feed.entry)
  //     data.feed.entry.map(async(object, index)=>{
  //       if(object.gsx$title.$t === "Driver"){
  //         let address= object.gsx$address.$t
  //         let str = address.replace(/\s/g, '+');
  //         let res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${str},+CA&key=AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y`)
  //         let json = await res.json();
  //         let place = json.results[0].geometry.location
  //         setDriverList([...driverList, {name: object.gsx$name.$t, address: object.gsx$address.$t, lat: place.lat, lng: place.lng, assign: "unassigned"}])
  //       } else if (object.gsx$title.$t === "Passenger"){
  //         let address= object.gsx$address.$t
  //         let str = address.replace(/\s/g, '+');
  //         let res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${str},+CA&key=AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y`)
  //         let json = await res.json();
  //         let place = json.results[0].geometry.location
  //         setRideList([...rideList, {name: object.gsx$name.$t, address: object.gsx$address.$t, lat: place.lat , lng: place.lng, assign: "unassigned"}])
  //         console.log("rideList", rideList)
  //       }
  //     })
  //   })
  // }
  //retrieving name and address from home
  const passDriverInfo = (inputName, inputAdd, dLat, dLng) =>{
    setDriverList([...driverList, {name: inputName, address: inputAdd, lat: dLat, lng: dLng, assign: "unassigned"}])
  }
  const passRideInfo = (inputName, inputAdd, rLat, rLng) =>{
    setRideList([...rideList, {name: inputName, address: inputAdd, lat: rLat, lng: rLng, assign: "unassigned"}])
  }
  console.log(rideList)

  

  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={DownloadApp} /> */}
        <Route exact path="/" render={()=> <Home passDriverInfo={passDriverInfo} 
                                                 passRideInfo={passRideInfo} 
                                                 setDriverList={setDriverList}
                                                 driverList={driverList}
                                                 setRideList={setRideList}
                                                 rideList={rideList}/>}/>
        <Route path="/map"  render={()=> <SimpleMap driverList={driverList} 
                                                    rideList ={rideList}/>}/>
        <Route path="/list" render={()=> <List driverList={driverList} 
                                               rideList={rideList} />}/>
        <Redirect to="/"/>
      </Switch>
      {/* <nav>
        <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png"/><br/>Home</Link>
        <Link to="/map"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg"/><br/>Map</Link>
        <Link to="/list"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Noun_project_list_icon_1380018_cc.svg"/><br/>List</Link>
      </nav> */}
    </div>
  );
}

export default App;
