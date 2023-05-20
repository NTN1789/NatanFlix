import React from 'react'
import Fundo from "../../assets/Fundo.png"
import {  Image, Container } from './LoginStyles'
import { GlobalStyle } from '../../styles/Global'


const Login = () => {
  return (
    <div>
      <GlobalStyle/>
      <Container>


                         <Image src={Fundo} alt="" />
                         </Container>
    </div>
  )
}

export default Login