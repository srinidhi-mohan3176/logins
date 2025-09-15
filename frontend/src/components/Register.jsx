import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/register", {
        username,
        password,
      })
      if (res.data.success) {
        alert("Registration successful! Please login.")
        navigate("/")
      } else {
        alert(res.data.message || "Registration failed")
      }
    } catch (err) {
      console.error("Register failed:", err)
      alert("Something went wrong. Try again.")
    }
  }

  return (
    <div
      className="h-screen bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(/src/assets/background.jpg)` }}
    >
      <div className="flex flex-col gap-5 p-16 backdrop-blur-md bg-white bg-opacity-80 rounded-2xl shadow-lg ">
        <h1 className="font-bold text-2xl text-center">Register</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 rounded-lg border"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-lg border w-96"
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold text-lg p-2 rounded-lg hover:bg-green-600"
          >
            Register
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="hover:text-blue-700 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default Register
