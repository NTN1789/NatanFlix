import styled from "styled-components";



export const BoxTilte = styled.div `
display:flex;
justify-content:flex-end;
flex-direction:column;
width:60%;
height:40vw;
padding-left:2rem;

@media screen and (max-width:768px){
width:100vh;
    

  }






`

export const TilteMovies = styled.h2`
color:white;

font-size:3.5rem;
background-color:transparent;
overflow:hidden;

@media screen and (max-width:768px){
    font-size:1.2rem;
    position:relative;
    top:40px;
  }


`

export const OverviewMovies = styled.h2`
color:white;


font-size:1.5rem;
flex-wrap:wrap;
background-color:transparent;
@media screen and (max-width:768px){
display:none
  }


`

export const VoteMovies = styled.h2`
color:white;
padding-left:2rem;
font-size:3.5rem;
background-color:transparent;
@media screen and (max-width:768px){
    font-size:2.5rem;
  }



`


export const ButtonMovies = styled.div`
display:flex;

padding:10px 30px;
align-items:center;
@media screen and (max-width:768px){
    position:relative;
    top:30px;
    right:74px;
   
    
    height:9vh;
    font-size:1.0rem;
  }



span{
    border-radius:100px;
    padding:10px 50px;
  
    background-color:gray;

    background-color:gray;
    &{
            cursor: pointer;
        }
        @media screen and (max-width:768px){
    font-size:1.0rem;
    padding:0px 40px;
    
  }


}
i{          
        font-size:1.4rem;
        padding:5px 5px;
        color:white;
        @media screen and (max-width:768px){
    font-size:1.1rem;
  }
     
      
    }
` 





