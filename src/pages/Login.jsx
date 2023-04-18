import React from 'react'
import Navbar from '../components/Navbar'

function Login () {
  return (
  <div>
    <Navbar />
  <div class="flex items-center min-h-screen bg-white">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-gray-700">Sign in</h1>
          <p class="text-gray-500 ">Sign in to access your account</p>
        </div>
        <div class="m-7">
          <form action="">
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm text-gray-600">Email Address</label>
              <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
            </div>
            <div class="mb-6">
              <div class="flex justify-between mb-2">
                <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
              </div>
              <input type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
            </div>
            <div class="mb-6">
              <button type="button" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
            </div>
            <p class="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#!" class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 ">Sign up</a>.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login