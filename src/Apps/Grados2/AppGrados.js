import PropGrados from "./components/PropGrados";
import { useState } from "react"

const AppGrados = () => {
    const [total, setTotal] = useState(0);

    return (
        <div>
            <input type="text" onChange={e => setTotal(e.target.value * 9 / 5 + 32)} />
            <p><PropGrados total={total} /></p>
        </div>

    )
}
export default AppGrados