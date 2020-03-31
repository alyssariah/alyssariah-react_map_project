import React from "react"
import "./CSS/List.css"

function List(props){
    
    // making Driver List
    const makeDriverList = props.driverList.map((obj, index) => {
        return (
            <li key={index}>{obj.name} - {obj.address}</li>
        )
    })
    const makeRideList = props.rideList.map((obj, index) => {
        return (
            <li key={index}>{obj.name} - {obj.address}</li>
        )
    })
    
    const assignDriverList = props.driverList.map((obj, index) => {
        const placePassenger = props.assignDriver.map((object, index) => {  
            if(object.driver === obj.name){
                return(
                    <li>{object.passenger}</li>
                )
            }
            })
            return (
                <div className="listComponent">
                    <h4 key={index}>{obj.name}</h4>
                    <ul>
                        {placePassenger}
                    </ul>
                </div>
            )
    })
    return(
        <div className="information">
            <header>
                <h2>List</h2>
            </header>
            <div className="list">
            <div className="overlay">
                <div className="assignWithTitle">
                    <h3>Assigned to Drivers:</h3>
                    <div className="assign">
                        {assignDriverList}
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}
export default List