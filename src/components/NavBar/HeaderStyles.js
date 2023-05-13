import styled from 'styled-components';


export const Logo = styled.img `
background-color:black;
width:15vh;


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



`


export const Boxes = styled.div `
display: flex;
justify-content:space-around;
align-items: center;
padding:10px 20px;


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

`