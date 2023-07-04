import React, { useState } from "react";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState();

 

  function done(event) {
    event.preventDefault();
    const getData = JSON.parse(localStorage.getItem("registerData"));
    const registerData = getData ? getData : [];
    if (!name || !email || !phone || !password) {
      alert("Please fill all fields!");
    } else {
      const payload = { name, email, phone, password };
      localStorage.setItem(
        "registerData",
        JSON.stringify([...registerData, payload])
      );
      alert("User Register Success!");
    }
  }

  return (
    <div>
      <form onSubmit={done}>
        <div class="p-2 w-1/2">
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
            <label htmlFor="name" class="leading-7 text-sm text-gray-600 mt-2">
              Password :
            </label>
            <input
              type="password"
              value={password}
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) => setPassword(event.target.value)}
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
            <button
              class="ml-4 inline-flex text-white-700 bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg mt-4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
