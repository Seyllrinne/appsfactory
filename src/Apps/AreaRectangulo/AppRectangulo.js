import { useState } from "react";
import PropRectangulo from "./Components/PropRectangulo";

const AppRectangulo=()=>{ //padre

    const[ancho, setAncho]=useState(0);
    const[alto, setAlto]=useState(0);
    const[total, setTotal]=useState(0);

    return(
        <div>
        <input type="text" onChange={e=>setAncho(e.target.value)}/>
        <input type="text" onChange={e=>setAlto(e.target.value)}/>
        <button onClick={ ()=>setTotal(alto*ancho)}>calcular</button>
        <p><PropRectangulo total={total}/></p>
        </div>
    )
}

export default AppRectangulo