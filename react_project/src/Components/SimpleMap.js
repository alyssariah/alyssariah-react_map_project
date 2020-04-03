import React, { useState } from 'react';
import "./CSS/SimpleMap.css"
import {Link} from "react-router-dom"
import ShowDrivers from "./ShowDrivers"
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"


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
        const [selectDriver, setSelectDriver] = useState(null);
        const [selectRide, setSelectRide] = useState(null)
        return(
        <GoogleMap
            defaultZoom={11}
            defaultCenter={props.driverList.length > 0 ? {lat: props.driverList[0].lat, lng: props.driverList[0].lng}: center}>
            
            {props.driverList.map((object, index)=> {
                if(props.driverList.length >0){
                    return (
                        <Marker position={{lat: object.lat, lng: object.lng}} key={index} 
                                onClick={()=>{setSelectDriver(object)}}
                                icon={{ url: "https://storage.needpix.com/rsynced_images/icon-2070748_1280.png", scaledSize: new window.google.maps.Size(35, 50)}}/>           
                    )
                }   
                })
            }
            {selectDriver && (
                <InfoWindow position={{lat: (selectDriver.lat), lng: selectDriver.lng}} onCloseClick= {()=> setSelectDriver(null)}>
                    <div> <p><span>{selectDriver.name}</span><br/>{selectDriver.address}</p></div>   
                </InfoWindow>
            )} 
            {props.rideList.map((object, index)=> {
                if(props.rideList.length >0){
                    return (
                        <Marker position={{lat: object.lat, lng: object.lng}}
                                onClick={()=> {setSelectRide(object)}}
                                key={index} 
                                icon={object.assign != "unassigned" ? {url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png", scaledSize: new window.google.maps.Size(50, 50)} : {url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                scaledSize: new window.google.maps.Size(50, 50)}} />
                    )
                }  
            })
            }
            {selectRide && (
                <InfoWindow position={{lat: (selectRide.lat), lng: selectRide.lng}} onCloseClick= {()=> setSelectRide(null)}>
                    <div> 
                        <p><span>{selectRide.name}</span><br/>{selectRide.address}</p>
                        <hr/>
                        <div onClick={()=> assignPass(selectRide)}>
                            <h5>Driver: <a href="#">{selectRide.assign}</a></h5>
                        </div>
                    </div>
                </InfoWindow>
            )} 
        </GoogleMap>
        )
    }
    
    const WrappedMap =  withScriptjs(withGoogleMap(Map));    

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