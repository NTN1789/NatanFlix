import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import CardSeries from "./CardSeries";
import { Fundo } from "../Carrosel/CarroselStyles";

import Navegacao from "../BarraNav/Navegacao";
import { GlobalStyle } from "../../styles/Global";
import { ContainerMain } from "../Filmes/FilmesStyles";
import BannerSeries from "../Banner/BannerSeries";

import ModalSeries from "./ModalSeries";
import Pagination from "../Pagination/Pagination"




const base_url = "https://api.themoviedb.org/3/tv/popular?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-br&page=5"

const series = "https://api.themoviedb.org/3/tv/popular?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-br&page=4"
const Series = () => {
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


  const [seriesData, setSeriesData] = useState([])
  const [url] = useState(series)

  const [movieData, setMovieData] = useState([])
  const [urlSte] = useState(base_url)

  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(data => {

        setSeriesData(data.results)
      })
  }, [url])

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
      <BannerSeries />
      <Navegacao />


      <Carousel responsive={responsive} infinite={true} autoPlay={2000}  removeArrowOnDeviceType={["tablet", "mobile"]}   >

        {
          movieData.map((res, id) => {

            return (
              <>
                <Fundo>
                  <CardSeries info={res} key={id} />
                </Fundo>
              </>
            )

          })

        }
      </Carousel>
      <ContainerMain>
        {
          seriesData.map((res, id) => {
            return (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                  <CardSeries info={res} key={id} />
                  <ModalSeries info={res} key={id} />

                </div>
              </>
            )
          })
        }
        <Pagination />
      </ContainerMain>
    </div>
  )
}

export default Series