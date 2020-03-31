import React, {useState} from "react"

function Home(props){
    //setting state
    const [driverName, setDriverName] = useState("")
    const [driverAddress, setDriverAddress] = useState("")
    const [rideName, setRideName] = useState("")
    const [rideAddress, setRideAddress] = useState("")
    const [driverAlert, setDriverAlert] = useState("")
    const [alert, setAlert] = useState("")
    const [show, setShow] = useState(false)

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
        console.log("added with pluses", str)
        let res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${str},+CA&key=AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y`)
        let json = await res.json();
        let place = json.results[0].geometry.location
        console.log("place", place)
        props.passDriverInfo(driverName, driverAddress, place.lat, place.lng)
        setDriverAlert(<div>
            <img className="checkMark" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Light_green_check.svg"/>
            {driverName} has been added to your driver list!</div>)
        setDriverName("")
        setDriverAddress("")
    }
    const passRideInformation = async(e) =>{
        e.preventDefault()
        let str = rideAddress.replace(/\s/g, '+');
        console.log("added with pluses", str)
        let res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${str},+CA&key=AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y`)
        let json = await res.json();
        let place = json.results[0].geometry.location
        props.passRideInfo(rideName, rideAddress, place.lat, place.lng)
        setAlert(<div>
            <img className="checkMark" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Light_green_check.svg"/>
            {rideName} has been added to your passenger list!</div>)
        setRideName("")
        setRideAddress("")
    }

    return(
        <div className="information">
           <h2>Carpool <span>coordination</span></h2>
           <img onClick={()=>{setShow(!show)}}className="helpIcon" src="https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-512.png"/>
            {show && (<div className="instructions">
                <ol>
                <h4>Instructions: </h4>
                    <li>Enter information below one at a time for each person 
                    and they will be added to the map</li>
                    <li>After you submit, check out the map and list pages for drivers and who needs a ride!
                    </li>
                    <li>In the map page, assign those who need a ride to a driver</li>
                    <li>Go to list to see the assigned passengers to their driver</li>
                </ol>
            </div>)}
           {/* <img className="importIcon" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Font_Awesome_5_solid_file-import.svg"/> */}
           <div className="welcome">
               <h4>A better way to coordinate rides!</h4>
           </div>
            <form className="homeForm" onSubmit={passDriverInformation}>
                <h3>Driver Information</h3>
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
                <button>Submit</button> 
                <p className="alert">
                    {driverAlert}
                </p>   
            </form>
            <form className="homeForm" onSubmit={passRideInformation}>
                <h3>Passenger Information</h3>
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
                <button>Submit</button>
                <p className="alert">{alert}</p>    
            </form>

        </div>
    )
}
export default Home;