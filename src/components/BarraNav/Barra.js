import styled from "styled-components";

export const Caixa = styled.section `
display:flex;
justify-content:flex-start;
align-items:center;

width:87%;
height:8.5vh;


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
    font-size: 2.2rem;
    font-weight:bold;

    @media screen and (max-width:768px){
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    
  }

    
    `



export const NavBar = styled.nav`   
    height: 20vh;
    display: flex;
    align-items: center;

    width:80%;
    background: -webkit-linear-gradient(rgb(10, 10, 10), rgb(10, 10, 10));
 
    @media screen and (max-width:768px){
    display: flex;
    justify-content:center;
    align-items:center;
  
    width:100%;
    height : 26vh;
    


    }

    
  

 
`
export const NavList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;

    
 
    @media screen and (max-width:768px){
   

  

    width:39vh;
  
      
  
   

    }
`

export const NavItem = styled.li`
    list-style: none;
    font-size: 1.0rem;
    font-weight:bold;
    color: #f2f2f2;


    
    @media screen and (max-width:768px){
 font-size: 1.2rem;
      
    }
`

export const InputSearch = styled.input `
    width: 40%;
    height: 5vh;
    border-radius: 5px;


    

    @media screen and (max-width:768px){
        display:none;
      
    }
 
   
`


