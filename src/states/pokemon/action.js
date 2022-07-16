import pokemonSlice from "./reducer";
import { getPokemons } from "../../services/pokemons";

const { setPokemons } = pokemonSlice.actions;

export const fetchPokemons = () => async dispatch => {
    const response = await getPokemons();
    await dispatch(setPokemons(response));
    // try {
    // }
    // catch (e) {
    //     return console.error([e.message]);
    // }
};
