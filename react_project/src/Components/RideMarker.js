import React, {useState} from 'react';


const RideMarker = (props) => {
    const [show, setShow] = useState(false)

    //function for clicks
    const _onClick = () => {
        setShow(!show)
    }
    const disappearInfo = () => {
        setShow(false)
    }  

    return (
       <React.Fragment>
            <div className={props.rideList.assign === "unassigned" ? "rmarker": "rmarkerAssign"}
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
                        <div className="assignDriver" onClick={()=> props.assignPass(props.rideList)}>
                            <h5>Driver: <a href="#">{props.rideList.assign}</a></h5>
                            {/* <div className="plusSign">+</div> */}
                        </div>
                    </div>
                )}     
        </React.Fragment>
        )
  };
  export default RideMarker