import React, { useState, useContext } from 'react'
import { AuthContext } from "../context/AuthContext";
import Navbar from '../components/Navbar'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

function Login () {

  const context = useContext(AuthContext)
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  
  const handleEmail = (e) => {
    let value = e.target.value
    setUser({
      ...user, email: value
    })
  };

  const handlePassword = (e) => {
    let value = e.target.value
    setUser({
      ...user, password: value
    })
  };
  
  const loginUser = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/log-in", {
        email: user.email,
        password: user.password,  
      })
      .then(function (response) {
        localStorage.setItem('jwt_token',response.data.generatedToken)
        navigate("/home");
        //toast.success(`Welcome back ${user.email}`)
        context.setUser(response.data.result[0])

      })
      .catch(function (error) {
        toast.error(`Access Denied`)
      });
  };


  return (
  <div>
    <Navbar />
  <div class="flex items-center min-h-screen ">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-auto -mt-40">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-gray-700">Sign in</h1>
          <p class="text-gray-500 ">Sign in to access your account</p>
        </div>
        <div class="m-7">
          <form action="" onSubmit={loginUser}>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm text-gray-600">Email</label>
              <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " 
              onChange={handleEmail}/>
            </div>
            <div class="mb-6">
              <div class="flex justify-between mb-2">
                <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
              
              </div>
              <input type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " 
              onChange={handlePassword}/>
            </div>
            <div class="mb-6">
              <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" >Sign in</button>
            </div>

            <Link to='/signup'><p class="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#!" class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 ">Sign up</a>.</p> </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Login