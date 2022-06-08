import { TYPE_COLORS } from 'base/constants';
import { fetchUrl } from 'services/api';
import capitalizeString from 'utils/capitalizeString';

const getFormattedPokemon = async ({ pokemon } = {}) => {
  const {
    name = '',
    id = 0,
    types = [],
    sprites = {
      front_default: ''
    },
    abilities = [],
    stats = [],
    species = {
      url: ''
    }
  } = pokemon;

  const speciesData = await fetchUrl(species.url);

  const {
    flavor_text_entries: flavorTextEntries = [],
    genera = [],
    capture_rate: captureRate = 0,
    growth_rate: growthRate,
    habitat,
    evolution_chain: evolutionChain = {
      url: ''
    }
  } = speciesData;

  const evolutionData = await fetchUrl(evolutionChain.url);

  const { chain } = evolutionData;

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
      species: { name: speciesName = '', url: speciesUrl } = {}
    } = evolution;

    results.push({
      name: capitalizeString(speciesName),
      url: speciesUrl,
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
    growthRate: growthRate?.name || '',
    habitat: capitalizeString(habitat?.name || ''),
    id,
    image: sprites.front_default,
    name: capitalizeString(name),
    stats: formattedStats,
    types: formattedTypes,
    evolutions: formattedEvolutions
  };
};

export default getFormattedPokemon;
