
import { useState } from "react"

const Conversor = () => {

    const [total, setTotal] = useState(0);
    return <div>
        <input type="text" onChange={e => setTotal(e.target.value * 2)} />
        <p>{total}</p>
    </div >
}
export default Conversor