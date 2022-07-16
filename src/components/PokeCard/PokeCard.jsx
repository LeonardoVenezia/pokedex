const PokeCard = ({ name, number, photo }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{number}</p>
            <img src={photo} alt={name} />
        </div>
    );
};

export default PokeCard;