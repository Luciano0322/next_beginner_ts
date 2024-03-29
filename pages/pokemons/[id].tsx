import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import imageLoader from "../../imageLoader";
import { PokemonByName, PokemonListProps } from "../../types";

function PokemonPage({pokemon}: {pokemon: PokemonByName.RootObject}) {
  const router = useRouter();
  console.log(router.query.id);
  
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

// 如果用了getServerSideProps 就不能再採 static mode
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.id}`)
  const pokemon = await res.json();
  return {
    props: {
      pokemon
    }
  }
}

export default PokemonPage;