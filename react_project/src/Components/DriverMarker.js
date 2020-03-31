import React, {useState, useEffect} from 'react';


const DriverMarker = (props) => {
    //settin states
    const [show, setShow] = useState(false)
   

    //setting functions
    const _onClick = () => {
        setShow(!show)
        }  
    const disappearInfo = () => {
            setShow(false)
    }     
    const assignPass = (name) => {
        props.assignPass(name)
    }
    return (
       <React.Fragment>
           <div>
                <img
                className="dmarker"
                src="https://storage.needpix.com/rsynced_images/icon-2070748_1280.png"
                style={{ cursor: 'pointer'}}
                onClick={_onClick}
                />
             </div>   
            {/* Below is info window component */}
            {show && (
                <div className="infoDBox" onClick={disappearInfo}>
                    <div className="exitInfo" onClick={disappearInfo}>x</div>
                    <p><span>{props.driverList.name}</span><br/>
                    {props.driverList.address}</p>
                </div>
                )}   

        </React.Fragment>
        )
  };
  export default DriverMarker