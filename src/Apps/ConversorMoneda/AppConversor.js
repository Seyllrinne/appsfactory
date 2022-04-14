import PropConversor from "../PropConversor"
import { useState } from "react"

const AppConversor=()=>{

    const [total, setTotal]=useState(0)
    return (
    <div>
        <input type="text" onChange={e => setTotal(e.target.value * 2)} />
        <p><PropConversor total={total}/></p>
    </div >)
}

export default AppConversor