const { getPokemonData } = require('./pokeApi');
const cache = require('memory-cache');

const getPokemonDataBatch = async (pokemonNames) => {
  const promises = pokemonNames.map((pokemonName) => getPokemonData(pokemonName));
  return Promise.all(promises);
};

const clearCache = () => {
  cache.clear();
};

const main = async () => {
  const pokemonNames = ['pikachu', 'bulbasaur', 'charmander'];
  const pokemonDataBatch = await getPokemonDataBatch(pokemonNames);
  console.log('Dados do lote:', pokemonDataBatch);
};

main();