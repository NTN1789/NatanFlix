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

    @media screen and (max-width:768px){
      
      position:fixed;
      
    place-items: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: -50rem;
    z-index: 1;
    background: black;
    transform: translate(-100%);
    transition: all .45s;
     
 
      &.open{
        transform:translate(0)
      }
      
  }
  

`

export const MenuMobile = styled.button `
display:none;




@media screen and (max-width:768px){
  display:block;
  position:fixed;
  top:0;
  background-color:transparent;
  border:none;

  z-index:100;
 
   
  }
`











export const UL = styled.ul `
display: flex;
justify-content:space-around;
align-items: center;
width:12%;
font-size:2.2em;
list-style:none;
z-index: -1;
a{
  text-decoration:none;
  color:white;
 
}

li{
background-color: transparent;
  
    
    text-align: center;
    padding:5px;
    :hover {
       color:gold;
       margin: 12px;
    padding: 5px;
    border: solid ;
     
    }
    .active {
        color: gold;
    }

  }
@media screen and (max-width:768px){
  display:flex;
  justify-content:center;
align-items:center;
  width:55%;

  flex-direction:column;
  z-index: -1;



  }




`


export const Boxes = styled.div `
display: flex;
justify-content:space-around;
align-items: center;
padding:10px 20px;

@media screen and (max-width:768px){
  position:relative;
  right:25rem;
  top:7rem;
  width:100%;
  flex-direction:column;



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