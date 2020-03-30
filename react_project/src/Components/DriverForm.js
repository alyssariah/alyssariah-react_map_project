import React,{useState} from "react"

function DriverForm(props){
    const [address, setAddress] = useState("")


    //handleChange function to take in input 
    const handleChange =(e) => {
        setAddress(e.target.value)
    }

    //after submiting address, this function changes spaces into pluses
    const changeAddress = async(e) =>{
        e.preventDefault()
        let str = address.replace(/\s/g, '+');
        console.log("added with pluses", str)
        let res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${str},+CA&key=AIzaSyDJ56l2Y_6K3vN5rH30aKddRVljnEsuR_Y`)
        let json = await res.json();
        let place = json.results[0].geometry.location
        props.coordinates(place.lat, place.lng)
        setAddress("")
    }


    return(
        <form onSubmit={changeAddress}>
        <input 
            type="text" 
            placeholder="Search for driver address" 
            onChange={handleChange} 
            value={address}/>
        </form>
    )
}
export default DriverForm