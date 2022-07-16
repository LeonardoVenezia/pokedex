import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],
        selectedPokemons: [],
        isLoading: false,
    },
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload.results;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
    }
});

export default pokemonSlice;
