
import { NavBar, NavList, NavItem, Caixa, Slogan } from "./Barra"
import Buscar from "../../assets/buscar.png"
import { Input } from '../NavBar/HeaderStyles'
import { ContainerMain } from '../Filmes/FilmesStyles'
import { GlobalStyle } from '../../styles/Global'

export default function Navegacao() {
  return (
    <>
      <ContainerMain   >
        <GlobalStyle />
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
          <img src={Buscar} alt="Buscar" />
        </NavBar>
        <Caixa>
          <Slogan>últimos Lançamentos</Slogan>
        </Caixa>
      </ContainerMain>
    </>



  )
}
