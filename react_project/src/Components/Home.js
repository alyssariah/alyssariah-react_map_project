import React, {useState} from "react"

function Home(props){
    //setting state
    const [driverName, setDriverName] = useState("")
    const [driverAddress, setDriverAddress] = useState("")
    const [rideName, setRideName] = useState("")
    const [rideAddress, setRideAddress] = useState("")
    const [driverAlert, setDriverAlert] = useState("")
    const [alert, setAlert] = useState("")

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
        setDriverAlert(driverName + " has been added to your driver list")
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
        setAlert(rideName + " has been added to your ride list")
        setRideName("")
        setRideAddress("")
    }

    return(
        <div className="information">
           <h2>Home</h2>
           <h3>Welcome to the App that helps you coordinate rides!</h3>
           <h4>Instructions of how to use App</h4>
            <ol>
                <li>Enter information below one at a time for each person 
                and they will be added to the map</li>
                <li>After you submit, check out the map and list pages for drivers and who needs a ride!
                </li>
                <li>In the map page, assign those who need a ride to a driver</li>
                <li>Go to list to see it those who need a ride assigned to their driver</li>
            </ol>
           <p className="alert">{driverAlert}</p>
            <form className="homeForm" onSubmit={passDriverInformation}>
                <h3>Driver Information</h3>
                <input className="driverName"
                    type="text" 
                    placeholder="Please insert driver name" 
                    onChange={handleDriverName} 
                    value={driverName}
                    required="required"/>
                <input className="driverAddress"
                    type="text" 
                    placeholder="Please insert driver address" 
                    onChange={handleDriverAddress} 
                    value={driverAddress}
                    required="required"/>
                <button>Submit</button>    
            </form>
            <p className="alert">{alert}</p>
            <form className="homeForm" onSubmit={passRideInformation}>
                <h3>Who Needs a Ride Information</h3>
                <input className="driverName"
                    type="text" 
                    placeholder="Please insert name" 
                    onChange={handleRideName} 
                    value={rideName}
                    required="required"/>
                <input className="driverAddress"
                    type="text" 
                    placeholder="Please insert address" 
                    onChange={handleRideAddress} 
                    value={rideAddress}
                    required="required"/>
                <button>Submit</button>    
            </form>

        </div>
    )
}
export default Home;