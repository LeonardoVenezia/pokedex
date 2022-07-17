import pokemonSlice from "./reducer";
import { getPokemons } from "../../services/pokemons";

const {
    setPokemons,
    selectDefault,
    selectAZ,
    selectZA,
    selectHighest,
    selectLowest,
} = pokemonSlice.actions;

export const fetchPokemons = () => async dispatch => {
    const response = await getPokemons();
    await dispatch(setPokemons(response));
    // try {
    // }
    // catch (e) {
    //     return console.error([e.message]);
    // }
};

export const selectPokemons = () => async dispatch => {
    await dispatch(selectDefault());
};

export const filterAZ = () => async dispatch => {
    await dispatch(selectAZ());
};

export const filterZA = () => async dispatch => {
    await dispatch(selectZA());
};

export const filterHighest = () => async dispatch => {
    await dispatch(selectHighest());
};

export const filterLowest = () => async dispatch => {
    await dispatch(selectLowest());
};
