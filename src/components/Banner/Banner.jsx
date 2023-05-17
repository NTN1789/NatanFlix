import React, {useState, useEffect} from 'react'



import styled from "styled-components"
import BackDrop from './BackDrop'

export const MainStyle = styled.main`
    background-image: url(${props => props.back});
    background-repeat:no-repeat;
    background-size:100% 100%;

height:100vh;
    color:white;
`
export const H2 = styled.h2`
    font-size: 3rem;
`



const Banner = () => {
    const base_url = "https://api.themoviedb.org/3/movie/popular?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-br&page=1"
    const [movieData,setMovieData] = useState([])
    const [urlSte,setUrl] = useState(base_url)


    
useEffect(() => {

    fetch(urlSte)
    .then(res => res.json())
    .then(data => {
     
      setMovieData(data.results)
    })
  } , [urlSte])
  
  

  return (
    <div>
         <MainStyle >
         {
        
         movieData.map((res,id) =>{
          return(
            <>  
          <BackDrop  backGround={res}  key={id} />
           
            </>
          )

        })
    }  
              
         
            </MainStyle>

    </div>
  )
}

export default Banner