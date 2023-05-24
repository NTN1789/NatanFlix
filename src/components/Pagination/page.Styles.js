import styled from "styled-components";

export const  ContainerPage = styled.div` 
    display: flex;
    justify-content:center;
    align-items:center;
    
    @media screen and (max-width:768px){
    display:flex;
 
    height:35vw;
    
  }


    `

    export const ButtonPage = styled.button` 
    display: flex;
    justify-content:space-around;
    width:40vh;
    
  height:5vw;
    align-items:center;
    background: -webkit-linear-gradient(rgb(10, 10, 10), rgb(10, 10, 10));

    &{
      cursor: pointer;
    }

    


   


    button{
        font-size:2rem;
        background-color:transparent;
        color:white;

        
         
    }

    
    
    `