import { useState } from "react"

const Rectangulo = () => {
    const [ancho, setAncho] = useState(0);
    const [alto, setAlto] = useState(0);
    const [superficie, setSuperficie] = useState(0);
    return <div>
        <input type="text" onChange={e => setAncho(e.target.value)} />
        <input type="text" onChange={e => setAlto(e.target.value)} />
        <button onClick={() => setSuperficie(ancho * alto)}>Calcular</button>
        <p>{superficie}</p>
    </div >
}
export default Rectangulo