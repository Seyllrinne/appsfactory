import PropCentigrados from "../../components/PropCentigrados.js"
import {useState} from "react"

const AppCentigrados=()=>{

     const [total, setTotal]=useState(0)
    return(

        <div>
            <input type="text" onChange={e=>setTotal(e.target.value*9/5+32)}/>
            <p><PropCentigrados total={total}/></p>
        </div>

    )
}
export default AppCentigrados