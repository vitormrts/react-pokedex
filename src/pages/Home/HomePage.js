import { Header, SearchBar } from 'components';
import { PokemonCard } from 'components/Pokemon';
import { useEffect, useState } from 'react';
import { fetchApi, getPokemons } from 'services/api';
import { Container, Grid, Wrapper } from 'styles/common';
import { getFormattedPokemon } from 'utils';

const HomePage = () => {
  const [pokemonUrls, setPokemonsUrls] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const pokemonsMap = pokemons.map((pokemon) => <PokemonCard key={pokemon.id} content={pokemon} />);

  useEffect(() => {
    (async () => {
      const data = await getPokemons({ limit: 141 });
      const newPokemons = data.results.map(({ url }) => url);
      setPokemonsUrls([...pokemonUrls, ...newPokemons]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const promises = pokemonUrls.map(async (url) => {
        const pokemonData = await fetchApi(url);
        const specieData = await fetchApi(pokemonData.species.url);
        const evolutionData = await fetchApi(specieData.evolution_chain.url);
        const pokemon = getFormattedPokemon({
          pokemon: pokemonData,
          species: specieData,
          evolutions: evolutionData
        });
        return pokemon;
      });
      const newPokemons = await Promise.all(promises);
      setPokemons(newPokemons);
    })();
  }, [pokemonUrls]);

  return (
    <Wrapper>
      <Container>
        <Header />
        <SearchBar />
        <Grid>{pokemonsMap}</Grid>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
