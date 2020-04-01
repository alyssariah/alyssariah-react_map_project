import React, { useState } from 'react';
import "./CSS/SimpleMap.css"
import {Link} from "react-router-dom"
import DriverMarker from "./DriverMarker"
import RideMarker from "./RideMarker"
import DriverForm from "./DriverForm"
import RideForm from "./RideForm"
import ShowDrivers from "./ShowDrivers"
import GoogleMapReact from 'google-map-react';


const SimpleMap = (props) => {
    //setting state
    const [centerC, setCenter] = useState({lat: 37.4275, lng: -122.1697});
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
                               driverList={object}/>
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


    //setting coordinates
    // const setDriverCoordinates = (later , longer)=>{
    //     console.log("coordinates", later, longer)
    //     setCenter({lat: later, lng: longer})
    //     setDriverAddress([...driverAddress, {lat: later, lng: longer}])
    //   } 
    // const setCoordinates = (later , longer)=>{
    //     console.log("coordinates", later, longer)
    //     setCenter({lat: later, lng: longer})
    //     setRideAddress([...rideAddress, {lat: later, lng: longer}])
    //     console.log("Ride Address", rideAddress)
    //   }

    // const createDriverMarkers = driverAddress.map((object, index)=>{
    //     if (Object.keys(object).length === 0){
    //      return (
    //          <>

    //          </>

    //      )
    //     } else {
    //     return (
    //         <DriverMarker lat={object.lat} lng={object.lng} key={index}/>
    //     )
    //     }
    // })  
    // const createRideMarkers = rideAddress.map((object, index)=>{
    //     if (Object.keys(object).length === 0){
    //      return (
    //          <>
    //          </>
    //      )
    //     } else {
    //     return (
    //         <RideMarker lat={object.lat} lng={object.lng} key={index}/>
    //     )
    //     }
    // }) 
    return (
        <div className="mapInformation">
            <header className="mapHeader">
                <h2>Carpool <span>coordinator</span></h2>
            </header> 
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
            {/* <DriverForm coordinates={setDriverCoordinates}/>
            <RideForm coordinates={setCoordinates} /> */}
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ancient_Egypt_map-en.svg" style={{ height: `92vh`, width: '100%' }}></img> */}
            <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y' }}
            center= {centerC}
            defaultZoom={zoom}
            options = {getMapOptions}
            > 
                {pullDriverData}
                {pullRideData}
                {/* {createDriverMarkers}
                {createRideMarkers} */}
            </GoogleMapReact>
        </div>
    );
}

    export default SimpleMap