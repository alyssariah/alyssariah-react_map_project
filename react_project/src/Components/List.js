import React from "react"

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
                <>
                <h4 className="listTitles" key={index}>{obj.name}</h4>
                    <ul>
                        {placePassenger}
                    </ul>
                </>
            )
    })
    return(
        <div className="information">
            <h2>List Page</h2>
            <h4 className="listTitles">Drivers:</h4>
            <ul>
                {makeDriverList}
            </ul>
            <h4 className="listTitles">Passengers:</h4>
            <ul>
                {makeRideList}
            </ul>
            <h4>Assign Passengers to Drivers</h4>
            <div className="assign">
                {assignDriverList}
            </div>
            
        </div>

    )
}
export default List