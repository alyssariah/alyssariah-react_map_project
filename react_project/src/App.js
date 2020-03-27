import React from 'react';
import './App.css';
import Home from "./Components/Home"
import MapContainer from "./Components/MapContainer"
import List from "./Components/List"
import {Switch, Route, Link, Redirect} from "react-router-dom"

function App() {
 
   return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/map" component={MapContainer} />
          <Route path="/list" component={List} />
          <Redirect to="/"/>
      </Switch>
          <nav>
            <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png"/><br/>Home</Link>
            <Link to="/map"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg"/><br/>Map</Link>
            <Link to="/list"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Noun_project_list_icon_1380018_cc.svg"/><br/>List</Link>
          </nav>
      </div>
  );
}

export default App;
