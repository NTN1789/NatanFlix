import { useState, useEffect } from 'react'
import {api} from "./api/index"


function App()  {

const [movie, setMovies] = useState([]);
const [next, setNext] = useState(null);
const [prev, setPrev] = useState(null);


useEffect(() => {
    api
      .get('movies')
      .then((res) => {
        setMovies(res.data.results)
        setNext(res.data.next)
        setPrev(res.data.previous)
      })
      .catch((err) => console.log(err))


  }, []);

  const seeNext = (next) => {
    api.get(next).then((res) => {
      setMovies(res.data.results)
      setNext(res.data.next)
      setPrev(res.data.previous)

    })

    window.scrollTo(0, 0)

  }


  const seePrev = (prev) => {
    api.get(prev).then((res) => {
      setMovies(res.data.results);
      setNext(res.data.next)
      setPrev(res.data.previous)

    })
    window.scrollTo(0, 0)
  }

  const buildImgUrl = (url) => {
    const id = url.split('/');
    const idx = id.length - 2
    const imgUrl = `https://image.tmdb.org/t/p/w500/${id[idx]}.jpg`;

    return imgUrl;

  }

  return (
    <div >
    <div >
      {movie.map((pokemon) => {
        return (
          <div key={pokemon.name} className="pokemon">
            <img src={buildImgUrl(pokemon.url)} alt={pokemon.name} />
            <p> {pokemon.name}</p>
          </div>
        )
      })}
    </div>
    <div className='button-container'>
      <button
        onClick={() => seePrev(prev)}
        disabled={prev === null ? true : false}
        className={prev === null ? 'btn-disabled ' : ""}
      >
       
      </button>

      <button
        onClick={() => seeNext(next)}
        disabled={next === null ? true : false}
        className={next === null ? "btn-disabled" : ""}
      >

  
      </button>
    </div>

  </div>
  )
}

export default App;

