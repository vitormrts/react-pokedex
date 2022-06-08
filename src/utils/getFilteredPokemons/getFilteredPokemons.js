const getFilteredPokemons = ({ query = '', selectedOptions = [], pokemons }) => {
  const results = pokemons.filter((pokemon) => {
    const typesNames = pokemon.types.map((type) => type.name);
    const pokemonByType = selectedOptions.every((option) => typesNames.includes(option));
    const pokemonByName = pokemon.name.toLowerCase().includes(query.toLowerCase());
    return pokemonByType && pokemonByName;
  });

  return results;
};

export default getFilteredPokemons;
