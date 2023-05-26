import React from 'react'
import { Containercard, Letrasfilme } from './CardStyles'


const Card = (movie) => {
    console.log(movie.informacao)
    const img_path= "https://image.tmdb.org/t/p/w500/"

 
 


  return (
    <Containercard>

        <img src={img_path+movie.informacao.poster_path} alt="" 
        onClick={()=> window.open("https://www.themoviedb.org/movie/"+movie.informacao.id+"?language=pt-BR")}
        />



        <Letrasfilme>{movie.informacao.title}</Letrasfilme>

        <Letrasfilme>{movie.informacao.release_date.slice(0,4)}</Letrasfilme>



       </Containercard>
  )
}

export default Card