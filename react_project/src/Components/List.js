import React from "react"
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
                <h2>List</h2>
            </header>
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