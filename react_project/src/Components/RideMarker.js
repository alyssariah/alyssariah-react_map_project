import React, {useState} from "react"
import {Marker, InfoWindow} from "react-google-maps"

function RideMarker(props){
    const [selectRide, setSelectRide] = useState(null)
    return (
        <Marker position={{lat: props.object.lat, lng: props.object.lng}}
                    onClick={()=>{setSelectRide(props.object)}}
                    icon={props.object.assign != "unassigned" ? {url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png", scaledSize: new window.google.maps.Size(50, 50)} : {url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    scaledSize: new window.google.maps.Size(50, 50)}}>
            {selectRide && (
            <InfoWindow position={{lat: (selectRide.lat), lng: selectRide.lng}} onCloseClick= {()=> setSelectRide(null)}>
                  <div> 
                        <p><span>{selectRide.name}</span><br/>{selectRide.address}</p>
                        <hr/>
                        <div onClick={()=> props.assignPass(selectRide)}>
                            <h5>Driver: <a href="#">{selectRide.assign}</a></h5>
                        </div>
                    </div> 
             </InfoWindow>
            )} 
        </Marker>  
    )
}            
 export default RideMarker