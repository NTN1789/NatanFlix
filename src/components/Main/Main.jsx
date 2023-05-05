import React, { useLayoutEffect, useState } from 'react'
import { ContainerMain } from "./MainStyles"
import Card from './Card'



const base_url = "https://api.themoviedb.org/3/movie/popular?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-br&page=1"





const Main = () => {

const [movieData,setMovieData] = useState([])
const [urlSte,setUrl] = useState(base_url)




useLayoutEffect(() => {

  fetch(urlSte)
  .then(res => res.json())
  .then(data => {
   
    setMovieData(data.results)
  })
} , [urlSte])




  return (
    
    <ContainerMain id='main'>

      <div className='container'>
    {

        (movieData.length === 0 ) ? <p>not found</p> : movieData.map((res,id) =>{
          return(
            <Card informacao={res} key={id} />
          )

        })

    }
     
      </div>
   

      </ContainerMain>
  )
}

export default Main