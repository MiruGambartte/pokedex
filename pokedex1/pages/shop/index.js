import { Card, Grid, Text } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'


import { mockApi } from '../../apis'
import Layout from '../../components/layout/layout'
import { Navbar } from '../../components/ui/Navbar'
export const ShopPage = () => {
const [productos, setProductos] = useState([])
const getProduct = async ()=>{
   
    await mockApi.get("/remeras").then(response =>{
        setProductos(response.data)
    })
}

useEffect(() => {
    getProduct()
}, [])

  return (
    
    <Layout title={"Tienda Pokemon"}>
        <Navbar/>
        <Text h1>Tienda</Text>
        <Grid.Container gap={2}>
            {productos.map(producto => (
                <Grid xs={4} key={producto.slug}>
                    <Card>
                        <Card.Image src ={`/products/img/${producto.image}.jpg`} alt={producto.slug} />
                    </Card>
                </Grid>
            ))}
        </Grid.Container>
    </Layout>  )
}
export default ShopPage
