import { Header, Paginator, SearchBar } from 'components';
import { PokemonCard } from 'components/Pokemon';
import { usePokemons } from 'hooks';
import usePaginator from 'hooks/usePaginator';
import { Container, Grid, Wrapper } from 'styles/common';

const HomePage = () => {
  const { pokemons, isLoading } = usePokemons();
  const { initial, final } = usePaginator();

  const pokemonsMap = pokemons
    .slice(initial, final)
    .map((pokemon) => <PokemonCard key={pokemon.id} content={pokemon} />);

  return (
    <Wrapper>
      <Container>
        <Header />
        <SearchBar />
        {!isLoading && (
          <>
            <Grid>{pokemonsMap}</Grid>
            <Paginator />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default HomePage;
