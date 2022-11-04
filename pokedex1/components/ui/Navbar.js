import { Link, Spacer, Text } from '@nextui-org/react'
import React from 'react'
//import Image from '@next/image'
export const Navbar = () => {
    return(
        <div>
            <Link href='/'>
            <Text color= "white" h2 sm= {undefined}>
                P
            </Text>
            <Text color= "white" h3 sm= {undefined}>
               oxedex!  
            </Text>
            </Link>
            <Spacer css={{flex:1}}></Spacer>
            <Link href='/'>
            <Text color= "white" h3 sm= {undefined}>
                Home
            </Text>
            </Link>
            <Spacer css={{flex: 1}}></Spacer>
            <Link href='/favoritos'>
            <Text color= "white" h3 sm= {undefined}>
                Favoritos
            </Text>
            </Link>
            <Spacer css={{flex: 1}}></Spacer>
            <Link href='/shop'>
            <Text color= "white" h3 sm= {undefined}>
                Tienda
            </Text>
            </Link>
        </div>
    )
}