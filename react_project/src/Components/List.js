import React from "react"

function List(props){
    console.log("List - driver Information", props.driverList)
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
    return(
        <div className="information">
            <h2>List Page</h2>
            <h4 className="listTitles">Drivers:</h4>
            <ul>
                {makeDriverList}
            </ul>
            <h4 className="listTitles">Who needs a ride?</h4>
            <ul>
                {makeRideList}
            </ul>
        </div>

    )
}
export default List