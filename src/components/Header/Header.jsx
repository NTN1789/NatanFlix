
import { GatoNet, Navigation, Text } from "./HeaderStyles"


import Gato from "../../assets/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6367716f554161356263657338513d3d2d383238303934353.jpeg"



import React from 'react'
import { GlobalStyle } from "../../styles/Global"

const Header = () => {
  return (
    <> 

    <GlobalStyle/>
     
       <Navigation>
      <GatoNet src={Gato} alt="" />
      <Text>GATONET</Text>
    
        <ul>
          <li><a href="#main">Home</a> </li>
          <li><a href="">Movies</a> </li>
          <li><a href="">Series</a> </li>
          <li><a href="#footer">mais comentados</a> </li>
        </ul>
       </Navigation>
    
      </>
  )
}

export default Header



   
    