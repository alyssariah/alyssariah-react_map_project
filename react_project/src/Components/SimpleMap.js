import React, { useState, useEffect } from 'react';
import "./CSS/SimpleMap.css"
import {Link} from "react-router-dom"
import DriverMarker from "./DriverMarker"
import RideMarker from "./RideMarker"
import ShowDrivers from "./ShowDrivers"
import GoogleMapReact from 'google-map-react';


const SimpleMap = (props) => {
    //setting state
    const [center, setCenter] = useState({lat: 37.4275, lng: -122.169});
    const [zoom, setZoom] = useState(11);
    const [driverAddress, setDriverAddress] = useState([])
    const [rideAddress, setRideAddress] = useState([{}])
    const [currentPassenger, setCurrentPassenger] = useState("")
    const [displayNames, setDisplayNames] = useState(false)

    const getMapOptions = () => {
      return {
        disableDefaultUI: true,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
      };
    };
    
    //assign page to reset
    const resetPage = (driverName) => {
        setDisplayNames(!displayNames)
    }
 
    //showAllDrivers div and function
     const assignPass = (passenger) => {
        setCurrentPassenger(passenger)
        setDisplayNames(!props.displayNames)
    }

    const showAllDrivers = props.driverList.map((object, index) => {
        return(
            <ShowDrivers object={object} 
                         resetPage={resetPage}
                         rideList={props.rideList}
                         currentPassenger = {currentPassenger}/>    
        )
    })

     
    //Pull in addresses from home and transfer into coordinates
    const pullDriverData = props.driverList.map((object, index)=> {
        if(props.driverList.length >0){
            return (
                 <DriverMarker lat={object.lat} 
                               lng={object.lng} 
                               key={index} 
                               driverList={object} />
                )
            }   
        })
    const pullRideData = props.rideList.map((object, index)=> {
        if(props.rideList.length >0){
            return (
                    <RideMarker lat={object.lat} 
                                lng={object.lng} 
                                key={index} 
                                rideList={object}
                                assignPass={assignPass}/>
                )
            }  
        })

    return (
        <div className="mapInformation">
            <header>
                <h2>Carpool <span>coordinator</span></h2>
            </header> 
            <div className="nav">
                <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png"/></Link>
                <Link to="/map"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg"/></Link>
                <Link to="/list"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Noun_project_list_icon_1380018_cc.svg"/></Link>
            </div> 
            <nav>
                <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png"/><br/>Home</Link>
                <Link to="/map"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg"/><br/>Map</Link>
                <Link to="/list"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Noun_project_list_icon_1380018_cc.svg"/><br/>Assign</Link>
            </nav>
            {displayNames && (
                <div className="allDrivers">
                    <div className="exit" onClick={()=>{setDisplayNames(!displayNames)}}>X</div>
                    <ul>
                        {showAllDrivers}
                    </ul>
                </div>
                )} 
            <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y' }}
            center= {props.driverList.length > 0 ? {lat: props.driverList[0].lat, lng: props.driverList[0].lng}: center}
            defaultZoom={zoom}
            > 
                {pullDriverData}
                {pullRideData}
            </GoogleMapReact>
        </div>
    );
}

    export default SimpleMap