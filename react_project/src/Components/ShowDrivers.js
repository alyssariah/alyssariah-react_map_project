import React, {useState, useEffect} from "react"

function ShowDrivers(props){
    const [plusStatus, setPlusStatus] = useState(true)
    
    useEffect (()=>{
        if (props.currentPassenger.assign === props.object.name){
            setPlusStatus(false)
        }
    }, []) 

    const _onClick = () => {
        if(plusStatus === true){
            for(let i= 0; i< props.rideList.length; i++){
                if(props.currentPassenger === props.rideList[i]){
                    props.rideList[i].assign = props.object.name;
                }
            } 
            props.resetPage() 
            setPlusStatus(false)
        } else {
            for(let i= 0; i< props.rideList.length; i++){
                if(props.currentPassenger === props.rideList[i]){
                    props.rideList[i].assign = "unassigned";
                }
            } 
            props.resetPage()
            setPlusStatus(true)
        }    
    }
    return(
        <a onClick={_onClick}>
            <li className="currentDriver"> 
                {props.object.name} 
                <div className="plusSign">  
                {plusStatus ? "+": "-"}
                </div>
            </li>
        </a>
     
    )
}

export default ShowDrivers;