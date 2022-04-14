import{useState} from "react"

const ConversorCentigrados=()=>{

    const [grados, setGrados]=useState(0)

    return(
        <div>
        <input type="text" onChange={e=>setGrados(e.target.value*9/5+32)}/>
        <p>{grados}</p>
        </div>
    )
}
export default ConversorCentigrados