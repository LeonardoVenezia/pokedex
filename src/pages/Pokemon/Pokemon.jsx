import { selectedPokemons } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Pokemon = () => {
    const params = useParams();
    const { selectedPokemons } = useSelector(state => state.pokemon);
    const [pokedata, setPokedata] = useState({});
    useEffect(() => {
        const id = Number(params.id);
        const findPoke = selectedPokemons.find((i) => i.id === id);
        setPokedata(findPoke);
    }, []);
    return (
        <div>
            <p>{pokedata?.name}</p>
            <ul>
                {
                    pokedata?.types?.map((a) => (
                        <li key={a.type.name}>{a.type.name}</li>
                    ))
                }
            </ul>
            <img src={pokedata?.sprites?.front_default} alt="" />
            <h2>Abilities</h2>
            <ul>
                {
                    pokedata?.abilities?.map((a) => (
                        <li key={a.ability.name}>{a.ability.name}</li>
                    ))
                }
            </ul>
            <h3>Moves</h3>
            <ul>
                {
                    pokedata?.moves?.map((a) => (
                        <li key={a.move.name}>{a.move.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokemon;
