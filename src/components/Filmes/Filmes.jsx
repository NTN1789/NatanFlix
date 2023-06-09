import  { useEffect, useState } from 'react'
import { ContainerMain, } from "./FilmesStyles"
import Card from './Card'
import { GlobalStyle } from '../../styles/Global'
import { Caixa, Slogan } from '../Carrosel/CarroselStyles'
import Modal from '../Modal/Modal'
import Pagination from '../Pagination/Pagination'

const Main = () => {

  const baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-br&page "
  const [movieData, setMovieData] = useState([])
  const [urlSte] = useState(baseUrl)


  useEffect(() => {

    fetch(urlSte)
      .then(res => res.json())
      .then(data => {

        setMovieData(data.results)

      }
      )
  }, [urlSte])

  return (

    <ContainerMain >
      <GlobalStyle />
      <Caixa>

        <Slogan>Em alta</Slogan>
      </Caixa>

      {
        (movieData.length === 0) ? <p>not found</p> : movieData.map((res, id) => {
          return (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Card informacao={res} key={id} />


                <Modal informacao={res} key={id} />
              </div>
            </>
          )

        })
      }
      <Pagination />
    </ContainerMain>
  )
}

export default Main