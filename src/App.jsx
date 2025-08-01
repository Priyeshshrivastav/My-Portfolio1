import { BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Notfound from "./Pages/Notfound"
import { Route, Routes as Rotes } from "react-router-dom"


function App() {

  return (
    <>
     
     <BrowserRouter>
     <Rotes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Notfound/>}/>
     </Rotes>
     </BrowserRouter>

     {/* "private": true, */}
    </>
  )
}

export default App
