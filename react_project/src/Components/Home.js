import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import "./CSS/Home.css"

function Home(props){
    //setting state
    const [driverName, setDriverName] = useState("")
    const [driverAddress, setDriverAddress] = useState("")
    const [rideName, setRideName] = useState("")
    const [rideAddress, setRideAddress] = useState("")
    const [driverAlert, setDriverAlert] = useState("")
    const [alert, setAlert] = useState("")
    const [showInfo, setShowInfo] = useState(false)
    const [displayDriverForm, setDisplayDriverForm] = useState(false)
    const [displayRideForm, setDisplayRideForm] = useState(false)

    //useEffect
    useEffect(()=>{
        if(props.driverList.length===0){
            setDisplayDriverForm(true)
        }
        if(props.rideList.length === 0){
            setDisplayRideForm(true)
        }
    })

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
            {driverName} has been added to your map!</div>)
        setDriverName("")
        setDriverAddress("")
        setDisplayDriverForm(false)
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
            {rideName} has been added to your map!</div>)
        setRideName("")
        setRideAddress("")
        setDisplayRideForm(false)
    }
    //making the driver List and ride List
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

    return(
        <div className="information">
            <header>
                <h2>Carpool <span>coordinator</span></h2>
                <img onClick={()=>{setShowInfo(!showInfo)}}className="helpIcon" src="https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-512.png"/>
            </header> 
            <nav>
                <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png"/><br/>Home</Link>
                <Link to="/map"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg"/><br/>Map</Link>
                <Link to="/list"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Noun_project_list_icon_1380018_cc.svg"/><br/>List</Link>
            </nav>   
            {showInfo && (<div className="instructions">
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
           <div className="allLists">
            <div className="homeForm">
                <div className="titleList">
                    <h3>Driver List</h3>
                    <img className="addPerson" onClick={()=>setDisplayDriverForm(!displayDriverForm)}src="https://storage.needpix.com/rsynced_images/user-2493635_1280.png"/>
                </div>
                {displayDriverForm && (<form onSubmit={passDriverInformation}>
                    {/* <h3>Driver Information</h3> */}
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
                <ul>
                    {makeDriverList}
                </ul>
                <p className="alert">{driverAlert}</p> 
            </div>
            <div className="homeForm">
                <div className="titleList">
                    <h3>Passenger List</h3>
                    <img className="addPerson" onClick={()=>setDisplayRideForm(!displayRideForm)} src="https://storage.needpix.com/rsynced_images/user-2493635_1280.png"/>
                </div>   
                {displayRideForm && (<form onSubmit={passRideInformation}>
                {/* <h3>Passenger Information</h3> */}
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
                <ul>
                    {makeRideList}
                </ul>
                <p className="alert">{alert}</p>  
            </div>
            </div>
        </div>
    )
}
export default Home;