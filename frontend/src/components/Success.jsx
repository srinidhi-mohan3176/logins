import React from "react"

const Success = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4 w-[400px]">
        <div className="text-green-500 text-6xl">✅</div>
        <h1 className="text-3xl font-bold text-gray-800">Login Successful!</h1>
        <p className="text-gray-600 text-center">
          Welcome back! You have successfully log in.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  )
}

export default Success
