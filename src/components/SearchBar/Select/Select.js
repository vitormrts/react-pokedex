import { usePersistedState, usePokemons } from 'hooks';
import usePaginator from 'hooks/usePaginator';
import { ArrowDownIcon } from 'icons';
import { useEffect, useState } from 'react';
import { fetchUrl } from 'services/api';
import { getFilteredPokemons, capitalizeString } from 'utils';
import * as S from './Select.styles';

const Select = ({ query, selectedOptions, setSelectedOptions }) => {
  const [storage] = usePersistedState('options');
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { setPokemons, allPokemons } = usePokemons();
  const { setCurrentPage } = usePaginator();

  const toggleState = () => setIsOpen(!isOpen);

  const changeSelectedOption = ({ name }) => {
    let newOptions = [...selectedOptions];
    toggleState();
    if (selectedOptions.includes(name)) {
      newOptions = selectedOptions.filter((option) => option !== name);
    } else {
      newOptions.push(name);
    }
    setCurrentPage(1);
    const filteredPokemons = getFilteredPokemons({
      query,
      selectedOptions: newOptions,
      pokemons: allPokemons
    });
    setPokemons(filteredPokemons);
    setSelectedOptions(newOptions);
  };

  useEffect(() => {
    if (storage) {
      setOptions(storage);
      return;
    }

    const fetchOptions = async () => {
      const { count: totalTypes } = await fetchUrl('https://pokeapi.co/api/v2/type');
      const { results } = await fetchUrl(`https://pokeapi.co/api/v2/type?limit=${totalTypes}`);
      const types = results
        .map(({ name, url }) => ({ name, url }))
        .sort((a, b) => a.name.localeCompare(b.name));
      setOptions(types);
      localStorage.setItem('options', JSON.stringify(types));
    };
    fetchOptions();
  }, []);

  const optionsMap = options.map(({ name }) => (
    <S.ListItem
      onClick={() => changeSelectedOption({ name })}
      key={name}
      selected={selectedOptions.includes(name)}>
      {capitalizeString(name)}
    </S.ListItem>
  ));

  return (
    <S.DropDownContainer>
      <S.DropDownHeader onClick={toggleState} isOpen={isOpen}>
        <S.Image src="/assets/images/pokeball-gray.png" alt="pokeball" />
        <S.Title>Type</S.Title>
        <ArrowDownIcon />
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownListContainer>
          <S.DropDownList>{optionsMap}</S.DropDownList>
        </S.DropDownListContainer>
      )}
    </S.DropDownContainer>
  );
};

export default Select;
