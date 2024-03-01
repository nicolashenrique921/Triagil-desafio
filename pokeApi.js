
const axios = require('axios');
const cache = require('memory-cache');

const getPokemonData = async (pokemonName) => {
  const cacheKey = `pokemon-${pokemonName}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log('Dados do cache:', cachedData);
    return cachedData;
  }

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    const pokemonData = response.data;

    cache.put(cacheKey, pokemonData, 5 * 60 * 1000);

    console.log('Dados da PokeAPI:', pokemonData);
    return pokemonData;
  } catch (error) {
    console.error('Erro ao obter dados do Pokémon:', error.message);
    throw error;
  }
};

module.exports = { getPokemonData };
