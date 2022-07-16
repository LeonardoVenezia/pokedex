export const getPokemons = async () => {
    return await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((r) => r.json())
        .then((response) => response);
};