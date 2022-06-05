import { TYPE_COLORS } from 'base/constants';
import capitalizeString from 'utils/capitalizeString';

const getFormattedPokemon = ({ pokemon, specie }) => {
  const {
    name = '',
    id = 0,
    types = [],
    sprites = {
      front_default: ''
    }
  } = pokemon;

  const { flavor_text_entries: flavorTextEntries = [], genera = [] } = specie;

  const formattedTypes = types.map(({ type }) => ({
    name: type.name,
    color: TYPE_COLORS[type.name]
  }));

  const description = flavorTextEntries.find(({ language }) => language.name === 'en').flavor_text;

  const generaName = genera.find(({ language }) => language.name === 'en').genus;

  return {
    id,
    name: capitalizeString(name),
    types: formattedTypes,
    image: sprites.front_default,
    description,
    genera: capitalizeString(generaName)
  };
};

export default getFormattedPokemon;
