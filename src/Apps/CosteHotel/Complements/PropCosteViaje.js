

const PropCosteviaje = ({ noches }) => {
    console.log(noches)
    const costeViaje = 40 * noches
    if (noches >= 7) {
        costeViaje = costeViaje - 50;
        costeViaje -= 50
    }
    else if (noches >= 3) {
        //costeViaje = costeViaje - 20
        costeViaje -= 20
    }

    return (
        <div>Coste Alquiler:{costeViaje}</div>
    )
}
export default PropCosteviaje