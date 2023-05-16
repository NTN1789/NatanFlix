import React from 'react'
import Banner from '../Banner/Banner'
import Filmes from "../Filmes/Filmes"
import Carrosel from '../Carrosel/Carrosel'
import Paginacao from '../paginacao/Paginacao'
import Navegacao from '../BarraNav/Navegacao'

const Home = () => {
  return (
    <>
    <Banner/>
    <Navegacao/>
    <Carrosel/>
    <Filmes/>
    <Paginacao/>

    
    </>
        
      
  )
}

export default Home