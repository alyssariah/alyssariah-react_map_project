import React, {useState} from "react"

function Form(props){
    const [driverName, setDriverName] = useState("")
    const [driverAddress, setDriverAddress] = useState("")
    const [rideName, setRideName] = useState("")
    const [rideAddress, setRideAddress] = useState("")
    const [displayDriverForm, setDisplayDriverForm] = useState(false)
    const [displayRideForm, setDisplayRideForm] = useState(false)

    //handleChange function to take in input 
    const handleDriverName =(e) => {
        setDriverName(e.target.value)
    }
    const handleDriverAddress =(e) => {
        setDriverAddress(e.target.value)
    }
    const handleRideName =(e) => {
        setRideName(e.target.value)
    }
    const handleRideAddress =(e) => {
        setRideAddress(e.target.value)
    }

    //change Address into coordinates and pass to SimpleMap
    const passDriverInformation = async(e) =>{
        e.preventDefault()
        let str = driverAddress.replace(/\s/g, '+');
        let res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${str},+CA&key=AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y`)
        let json = await res.json();
        let place = json.results[0].geometry.location
        props.setDriverList([...props.driverList, {name: driverName, address: driverAddress, lat: place.lat, lng: place.lng}])
        props.setDriverAlert(<div className="alert">
            <img className="checkMark" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Light_green_check.svg"/>
            {driverName} has been added to your map!</div>)
        setDriverName("")
        setDriverAddress("")
        setDisplayDriverForm(false)
        props.setShowDriveRemove(false)
    }
    const passRideInformation = async(e) =>{
        e.preventDefault()
        let str = rideAddress.replace(/\s/g, '+');
        let res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${str},+CA&key=AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y`)
        let json = await res.json();
        let place = json.results[0].geometry.location
        props.setRideList([...props.rideList, {name: rideName, address: rideAddress, lat: place.lat, lng: place.lng, assign:"unassigned"}])
        props.setAlert(<div className="alert">
            <img className="checkMark" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Light_green_check.svg"/>
            {rideName} has been added to your map!</div>)
        setRideName("")
        setRideAddress("")
        setDisplayRideForm(false)
        props.setShowRemove(false)
    }

    return(
        <div className="allLists">
            <div className="homeForm">
                <div className="titleList">
                    <h3>Driver List</h3>
                    <img className="addPerson" onClick={()=>{setDisplayDriverForm(!displayDriverForm)
                                                            props.setShowDriveRemove(!props.showDriveRemove)}} 
                         src="https://storage.needpix.com/rsynced_images/user-2493635_1280.png"/>
                </div>
                {props.driverAlert} 
                <ul>
                    {props.makeDriverList}
                </ul>
                {displayDriverForm && (<form onSubmit={passDriverInformation}>
                    <input className="formName"
                        type="text" 
                        placeholder="Driver name" 
                        onChange={handleDriverName} 
                        value={driverName}
                        required="required"/>
                    <input className="formAddress"
                        type="text" 
                        placeholder="Driver address" 
                        onChange={handleDriverAddress} 
                        value={driverAddress}
                        required="required"/>
                    <button>Add</button>   
                </form>)}    
            </div>
            <div className="homeForm">
                <div className="titleList">
                    <h3>Passenger List</h3>
                    <img className="addPerson" onClick={()=>{setDisplayRideForm(!displayRideForm); props.setShowRemove(!props.showRemove)}} src="https://storage.needpix.com/rsynced_images/user-2493635_1280.png"/>
                </div> 
                {props.alert}  
                <ul>
                    {props.makeRideList}
                </ul> 
                {displayRideForm && (<form onSubmit={passRideInformation}>
                <input className="formName"
                    type="text" 
                    placeholder="Passenger name" 
                    onChange={handleRideName} 
                    value={rideName}
                    required="required"/>
                <input className="formAddress"
                    type="text" 
                    placeholder="Passenger address" 
                    onChange={handleRideAddress} 
                    value={rideAddress}
                    required="required"/>
                <button>Add</button>  
                </form>)}  
            </div>
        </div>    
    )
}
export default Form;