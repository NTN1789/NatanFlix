import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Card from '../Filmes/Card';
import { Fundo } from './CarroselStyles';
import { GlobalStyle } from '../../styles/Global';

const Carrosel = () => {

  const url = "https://api.themoviedb.org/3/movie/popular?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-br&page=2"

  const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 5000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [movieData, setMovieData] = useState([])
  const [urlSte, setUrl] = useState(url)

  useEffect(() => {

    fetch(urlSte)
      .then(res => res.json())
      .then(data => {

        setMovieData(data.results)
      })
  }, [urlSte])


  return (
    <div>
      <GlobalStyle />
      <Carousel responsive={responsive} infinite={true} autoPlay={2000}   >
        {
          (movieData.length === 0) ? <p>not found</p> : movieData.map((res, id) => {
            return (
              <>
                <Fundo>
                  <Card informacao={res} key={id} />

                </Fundo>
              </>
            )

          })

        }
      </Carousel>
    </div>
  )
}

export default Carrosel