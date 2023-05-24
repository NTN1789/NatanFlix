import React, { useState, useEffect } from 'react'
import Fundo from "../../assets/Fundo.png"
import { Image, Container, ContainerLogin, ButtonLogin } from './LoginStyles'



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault()



    setError("")

    const user = {
      email,
      password,
    };
  }

  return (
    <div>

      <Container>
        <Image src={Fundo} alt=""
        />
        <ContainerLogin>
          <h1> Login</h1>
          <p>Name:</p>
          <input type="text"

        
          />
          <p>Passoword:</p>
          <input type="password"
     
          />
          <ButtonLogin type='button'   >
            Sing IN
          </ButtonLogin>
        </ContainerLogin>
      </Container>
    </div>
  )

}


export default Login