import React from 'react'

import { Logo, Container, UL, Boxes, Input } from "./HeaderStyles"


import Dell from "../../assets/Dell.png"
import Buscar from "../../assets/buscar.png"


import { GlobalStyle } from "../../styles/Global"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>

      <GlobalStyle />
      <Container>
        <NavLink>
          <Logo src={Dell} alt="" />
        </NavLink>
        <UL>
          <li>
            <NavLink to="/">Home</NavLink>
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




