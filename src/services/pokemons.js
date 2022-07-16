export const getPokemons = async () => {
    return await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((r) => r.json())
        .then((response) => fillData(response.results));
};

const fetchSinglePokemon = async (name) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((r) => r.json())
        .then((response) => response);
};

const fillData = async (pokemons) => {
    return await Promise.all(
        pokemons.map((poke) => fetchSinglePokemon(poke.name))
    );
};