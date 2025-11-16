import { ref, onMounted } from 'vue';
import { GameStatus, type PokemonListResponse } from '@/modules/pokemon/interfaces';
import { pokemonApi } from '@/modules/pokemon/api/pokemonApi';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  //un const que llame a la api de pokemon
  const getPokemon = async () => {
    const { data: pokemonList } = await pokemonApi.get<PokemonListResponse>('/?limit=151');
    console.log(pokemonList.results);
  };
  //generar un onmount
  onMounted(() => {
    getPokemon();
  });
  return {
    gameStatus,
  };
};
