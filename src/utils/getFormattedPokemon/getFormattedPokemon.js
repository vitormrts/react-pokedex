import { TYPE_COLORS } from 'base/constants';
import capitalizeString from 'utils/capitalizeString';

const getFormattedPokemon = ({ pokemon, species, evolutions }) => {
  const {
    name = '',
    id = 0,
    types = [],
    sprites = {
      front_default: ''
    },
    abilities = [],
    stats = []
  } = pokemon;

  const {
    flavor_text_entries: flavorTextEntries = [],
    genera = [],
    capture_rate: captureRate = 0,
    growth_rate: { name: growthRate = '' },
    habitat = {
      name: ''
    }
  } = species;

  const { chain } = evolutions;

  const formattedTypes = types.map(({ type }) => ({
    name: type.name,
    color: TYPE_COLORS[type.name]
  }));

  const formattedAbilities = abilities.map(({ ability, is_hidden: isHidden }) => ({
    name: ability.name,
    isHidden
  }));

  const formattedStats = stats.map(({ base_stat: baseStat, stat }) => ({
    name: capitalizeString(stat.name),
    baseStat
  }));

  const getEvolution = (evolution, results = []) => {
    if (!evolution) {
      return results;
    }

    const {
      evolves_to: evolvesTo = [],
      evolution_details: evolutionDetails = [],
      species: { name: speciesName = '' } = {}
    } = evolution;

    results.push({
      name: capitalizeString(speciesName),
      minLevel: evolutionDetails[0]?.min_level
    });

    return getEvolution(evolvesTo[0], results);
  };

  const formattedEvolutions = getEvolution(chain);

  const description = flavorTextEntries.find(({ language }) => language.name === 'en').flavor_text;

  const generaName = genera.find(({ language }) => language.name === 'en').genus;

  return {
    abilities: formattedAbilities,
    captureRate,
    description,
    genera: generaName,
    growthRate,
    habitat: capitalizeString(habitat.name),
    id,
    image: sprites.front_default,
    name: capitalizeString(name),
    stats: formattedStats,
    types: formattedTypes,
    evolutions: formattedEvolutions
  };
};

export default getFormattedPokemon;
