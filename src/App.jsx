import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./Components/Header/Header.css"
import List from "./Pages/List"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
