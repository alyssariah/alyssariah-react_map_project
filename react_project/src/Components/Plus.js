import React, {useState, useEffect} from "react"

function Plus(props){
    const [plusStatus, setPlusStatus] = useState(true)
    useEffect (()=>{
        if(props.selectDriver === props.object.name){
            console.log("you already have a driver")
            setPlusStatus(false)
        }
    }, []) 

    const _onClick = () => {
        if(plusStatus === true){
            props.assignToDriver(props.object.name) 
            setPlusStatus(false)
        } else {
            props.unassignDriver()
            props.setSelectDriver("")
            setPlusStatus(true)
        }    
    }
    return(
        <a onClick={_onClick}>
        <li className="currentDriver"> {props.object.name} 
            <div className="plusSign">  
                {plusStatus ? "+": "-"}
            </div>
        </li>
        </a>
     
    )
}

export default Plus;