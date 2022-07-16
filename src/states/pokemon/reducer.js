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
            state.pokemons = action.payload;
            state.isLoading = false;
        },
        selectDefault: (state) => {
            state.selectedPokemons = state.pokemons.slice(0, 20); // todo: constante
        },
        selectZA: (state) => {
            state.selectedPokemons = state.pokemons.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            })
            state.selectedPokemons = state.pokemons.slice(0, 20); // todo: constante
        },
        selectAZ: (state) => {
            state.selectedPokemons = state.pokemons.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
            state.selectedPokemons = state.pokemons.slice(0, 20); // todo: constante
        },
        selectHighest: (state) => {
            state.selectedPokemons = state.pokemons.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
            state.selectedPokemons = state.pokemons.slice(0, 20); // todo: constante
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
    }
});

export default pokemonSlice;
