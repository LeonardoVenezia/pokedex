import { useState } from "react";
import "./Details.scss";

const Details = ({ name, types, img, imgShiny, abilities }) => {
    const [shiny, setShiny] = useState(false);
    return (
        <section className="Details">
            <img
                className="Details__img"
                src={shiny ? imgShiny : img}
                onClick={() => setShiny(!shiny)}
                alt={name}
            />
            <h3 className="Details__subTitle">Types</h3>
            <ul className="Details__types">
                {
                    types?.map((a) => (
                        <li key={a.type.name}>
                            <p className="Details__type">{a.type.name}</p>
                        </li>
                    ))
                }
            </ul>
            <h3 className="Details__subTitle">Abilities</h3>
            <ul>
                {
                    abilities?.map((a) => (
                        <li key={a.ability.name}>{a.ability.name}</li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Details;
