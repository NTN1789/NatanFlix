import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from "./components/NavBar/Navbar"




import Series from "./components/Series/Series"
import Filmes from "./components/Movies/Home"

import Login from "./components/Login/Login"




function App() {
  
 





  return (
    <>
    <BrowserRouter>
     <NavBar/>
 
     <Routes>
      <Route path="/" element={<Filmes/>}/>
      <Route path="/series" element={<Series/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>

        
    </BrowserRouter>

  
    </>
  )
}

export default App
