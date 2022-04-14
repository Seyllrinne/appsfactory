import { useState } from "react"
import Prop from "./Components/Prop"

const App = () => {
    const [mostrar, setMostrar] = useState(0)
    const aumenta = (v) => {
        setMostrar(v);
    }
    //En el Prop estamos llamando a funcion del hijo 
    return (
        <div>
            <p><Prop
                llamadaAlPadre={aumenta} /></p>
            <input type="text" value={mostrar} />

        </div>
    )
}
export default App