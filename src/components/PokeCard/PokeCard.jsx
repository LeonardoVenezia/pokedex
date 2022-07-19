import "./PokeCard.scss";

const PokeCard = ({ name, number, photo, type }) => {
    return (
        <div className={`PokeCard ${type}`}>
            <p className={`PokeCard__name ${type}`}>{number}. {name}</p>
            <img
                className="PokeCard__img"
                src={photo}
                alt={name}
            />
        </div>
    );
};

export default PokeCard;