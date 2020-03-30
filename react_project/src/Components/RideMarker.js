import React, {useState} from 'react';


const RideMarker = (props) => {
    const [show, setShow] = useState(false)
    const _onClick = () => {
        setShow(!show)
    }
    return (
       <React.Fragment>
            <div
                className="rmarker"
                style={{ cursor: 'pointer'}}
                onClick={_onClick} />
            {/* Below is info window component */}
            {show && (
            <div
            className="infoRBox"
                >{props.rideList.name}<br/>
                {props.rideList.address}</div>
                )}
        </React.Fragment>
        )
  };
  export default RideMarker