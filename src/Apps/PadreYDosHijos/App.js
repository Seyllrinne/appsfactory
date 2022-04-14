import { useState } from "react"
import PropPrimerHijo from "./Components/PropPrimerHijo"
import PropSegundoHijo from "./Components/PropSegundoHijo"

const App = () => {

    const [valor, setValor] = useState(0);

    const muestra = (v) => {
        setValor(v)
    }

    return (
        <div>
            <PropPrimerHijo llamadaAlPadre={muestra} />
            <PropSegundoHijo valorHijo={valor} />

        </div>
    )
}
export default App