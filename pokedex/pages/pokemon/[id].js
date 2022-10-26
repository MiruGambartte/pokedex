import React from 'react'

 const PokemonByidPage = () => {
    const router = useRouter();
    console.log(router.query.id)
  return (
    <h1>hola pokemon.{router.query.id} </h1>
  );
}
export default PokemonByidPage
