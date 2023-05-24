import React, { useState, useEffect } from "react";
import categories, { getSeries } from "./api";
import { BoxTilte, ButtonMovies, OverviewMovies, TilteMovies, VoteMovies } from "./BannerStyles"
import { FaStar } from "react-icons/fa";


function BannerSeries() {
  const [serie, setMovie] = useState({});

  const fetchRandomSeries = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getSeries(netflixOriginalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log("Banner fetchRandomSeries error: ", error);
    }
  };

  useEffect(() => {
    fetchRandomSeries();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div

      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${serie?.backdrop_path}")`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center ",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
        height: "50vw",
      }}
    >
      <BoxTilte >
        <TilteMovies>
        <VoteMovies>
            {truncate(serie?.vote_average)}
            <FaStar style={{ color: "yellow" }} />
          </VoteMovies>
          {serie?.title || serie?.name}
        </TilteMovies>
        <div >
          <OverviewMovies>{serie.overview}</OverviewMovies>
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

export default BannerSeries;
