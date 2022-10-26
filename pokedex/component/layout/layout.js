import Head from "next/head";
import React from "react";
const layout = ({children, title}) => {
    return(
        <>
        <Head>
            <title>{title || 'pokemonApp' }</title>
            <meta name="author" content="juan"/>
            <meta name= "description" content= "practia con NextJS"/>
            <meta property="og:title" content= {`${title}`}/>
            <meta property ="og:image" content= {`${origin}/img/banner.`}/>
        </Head>
        </>
    )
}
