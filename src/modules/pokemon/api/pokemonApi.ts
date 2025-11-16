//importando axios, crea un const  que utilice el servicio https://pokeapi.co/api/v2/pokemon
import axios from 'axios';

const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export { pokemonApi };
