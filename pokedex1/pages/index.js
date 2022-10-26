import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card, Grid, Row, Text } from '@nextui-org/react';
const index = () => {
  const [pokemons, setPokemons] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=200')
      setPokemons(response.data.results.map((pokemon,index) => ({...pokemon,id:index+1,  img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`,})))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
   getData();
 
  }, [])
 

  return (
    <div>
      <h1>Mis {pokemons.length} pokemons</h1>
      <Grid.Container gap={2  }>
        {pokemons.map(pokemon => (
          <Grid xs={4}>
          <Card key={pokemon.name}>
            <Card.Body>
             <Card.Image src={pokemon.img} alt={pokemon.name} height={200}/>
            </Card.Body>
            <Card.Footer>
              <Row justify='space-between'>
            <Text h1 css={{textTransform:'capitalize'}}>{pokemon.name}</Text>
            <Text h1># {pokemon.id}</Text>
            </Row>
            </Card.Footer>
          </Card>
          </Grid>
        ))}
     
      </Grid.Container>
    </div>
  )
}

export default index
