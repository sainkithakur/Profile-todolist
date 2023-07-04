import React from "react";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function done(event) {
    event.preventDefault();
   
  }
  return (
    <form onSubmit={done}>
      <div class="p-2 mx-auto md:w-1/2">
        <div class="relative">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="name"
            value={name}
            id="name"
            onChange={(event) => setName(event.target.value)}
            name="name"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div class="relative">
          <label htmlFor="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="email"
            name="email"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div class="relative">
          <label htmlFor="phone" class="leading-7 text-sm text-gray-600">
            Contect
          </label>
          <input
            type="number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            id="phone"
            name="phone"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div class="relative">
          <label htmlFor="password" class="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="password"
            name="password"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div class="p-2 w-full">
          <button
            type="submit"
            class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
