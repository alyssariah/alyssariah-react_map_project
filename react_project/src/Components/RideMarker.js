import React, {useState} from 'react';


const RideMarker = (props) => {
    const [show, setShow] = useState(false)
    const [assigned, setAssigned] = useState(false)

    //function for clicks
    const _onClick = () => {
        setShow(!show)
        props.assignDriver.forEach((object, index) => {
            console.log("Am I assigned?", object)
                if(props.rideList.name === object.passenger){
                  setAssigned(true)
                }
                })
    }
    const disappearInfo = () => {
        setShow(false)
    }
    const assignPass = (name) => {
        props.assignPass(name);
    }
    //function to display right assign driver
    const displayAssignedDriver = props.assignDriver.map((object, index) => {
        console.log("Am I assigned?", object)
            if(props.rideList.name === object.passenger){
                return (
                    <>{object.driver}</>
                )
            }
            })    

    return (
       <React.Fragment>
            <div
                className="rmarker"
                style={{ cursor: 'pointer'}}
                onClick={_onClick}>
                    <div className="circle"/>
            </div>
            {/* Below is info window component */}
            {show && (
            <div className="infoRBox" onClick={disappearInfo}>
                    <div className="exitInfo" onClick={disappearInfo}>x</div>
                        <p>
                            <span>{props.rideList.name}</span><br/>
                            {props.rideList.address}
                        </p>
                        <hr />
                        <div className="assignDriver" onClick={()=> assignPass(props.rideList.name)}>
                            <h5>Assigned Driver: { !assigned ? <h5>Unassigned</h5> : displayAssignedDriver}</h5>
                            <div className="plusSign">+</div>
                        </div>
                    </div>
                )}     
        </React.Fragment>
        )
  };
  export default RideMarker