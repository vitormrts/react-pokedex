const fetchApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return {};
  }
};

const getPokemons = async ({ limit = 20, offset = 0 } = {}) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const data = await fetchApi(url);
  return data;
};

export { getPokemons, fetchApi };
