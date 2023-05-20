const API_KEY = "971f03eef96c481fd72b934bef826ce4";

const categories = [

  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/tv?api_key=${API_KEY}`,
    isLarge: false,
  },


];

export const getMovies = async (path) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR${path}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log("error getMovies: ", error);
    }
  };


  
export const getSeries = async (path) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error getSeries: ", error);
  }
};
  

  export default categories

  