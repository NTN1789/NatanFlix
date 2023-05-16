import React from 'react'
import { NavBar, NavList, NavItem, Caixa, Slogan }  from "./Barra"
import Buscar from "../../assets/buscar.png"
import { Input } from '../NavBar/HeaderStyles'
import { ContainerMain } from '../Filmes/FilmesStyles'

export default function Navegacao() {
  return (
<>
<ContainerMain  style={{marginTop:"0%"}}  > 

    <NavBar>
<NavList>
<NavItem>Popular</NavItem>
                <NavItem>Drama</NavItem>
                <NavItem>Ação</NavItem>
                <NavItem>Aventura</NavItem>
                <NavItem>Comédia</NavItem>
                <NavItem>Crime</NavItem>
                <NavItem>Fantasia</NavItem>
                <NavItem>Família</NavItem>
</NavList>
<Input type="text" /> 
         <img src={Buscar}  alt="Buscar"/>

   
    
    </NavBar>

         <Caixa>

<Slogan>últimos Lançamentos</Slogan>
        </Caixa>
</ContainerMain>
</>
    
        
     
  )
}
