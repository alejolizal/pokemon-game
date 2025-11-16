//crear interface PokemonListResponse con count, next,previous y results
export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResult[];
}

export interface PokemonListResult {
  name: string;
  url: string;
}
