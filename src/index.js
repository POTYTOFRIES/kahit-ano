import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import About from './pages/About'
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
    path: "about",
    element: <About />
  },
  {
    path: "category",
    element: <Category />
  }
]);


let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={router} />
  
);
