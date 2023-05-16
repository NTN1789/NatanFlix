import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from "styled-components"

export const MainStyle = styled.main`
    background-image: url(${props => props.back});
    background-repeat:no-repeat;
    background-size:100% 100%;

height:100vh;
    color:white;
`
export const H2 = styled.h2`
    font-size: 3rem;
`



const Banner = () => {

  const [filmes, setFilmes] = useState([])
  const [fundo, setFundo] = useState([])

  useEffect(() => {
    
  })

  const getFilmes = async () => {
      await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=2').then(resposta => {
          const allApi = resposta.data.results.map((item) => {
              return {
                  ...item,
                  poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
              }
          })
          setFilmes(allApi)
          setFundo(arrayAntiga => arrayAntiga  = filmes.slice(0,1))
          console.log(fundo)
          

      }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
  }


  return (
    <div>
         <MainStyle back={fundo.map(item => item.poster)} id="main">
              
                {fundo.map(item => (
                    <>
                        <h1>{item.title}</h1>
                        <h3>IMDB{item.vote_average}</h3>
                        <h3>Lançamento: {item.release_date}</h3>
                        <h3>Sinopse{item.overview}</h3>
                    </>
                ))}
            </MainStyle>

    </div>
  )
}

export default Banner