import React from 'react'
import Banner from '../Banner/Banner'
import Filmes from "../Filmes/Filmes"
import Carrosel from '../Carrosel/Carrosel'

import Navegacao from '../BarraNav/Navegacao'
import Pagination from '../Pagination/Pagination'


const Home = () => {
  return (
    <>
    <Banner/>
    <Navegacao/>
    <Carrosel/>
    <Filmes/>
   <Pagination/> 
  
    

    
    </>
        
      
  )
}

export default Home