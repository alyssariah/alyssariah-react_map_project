import React from "react"
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

function MapContainer (){
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
          defaultZoom = { 13 }
        >
            <Marker position={{ lat: 40.756795, lng: -73.954298 }} />
            <Marker position={{ lat: 40.7484 , lng: -73.9857 }} />
        </GoogleMap>
     ));
     return(
        <div className="map">
          <GoogleMapExample
            containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
          />
        </div>
     );
}
export default MapContainer;