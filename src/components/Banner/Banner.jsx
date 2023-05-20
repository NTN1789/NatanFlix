import React , { useState,useEffect } from "react";
import categories, { getMovies } from "./api";
import {} from "./BannerStyles"


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
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div
  
      style={{
  
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      height: "100vh",
      display:"flex",
      }}
    >
      <div >
        <h1>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div >
          <button >Assistir</button>
          <button >Minha Lista</button>
        </div>
        <div >
          <h2>{truncate(movie?.overview)}</h2>
          <h2>{truncate(movie?.vote_average)}</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
