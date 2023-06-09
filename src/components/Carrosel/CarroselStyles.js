import styled from "styled-components";

export const Caixa = styled.section `
display:flex;
justify-content:flex-start;
align-items:center;
width:87%;
height:6.5vh;

@media screen and (max-width:768px){
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    
  }

`

export const Slogan = styled.h1 `
color:white;
font-family: normal normal bold ;
    font-size: 2rem;
    font-weight:bold;
    
    
    `



export const NavBar = styled.nav`   
    height: 15vh;
    display: flex;
    align-items: center;
    width:75%;
 


   
 
`
export const NavList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const NavItem = styled.li`
    list-style: none;
    font-size: 1.6rem;
    font-weight:bold;
    color: #f2f2f2;
`

export const InputSearch = styled.input `
    width: 20%;
    height: 3vh;
    border-radius: 5px;


 
   
`



export const Fundo = styled.div `
background: -webkit-linear-gradient(rgb(10, 10, 10), rgb(10, 10, 10));
display:flex;
justify-content:center;
align-items:center;
height:40vw;

@media screen and (max-width:768px){
        display:flex;
        height:70vw;
      
    }




`