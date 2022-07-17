import { createSlice } from "@reduxjs/toolkit";
import { order } from "../../utils/utils";
import { POKE_AMOUNST } from "../../utils/constans";

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],
        selectedPokemons: [],
        isLoading: false,
    },
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
            state.isLoading = false;
        },
        selectDefault: (state) => {
            state.selectedPokemons = state.pokemons.slice(0, POKE_AMOUNST);
        },
        selectZA: (state) => {
            const newPoke = state.pokemons.sort((a, b) => order(a.name, b.name));
            state.selectedPokemons = newPoke.slice(0, POKE_AMOUNST);
        },
        selectAZ: (state) => {
            const newPoke = state.pokemons.sort((a, b) => order(b.name, a.name));
            state.selectedPokemons = newPoke.slice(0, POKE_AMOUNST);
        },
        selectLowest: (state) => {
            state.selectedPokemons = state.pokemons.sort((a, b) => order(b.id, a.id))
            state.selectedPokemons = state.pokemons.slice(0, POKE_AMOUNST);
        },
        selectHighest: (state) => {
            state.selectedPokemons = state.pokemons.sort((a, b) => order(a.id, b.id))
            state.selectedPokemons = state.pokemons.slice(0, POKE_AMOUNST);
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
    }
});

export default pokemonSlice;
