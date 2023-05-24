import styled from 'styled-components';


export const Logo = styled.img `
background-color:black;
min-width:80%;
height:4vw;
padding:10px;
border-radius:15%;
box-shadow: 0 0 10px #ccc;


@media screen and (max-width:768px){
  display:none;
  
  }




`


export const Container = styled.nav `
  display: flex;
    
    justify-content: space-between;
    align-items: center;
height:7.2vw; 
padding:3.5rem;


    background: -webkit-linear-gradient(rgb(10, 10, 10), rgb(10, 10, 10));

    backdrop-filter: blur(10px);

    
  

`




export const UL = styled.ul `
display: flex;
justify-content:space-around;
align-items: center;
width:12%;
font-size:2.2em;
list-style:none;
a{
  text-decoration:none;
  color:white;
}


@media screen and (max-width:768px){
    display:flex;
    flex-direction:column;
  
    width:100%;
    justify-content:center;
  }




`


export const Boxes = styled.div `
display: flex;
justify-content:space-around;
align-items: center;
padding:10px 20px;

@media screen and (max-width:768px){
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  }

a{
  text-decoration:none;
  color:black;
  font-size:1.9em;

  :hover{
    border-radius:20% 25%  ;
    background-color: #ccc;
  }




}


`


export const Input = styled.input `
 box-sizing: border-box;
        border: none;
        border-bottom:  solid #ccc;
        color:tomato;
        background-color: transparent;

&:focus{
  outline:none;
}


@media screen and (max-width:768px){
    display:none;
  }



`