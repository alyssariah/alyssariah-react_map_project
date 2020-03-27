import React, {useState} from "react"
import Form from "./Form"
import {withGoogleMap, GoogleMap, Marker, SeachBox} from 'react-google-maps';
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

function MapContainer (){
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const setCoordinates = (lat , lng)=>{
    setLat(lat)
    setLng(lng)
  } 
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 37.4275, lng: -122.1697 } }
          defaultZoom = { 13 }
        >
          <SearchBox controlPosition={GoogleMap.ControlPosition.TOP_LEFT}/>
            <Marker position={{ lat: {lat}, lng: {lng} }} />
        </GoogleMap>
     ));
  return(
    <div className="map" style={{ height: `90vh`, width: '100%' }}>
        <Form coordinates={setCoordinates}/>
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ancient_Egypt_map-en.svg" style={{ height: `90vh`, width: '100%' }}></img> */}
      <GoogleMapExample
        containerElement={ <div style={{ height: `90vh`, width: '100%' }} /> }
        mapElement={ <div style={{ height: `90vh` }} /> }
      />
    </div>
  );
}
export default MapContainer;