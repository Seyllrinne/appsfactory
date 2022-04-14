import { useState } from "react";
import PropCosteHotel from "./Complements/PropCosteHotel";
import PropCosteViaje from "./Complements/PropCosteViaje"


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