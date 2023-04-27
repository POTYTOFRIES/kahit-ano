import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <Navbar />
      <div class="flex items-center min-h-screen ">
        <div class="container mx-auto">
          <div class="max-w-md mx-auto my-auto -mt-40">
            <div class="text-center">
              <h1 class="my-3 text-3xl font-semibold text-gray-700">Sign up</h1>
              <p class="text-gray-500 ">Sign up for an account</p>
            </div>
            <div class="m-7 ">
              <form action="">
                <div class="mb-6  text-gray-800">
                  <label
                    for="First Name"
                    class="block mb-2 text-sm text-gray-600"
                  ></label>
                  <input
                    type="firstname"
                    name="firstname"
                    id="firstname"
                    placeholder="First name"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                  />
                  <label
                    for="Last Name"
                    class="block mb-2 text-sm text-gray-600"
                  ></label>
                  <input
                    type="lastname"
                    name="lastname"
                    id="lastname"
                    placeholder="Last name"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                  />
                  
                  <label
                    for="Email"
                    class="block mb-2 text-sm text-gray-600"
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                  />
                  <label
                    for="create Password"
                    class="block mb-2 text-sm text-gray-600"
                  ></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Create Password"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                  />
                  <label
                    for="Confirm Password"
                    class="block mb-2 text-sm text-gray-600"
                  ></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Confirm Password"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                  />
                </div>
                
                    
               
                <div class="mb-6">
                  <button
                    type="button"
                    class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Sign up
                  </button>
                </div>

                <Link to="/login">
                  <p class="text-sm text-center text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="#!"
                      class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 "
                    >
                      Login
                    </a>
                    .
                  </p>{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
