import styled from "styled-components";

export const ContainerModal = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8vw;
  
 

    .modal-content {
    max-width: 800px;
    border-radius: 50px;
  
  }
    
  
 
  

`

export const ButtonFechar = styled.button`
    padding: 7px; 
font-size: large;
float: right;
cursor: pointer;
background:transparent;
border:none;



`


export const Informacao =  styled.h3`
font-size:1.9rem;
font-weight:bold;
` 

export const ImageFilmes = styled.img`
background-size: cover;
height: 100vh;

`