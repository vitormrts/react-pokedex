import { usePokemons } from 'hooks';
import { getFilteredPokemons } from 'utils';
import * as S from './Input.styles';

const Input = ({ query, setQuery, selectedOptions }) => {
  const { allPokemons, setPokemons } = usePokemons();

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredPokemons = getFilteredPokemons({ query, selectedOptions, pokemons: allPokemons });
    setPokemons(filteredPokemons);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputPokemon
        type="text"
        placeholder="Search your Pokémon!"
        value={query}
        onChange={handleChange}
      />
      <S.Button type="submit" onClick={handleSubmit} />
    </S.Form>
  );
};

export default Input;
