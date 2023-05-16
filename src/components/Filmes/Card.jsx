import React from 'react'
import { Containercard, Letrasfilme } from './CardStyles'



const Card = (movie) => {
    console.log(movie.informacao)
    const img_path= "https://image.tmdb.org/t/p/w500/"
  return (
    <Containercard>
    
  

        <img src={img_path+movie.informacao.poster_path} alt=""  />
    
        <Letrasfilme>{movie.informacao.release_date}</Letrasfilme>

      
       </Containercard>
  )
}

export default Card