import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
  const [users, setUsers] = useState ([]);
  const [firstname, setFirstname] = useState ('');
  const [lastname, setLastname] = useState ('');
  const [username, setUsername] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  
  useEffect(() => {
    axios.get('http://localhost:8000/all-users')
      .then((response) => {
        setUsers(response.data)
      }).catch(function (error) {
        console.log(error);
      })
  }, [users])

  const handleChangeFirstname = (event) => {
    setFirstname(event.target.value)
  };

  const handleChangeLastname = (event) => {
    setLastname(event.target.value)
  };

  const handleChangeUsername= (event) => {
    setUsername(event.target.value)
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  };

  const addUser = (event) => {
    event.preventDefault()

    axios.post("http://localhost:8000/add-user", {
      first_name: firstname,
      last_name: lastname,
      username: username,
      email: email,
      password: password 

    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


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
              <form onSubmit={addUser}>
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
                    value={firstname}
                    onChange={handleChangeFirstname}
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
                    value={lastname}
                    onChange={handleChangeLastname}
                  />

                  <label
                    for="Username"
                    class="block mb-2 text-sm text-gray-600"
                  ></label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    placeholder="Username"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                    value={username}
                    onChange={handleChangeUsername}
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
                    value={email}
                    onChange={handleChangeEmail}
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
                    value={password}
                    onChange={handleChangePassword}
                  />
                  <label
                    for="Confirm Password"
                    class="block mb-2 text-sm text-gray-600"
                  ></label>
                  <input
                    type="password"
                    name="confirm password"
                    id="confirm password"
                    placeholder="Confirm Password"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                  />
                </div>
                
                    
               
                <div class="mb-6">
                  <button
                    type="submit"
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
