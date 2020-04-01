import React, { useState } from 'react';
import "./CSS/SimpleMap.css"
import DriverMarker from "./DriverMarker"
import RideMarker from "./RideMarker"
import DriverForm from "./DriverForm"
import RideForm from "./RideForm"
import Plus from "./Plus"
import GoogleMapReact from 'google-map-react';


const SimpleMap = (props) => {
    //setting state
    const [centerC, setCenter] = useState({lat: 37.4275, lng: -122.1697});
    const [zoom, setZoom] = useState(11);
    const [driverAddress, setDriverAddress] = useState([])
    const [rideAddress, setRideAddress] = useState([{}])
    const [currentPassenger, setCurrentPassenger] = useState("")
    const [displayNames, setDisplayNames] = useState(false)
    const [selectDriver, setSelectDriver] = useState("")

    const getMapOptions = () => {
      return {
        disableDefaultUI: true,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
      };
    };
    
    //assign to driver function
    const assignToDriver = (driverName) => {
        console.log("currentPassenger", currentPassenger)
        console.log("driverName", driverName)
        setDisplayNames(!displayNames)
        for(let i= 0; i< props.assignDriver.length; i++){
            if(currentPassenger === props.assignDriver[i].passenger){
                props.assignDriver.splice(i, 1)
            }
        } 
        props.assignToDriver(driverName, currentPassenger)
    }
    const unassignDriver = () => {
        setDisplayNames(!displayNames)
        for(let i= 0; i< props.assignDriver.length; i++){
            if(currentPassenger === props.assignDriver[i].passenger){
                props.assignDriver.splice(i, 1)
            }
        } 
    }
    //make showAllDrivers div and function
     const assignPass = (passengerName) => {
        for(let i= 0; i< props.assignDriver.length; i++){
            if(passengerName === props.assignDriver[i].passenger){
                setSelectDriver(props.assignDriver[i].driver)
                console.log("new select driver")
            }
        } 
        console.log("passengerName", passengerName)
        setCurrentPassenger(passengerName)
        setDisplayNames(!props.displayNames)
    }

    const showAllDrivers = props.driverList.map((object, index) => {

        return(
            <Plus object={object} 
                  assignToDriver={assignToDriver} 
                  unassignDriver={unassignDriver}
                  assignDriver = {props.assignDriver}
                  selectDriver={selectDriver}
                  setSelectDriver={setSelectDriver}/>    
        )
    })

     
    //Pull in addresses from home and transfer into coordinates
    const pullDriverData = props.driverCoordinates.map((object, index)=> {
        if(props.driverCoordinates.length >0){
            return (
                 <DriverMarker lat={object.lat} 
                               lng={object.lng} 
                               key={index} 
                               driverList={props.driverList[index]}
                               />
                )
            }   
        })
    const pullRideData = props.rideCoordinates.map((object, index)=> {
        if(props.rideCoordinates.length >0){
            return (
                    <RideMarker lat={object.lat} 
                                lng={object.lng} 
                                key={index} 
                                rideList={props.rideList[index]}
                                assignPass={assignPass}
                                assignDriver={props.assignDriver}/>
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
        <div className="information">
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