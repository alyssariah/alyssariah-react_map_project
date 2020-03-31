import React, {useState} from "react"

function Plus(props){
    const [plusStatus, setPlusStatus] = useState(true)
    return(
        <a onClick={()=> {props.assignToDriver(props.object.name) 
                          setPlusStatus(!plusStatus)}}>
        <li className="currentDriver"> {props.object.name} 
            <div className="plusSign">  
                {plusStatus ? "+": "-"}
            </div>
        </li>
        </a>
     
    )
}

export default Plus;