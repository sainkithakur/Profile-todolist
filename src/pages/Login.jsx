import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function done(event) {
    event.preventDefault();
    console.log(email, password);
    localStorage.setItem("token", "Token");
    navigate("/");
  }
  return (
    <div>
      <form onSubmit={done}>
        <div class="p-2 mx-auto md:w-1/2">
          <div class="relative">
            <label htmlFor="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              name="email"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative">
            <label for="password" class="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              value={password}
              name="password"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="p-2 w-full">
            <button
              type="submit"
              class="flex mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
