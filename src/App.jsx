import Home from "./Pages/Home"
import Login from "./Pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./Components/Header/Header.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
