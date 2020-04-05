
import React, {useState} from "react"
import {Marker, InfoWindow} from "react-google-maps"

function DriverMarker(props){
    const [selectDriver, setSelectDriver] = useState(null);
    return (
        <Marker position={{lat: props.object.lat, lng: props.object.lng}}
                    onClick={()=>{setSelectDriver(props.object)}}
                    icon={{ url: "https://storage.needpix.com/rsynced_images/icon-2070748_1280.png", scaledSize: new window.google.maps.Size(35, 50)}}>
            {selectDriver && (
            <InfoWindow position={{lat: (selectDriver.lat), lng: selectDriver.lng}} onCloseClick= {()=> setSelectDriver(null)}>
                 <div> <p><span>{selectDriver.name}</span><br/>{selectDriver.address}</p></div>   
             </InfoWindow>
            )} 
        </Marker>  
    )
}            
 export default DriverMarker