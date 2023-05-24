import styled from "styled-components";

export const ContainerModal = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:20%;
  

  
  @media screen and (max-width:768px){

  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
 width:20vh;
    

  }

  
 
  

`

export const ButtonFechar = styled.button`
    padding: 7px; 
font-size: large;
float: right;
cursor: pointer;
background:transparent;
border:none;
@media screen and (max-width:768px){
    float:left;
  font-size:2.5rem;
  color:red
  }


`


export const Informacao =  styled.h3`
font-size:1.9rem;
font-weight:bold;
width:70%;
@media screen and (max-width:768px){

  font-size:1.5rem;
  word-break: break-all;
  width:45%;

  }
` 

export const ImageFilmes = styled.img`
background-size: cover;
height: 100%;

@media screen and (max-width:768px){
   height:50vw;
    



  }

`