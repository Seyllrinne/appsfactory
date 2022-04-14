import { useState } from "react";

const Prop = ({ llamadaAlPadre }) => {
    const [sumar, setSumar] = useState(0);

    return (
        <div>
            <button onClick={() => {
                const NewValor = sumar != 0 ? sumar - 1 : 0
                setSumar(NewValor);

                llamadaAlPadre(NewValor);//llamamos a la Proppara luego transformarla a funsion en la App//
                // const NewValor= sumar!=0?valor-1:0;) 
            }
            }>-</button>
            <input type="text" value={sumar} />
            <button onClick={() => {
                setSumar(sumar + 1); llamadaAlPadre(sumar + 1);

            }}>+</button>

        </div>
    )
}

export default Prop