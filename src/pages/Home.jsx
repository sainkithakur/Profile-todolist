import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Home = () => {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState();
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("registerData"));
  function inputEvent() {
    console.log();
    navigate("/Add");
  }

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Table */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <button
            class="flex ml-auto text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded "
            onClick={inputEvent}
          >
            Add
          </button>

          <div class="lg:w-3/4 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Password
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Contect
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Email
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.map((item) => {
                  return (
                    <tr>
                      <td class="px-4 py-3">{item.name}</td>
                      <td>{item.password}</td>
                      <td class="px-4 py-3">{item.phone}</td>
                      <td class="px-4 py-3 text-lg text-gray-900">
                        {item.email}
                      </td>
                      <td class="w-30 text-center flex">
                        <FaEdit class="ml-2 mt-2" />
                        <MdDelete class="ml-2 mt-2" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Log Out */}

      <Link
        to="/login"
        onClick={() => localStorage.removeItem("token")}
        class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-40 text-center"
      >
        Log Out
      </Link>
    </div>
  );
};

export default Home;
