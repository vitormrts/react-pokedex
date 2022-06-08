import { TOTAL_POKEMONS } from 'base/constants';
import { usePersistedState } from 'hooks';
import { createContext, useEffect, useMemo, useState } from 'react';
import { fetchUrl } from 'services/api';
import { getPokemon } from 'utils';

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [storage] = usePersistedState('pokemons');

  useEffect(() => {
    if (storage) {
      setAllPokemons(storage);
      setPokemons(storage);
      setIsLoading(false);
      return;
    }

    const fetchAllPokemons = async () => {
      const data = await fetchUrl(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`);
      const pokemonUrls = data.results.map(({ url }) => url);
      const promises = pokemonUrls.map(async (url) => {
        const pokemonData = await fetchUrl(url);
        const pokemon = getPokemon({
          pokemon: pokemonData
        });
        return pokemon;
      });
      const results = await Promise.all(promises);
      setAllPokemons(results);
      setPokemons(results);
      setIsLoading(false);
      localStorage.setItem('pokemons', JSON.stringify(results));
    };
    fetchAllPokemons();
  }, []);

  const memoized = useMemo(
    () => ({
      isLoading,
      pokemons,
      allPokemons,
      setIsLoading,
      setPokemons,
      setAllPokemons
    }),
    [isLoading, allPokemons, pokemons, setIsLoading, setPokemons, setAllPokemons]
  );

  return <PokemonContext.Provider value={memoized}>{children}</PokemonContext.Provider>;
};

export default PokemonContextProvider;
