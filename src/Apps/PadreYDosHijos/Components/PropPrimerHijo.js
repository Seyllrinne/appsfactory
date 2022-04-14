import { useState } from "react"

const PropPrimerHijo = ({ llamadaAlPadre }) => {

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    //const [total, setTotal] = useState(0);

    return (
        <div>
            <input type="text" onChange={e => setValor1(e.target.value)} />
            <input type="text" onChange={e => setValor2(e.target.value)} />
            <button onClick={() => {
                //setTotal(valor1 + valor2)
                llamadaAlPadre(parseInt(valor1) + parseInt(valor2));
            }}>calcular</button>


        </div>

    )
}
export default PropPrimerHijo