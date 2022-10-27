export interface PokemonNameUrl {
  name: string;
  url: string;
}

export interface PokemonListProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonNameUrl[];
}