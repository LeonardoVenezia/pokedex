import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Details from "../../components/Details/Details";
import { fetchSinglePokemon } from "../../services/pokemons";

const Pokemon = () => {
    const params = useParams();
    const { selectedPokemons } = useSelector(state => state.pokemon);
    const [pokedata, setPokedata] = useState(null);
    useEffect(() => {
        (async () => {
            const id = Number(params.id);
            let findPoke = selectedPokemons.find((i) => i.id === id);
            if (!findPoke) {
                findPoke = await fetchSinglePokemon(params.id);
            }
            setPokedata(findPoke);
        })()
    }, []);
    return (
        <Layout
            title={pokedata?.name}
            type={pokedata?.types[0].type.name}
        >
            <Details
                name={pokedata?.name}
                types={pokedata?.types}
                img={pokedata?.sprites?.front_default}
                imgShiny={pokedata?.sprites?.front_shiny}
                abilities={pokedata?.abilities}
            />
        </Layout>
    );
};

export default Pokemon;
