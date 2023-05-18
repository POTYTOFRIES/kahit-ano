import React, {useContext} from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Bookmark from './pages/Bookmark'
import About from './pages/About'
import Post from './components/Post'
import HomeLogin from './pages/HomeLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from './pages/Category';
import { AuthContext, AuthProvider } from "./context/AuthContext";
import axios from "axios";
import User from "./pages/User";

function AppRoutes() {
  const {user, setUser} = useContext(AuthContext)
  // if (user)
  

  if (typeof(user) == 'undefined') {
    
    const token = localStorage.getItem('jwt_token');
    if (typeof(token) !== 'undefined'){
      axios.post("http://localhost:8000/auth/verifyToken", {
          jwt_token:token
      })
      .then(function (response) {
        console.log(response);
        setUser(response)
      })
      .catch(function (error) {
        console.log('Not logged in');
      });
    }
}

return (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="about" element={<About />} />
    <Route path="post" element={<Post />} />
    <Route path="bookmark" element={<Bookmark />} />
    <Route path="home" element={<HomeLogin />} />
    <Route path="login" element={<Login />} />
    <Route path="category" element={<Category />} />
    <Route path="signup" element={<Signup />} />
    <Route path="user" element={<User />} />
  </Routes>
);
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "login",
//     element: <Login />
//   },
//   {
//     path: "home",
//     element: <HomeLogin />
//   },
//   {
//     path: "signup",
//     element: <Signup />
//   },
//   {
//     path: "about",
//     element: <About />
//   },
//   {
//     path: "category",
//     element: <Category />
//   },
//   {
//     path: "bookmark",
//     element: <Bookmark />
//   },
//   {
//     path: "post",
//     element: <Post />
//   }
// ]);


// let root = ReactDOM.createRoot(document.getElementById("root"));

function Root() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <ToastContainer />
          <Router>
            <AppRoutes />
          </Router>
      </AuthProvider>
    </React.StrictMode>
);
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);