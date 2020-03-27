import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleApiWrapper from "./Components/GoogleApiWrapper"

function App() {
 
   return (
    <div className="App">
      <GoogleApiWrapper />
      {/* <iframe
          style={{width:"450px",
                  height:"500px",
                  frameborder:"0",
                  border:"0"
                 }}
          src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y&q=record+stores+in+Seattle" allowfullscreen>
      </iframe> */}
      <div id="map">
       </div>
      </div>
  );
}

export default App;
