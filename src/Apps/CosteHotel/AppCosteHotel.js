import { useState } from "react";
import PropCosteHotel from "./Components/PropCosteHotel";
import PropCosteViaje from "./Components/PropCosteViaje"


const AppCosteHotel = () => {

    const [noches, setNoches] = useState(0);

    return (

        <div>
            <input type="text" onChange={e => setNoches(e.target.value)} />
            <br /><br />
            <PropCosteHotel noches={noches} />
            <PropCosteViaje noches={noches} />
        </div>
    )
}

export default AppCosteHotel;