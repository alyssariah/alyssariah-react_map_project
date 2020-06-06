import React from "react"
import {Link} from "react-router-dom"
import "./CSS/List.css"

function List(props){
    
    const assignDriverList = props.driverList.map((driver, index) => {
        const placePassengers = props.rideList.map((ride, index) => {
            if(ride.assign === driver.name){
                return (
                    <li key={index}>{ride.name} - {ride.address}</li>
                )
            }
        })
        return (
            <div className="fullList" key={index}>
                <h4>{driver.name}</h4>
                <ul>
                    {placePassengers}
                </ul>
            </div>
        )
    })
    
    return(
        <div className="information">
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
            <div className="list">
                <h2 className="assig">Driver Assignments</h2>
                <div className="assign">
                    {assignDriverList}
                </div>
            </div>
            <footer>&copy; Carpool Coordinator 2020</footer>
        </div>

    )
}
export default List