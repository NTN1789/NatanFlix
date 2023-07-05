
import { Containercard, Letrasfilme } from '../Filmes/CardStyles'

const CardSeries = (series) => {
  console.log(series.info)
  const img_path = "https://image.tmdb.org/t/p/w500/"

  return (
    <Containercard>

      <img src={img_path + series.info.poster_path} alt=""
        onClick={() => window.open("https://www.themoviedb.org/tv/" + series.info.id)}
      />
      <Letrasfilme>{series.info.first_air_date.slice(0, 4)}</Letrasfilme>


    </Containercard>
  )
}

export default CardSeries