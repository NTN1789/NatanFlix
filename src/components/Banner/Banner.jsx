import  { useState, useEffect } from "react";
import categories, { getMovies } from "./api";
import { FaStar } from "react-icons/fa"

import { BoxTilte, ButtonMovies, OverviewMovies, TilteMovies, VoteMovies } from "./BannerStyles"


function Banner() {
  const [movie, setMovie] = useState({});

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log("Banner fetchRandomMovie error: ", error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 2) + "..." : str;
  }

  return (
    <div
 style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center center ",
        backgroundRepeat: "no-repeat",
    
        height: "50vw",
      }}
    >
      <BoxTilte >
        <TilteMovies>
          <VoteMovies>{truncate(movie?.vote_average)
          }
            <FaStar style={{ color: "yellow" }} />
          </VoteMovies>
          {movie?.title || movie?.name || movie?.original_name || movie?.release_date}
        </TilteMovies>
        <div >
          <OverviewMovies>{truncate(movie?.overview)}</OverviewMovies>
          <ButtonMovies>
            <span style={{ backgroundColor: "red" }}>
              <i className="fa-solid fa-play"></i>
              Assistir agora
            </span>
            <span>
              <i className="fa-solid fa-film"></i>
              Trailer
            </span>
          </ButtonMovies>
        </div>
      </BoxTilte>
    </div>
  );
}

export default Banner;
