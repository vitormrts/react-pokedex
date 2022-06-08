import { useState } from 'react';
import Input from './Input';
import * as S from './SearchBar.styles';
import Select from './Select';

const SearchBar = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [query, setQuery] = useState();

  const props = {
    selectedOptions,
    setSelectedOptions,
    query,
    setQuery
  };

  return (
    <S.SearchBar>
      <Input {...props} />
      <Select {...props} />
    </S.SearchBar>
  );
};

export default SearchBar;
