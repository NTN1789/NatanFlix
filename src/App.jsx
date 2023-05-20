import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from "./components/NavBar/Navbar"



import Login from "./components/Login/Login"
import Series from "./components/Series/Series"
import Home from "./components/Movies/Home"




function App() {
  
 





  return (
    <>
    <BrowserRouter>
     <NavBar/>
 
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/series" element={<Series/>}/>
      <Route path="login" element={<Login/>}/>
     </Routes>

        
    </BrowserRouter>

  
    </>
  )
}

export default App
