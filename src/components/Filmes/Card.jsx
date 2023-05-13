import React from 'react'
import { Containercard, Letrasfilme } from './CardStyles'
import { GlobalStyle } from '../../styles/Global'


const Card = (movie) => {
    console.log(movie.informacao)
    const img_path= "https://image.tmdb.org/t/p/w500/"
  return (
    <Containercard>
      <GlobalStyle/>
   
      
    


        <img src={img_path+movie.informacao.poster_path} alt=""  />
    
        <Letrasfilme>{movie.informacao.release_date}</Letrasfilme>

      
       </Containercard>
  )
}

export default Card