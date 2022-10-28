import Image from "next/image";
import imageLoader from "../../imageLoader";
import { PokemonByName, PokemonListProps } from "../../types";

function PokemonPage({pokemon}: {pokemon: PokemonByName.RootObject}) {
  return (
    <>
      <div>Pokemon page</div>
      <h1>{pokemon.name}</h1>
      <Image
        loader={imageLoader}
        unoptimized
        alt={`${pokemon.name}_front`}
        src={pokemon.sprites.front_default}
        width={200}
        height={200}
      />
      <Image
        loader={imageLoader}
        unoptimized
        alt={`${pokemon.name}_back`}
        src={pokemon.sprites.back_default}
        width={200}
        height={200}
      />
    </>
  );
}
// for 生成靜態頁面
export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  const { results }:PokemonListProps = await res.json();
  return {
    paths: results.map((pokemon) => {
      return { params: { id: pokemon.name } }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { id: string }}) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const pokemon = await res.json();
  return {
    props: {
      pokemon
    }
  }
}

export default PokemonPage;