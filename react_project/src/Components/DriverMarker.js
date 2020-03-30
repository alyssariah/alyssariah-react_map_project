import React, {useState} from 'react';


const DriverMarker = (props) => {
    const [show, setShow] = useState(false)
    const _onClick = () => {
        setShow(!show)
    }
    return (
       <React.Fragment>
            <img
                className="dmarker"
                src="https://storage.needpix.com/rsynced_images/icon-2070748_1280.png"
                style={{ cursor: 'pointer'}}
                onClick={_onClick} />
            {/* Below is info window component */}
            {show && (
            <div
            className="infoDBox"
                >{props.driverList.name}<br/>
                {props.driverList.address}</div>
                )}
        </React.Fragment>
        )
  };
  export default DriverMarker