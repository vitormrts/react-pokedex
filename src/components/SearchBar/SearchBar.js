import * as S from './SearchBar.styles';

const SearchBar = () => {
  return (
    <S.SearchBar>
      <S.InputPokemon placeholder="Search your Pokémon!" />
      <S.SelectType />
    </S.SearchBar>
  );
};

export default SearchBar;
