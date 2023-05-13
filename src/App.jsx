import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from "./components/NavBar/Navbar"


import Carrosel from "./components/Carrosel/Carrosel"

import Login from "./components/Login/Login"
import Series from "./components/Series/Series"




function App() {
  
 





  return (
    <>
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Carrosel/>}/>
      <Route path="/series" element={<Series/>}/>
      <Route path="login" element={<Login/>}/>
     </Routes>

        
    </BrowserRouter>

  
    </>
  )
}

export default App
