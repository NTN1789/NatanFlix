import React , {useState,useEffect, useRef}from 'react'
import {} from "./FooterStyles"

import Card from '../Main/Card'
import { BoxTitulo, ContainerMain , Buttons, ButtonsSec } from '../Main/MainStyles'

import  "./carrosel.css"

import Seta from "../../assets/Seta.png"
import { Texto } from '../Main/MainStyles'

const base_url = "https://api.themoviedb.org/3/movie/popular?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-br&page=2"
const Footer = () => {

  const [movieData,setMovieData] = useState([])
const [urlSte,setUrl] = useState(base_url)




useEffect(() => {

  fetch(urlSte)
  .then(res => res.json())
  .then(data => {
   
    setMovieData(data.results)
  })
} , [urlSte])


const carousel = useRef(null)

const  handleLeftClick = (e) => {

  e.preventDefault(carousel.current.offsetWidth); 
  carousel.current.scrollLeft -= carousel.current.offsetWidth;  
  
  
};


const  handleRightClick = (e) => {


  e.preventDefault(carousel.current.offsetWidth);  

  carousel.current.scrollLeft += carousel.current.offsetWidth;
  
};





if(!movieData || !movieData.length) return null;

  return (
    <div>

      <ContainerMain style={{height:"50%"}}   id='footer' className='container'   >

<BoxTitulo>

        <Texto> filmes mais assitidos do mês anterior</Texto>
</BoxTitulo>



     <div className='carousel'  ref={carousel}>  

     {
       
       (movieData.length === 0 ) ? <p>not found</p> : movieData.map((res,id) =>{
         return(
            <>
            <div className='item'>
              <div className='image'>
            
            <Card   informacao={res} key={id} />
              </div>
            </div>
           
            </>
          )
          
        })
        
        
        
      }
     
      </div>
    

      <div className=" buttons">
          <Buttons onClick={handleLeftClick}  > 
            <img src={Seta}  alt="Scroll Left"/>
            </Buttons>

            <ButtonsSec onClick={handleRightClick} > 

            <img src={Seta}  alt="Scroll rigth"/>
            </ButtonsSec>

     </div>

     

      </ContainerMain>
      </div>
  )
}

export default Footer