import React, { useState } from 'react';
import "./CSS/SimpleMap.css"
import DriverMarker from "./DriverMarker"
import RideMarker from "./RideMarker"
import {Link} from "react-router-dom"
import ShowDrivers from "./ShowDrivers"
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"


const SimpleMap = (props) => {
    //setting state
    const [center, setCenter] = useState({lat: 37.4275, lng: -122.169});
    const [currentPassenger, setCurrentPassenger] = useState("")
    const [displayNames, setDisplayNames] = useState(false)

    
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

    function Map() {

        return(
        <GoogleMap
            defaultZoom={11}
            defaultCenter={props.driverList.length > 0 ? {lat: props.driverList[0].lat, lng: props.driverList[0].lng}: center}>
            
            {props.driverList.map((object, index)=> {
                 if(props.driverList.length >0){
                     return (
                        <DriverMarker object={object}/> 
                     )
                 }
            })
            } 
            {props.rideList.map((object, index)=> {
                 if(props.rideList.length >0){
                     return (
                        <RideMarker object={object} assignPass={assignPass}/> 
                     )
                 }
            })
            }      
        </GoogleMap>
        )
    }
    
    const WrappedMap =  withScriptjs(withGoogleMap(Map));    

    return (
        <div className="mapInformation">
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
            <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y"
                loadingElement= {<div style={{ height: `100%` }}/>}
                containerElement= {<div style={{ height: `100%` }} />}
                mapElement= {<div style={{ height: `100%` }}
                driverList={props.driverList} />}
            />
        </div>
    );
}

    export default SimpleMap