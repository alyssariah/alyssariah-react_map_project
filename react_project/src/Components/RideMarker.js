import React, {useState} from 'react';


const RideMarker = (props) => {
    const [show, setShow] = useState(false)

    //function 
    const _onClick = () => {
        setShow(!show)
    }
    const disappearInfo = () => {
        setShow(false)
    }
    const assignPass = (name) => {
        props.assignPass(name);
    }

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
                        <h5 onClick={()=> assignPass(props.rideList.name)}>
                            Assign Driver 
                            <div className="plusSign">+</div>
                        </h5>
                    </div>
                )}     
        </React.Fragment>
        )
  };
  export default RideMarker