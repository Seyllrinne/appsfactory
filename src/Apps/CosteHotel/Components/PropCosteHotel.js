
const PropCosteHotel = ({ noches }) => {
    const CosteHotel = noches * 140;

    return <div>Coste Hotel:{CosteHotel}</div>;
}

export default PropCosteHotel;