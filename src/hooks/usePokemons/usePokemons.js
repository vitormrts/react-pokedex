import { PokemonContext } from 'contexts/PokemonContext/PokemonContext';
import { useContext } from 'react';

const usePokemons = () => useContext(PokemonContext);

export default usePokemons;
