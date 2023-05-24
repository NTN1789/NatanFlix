import React,{useState} from 'react'

import { Logo, Container, UL, Boxes, Input, MenuMobile} from "./HeaderStyles"


import Dell from "../../assets/Dell.png"
import Buscar from "../../assets/buscar.png"
import {MdMenu , MdClose} from "react-icons/md"


import { GlobalStyle } from "../../styles/Global"
import { NavLink } from 'react-router-dom'

const Header = () => {
const [openMenu , setOpenMenu] = useState(false)

const handleOpenMenu = () => {
  setOpenMenu(!openMenu)

};


  return (
    <>
   
   

      <MenuMobile onClick={handleOpenMenu}>
        {
          openMenu ? <MdClose size="50" color="white" /> : <MdMenu size="50" color="black" />
        }
   
        </MenuMobile>
      
   
      <GlobalStyle />
      <Container className={openMenu ? "open" : ""}  openMenu={openMenu}>
  
        <NavLink>
          <Logo src={Dell} alt="" />
        </NavLink>
        <UL>
          <li>
            <NavLink to="/">Filmes</NavLink>
          </li>
          <li>
            <NavLink to="/series">series</NavLink>
          </li>
        </UL>
        <Boxes>
          <Input type="text" placeholder="Buscar" />
          <img src={Buscar} alt="" />
          <NavLink style={{ color: "white", textDecoration: "none", }} to="/login">Login</NavLink>
        </Boxes>
      </Container>
    </>
  )
}

export default Header




