import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Success from "./components/Success"
import Fail from "./components/Fail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
