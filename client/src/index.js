import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Bookmark from './pages/Bookmark'
import About from './pages/About'
import Post from './components/Post'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from './pages/Category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <Signup />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "category",
    element: <Category />
  },
  {
    path: "bookmark",
    element: <Bookmark />
  },
  {
    path: "post",
    element: <Post />
  }
]);


let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={router} />
  
);
