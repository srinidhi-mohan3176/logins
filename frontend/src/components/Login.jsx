import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const check = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://logins-5.onrender.com//login",
         {
        username: user,
        password: pass,
      })

      if (response.data.success) {
        navigate("/success")
      } else {
        navigate("/fail")
      }
    } catch (error) {
      console.error("Login failed:", error)
      navigate("/fail")
    }
  }

  return (
    <div
      className="h-screen bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(/src/assets/background.jpg)` }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={check} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="border rounded-md p-2"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="border rounded-md p-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <button
          onClick={() => navigate("/register")}
          className="mt-4 bg-gray-500 text-white rounded-md py-2 w-full hover:bg-gray-600"
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Login
