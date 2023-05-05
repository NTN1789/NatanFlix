import React from 'react'

const Card = (movie) => {
    console.log(movie.informacao)
    const img_path= "https://image.tmdb.org/t/p/w500/"
  return (
    <div>
        <img src={img_path+movie.informacao.poster_path} alt=""  />
        <h1>{movie.informacao.title}</h1>
        <h3>{movie.informacao.vote_average}</h3>
        </div>
  )
}

export default Card