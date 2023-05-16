import axios from 'axios';


const pagenation = "https://api.themoviedb.org/3/movie/popular?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-br&page="

export const api = async(url = pagenation) => {

const {data} = await axios.get(url);
return data;

}