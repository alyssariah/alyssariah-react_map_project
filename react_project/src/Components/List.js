import React from "react"
import {Link} from "react-router-dom"
import "./CSS/List.css"

function List(props){
    
    const assignDriverList = props.driverList.map((obj, index) => {
        const placePassengers = props.rideList.map((object, index) => {
            if(object.assign === obj.name){
                return (
                    <li key={index}>{object.name} - {object.address}</li>
                )
            }
        })
        return (
            <div className="fullList">
                <h4 key={index}>{obj.name}</h4>
                <ul>
                    {placePassengers}
                </ul>
            </div>
        )
    })
    
    return(
        <div className="information">
             <header>
                <h2>Carpool <span>coordinator</span></h2>
            </header> 
            <nav>
                <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png"/><br/>Home</Link>
                <Link to="/map"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg"/><br/>Map</Link>
                <Link to="/list"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Noun_project_list_icon_1380018_cc.svg"/><br/>Assign</Link>
            </nav>
            <div className="list">
                <div className="assignWithTitle">
                    <h3>Driver Assignments</h3>
                    <div className="assign">
                        {assignDriverList}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default List