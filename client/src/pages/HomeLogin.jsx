import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Hero from '../components/Hero'
import Footer from '../components/Footer';
import AddPost from '../components/AddPost'
import DashboardLogin from '../components/DashboardLogin';


function HomeLogin() {
 
  return (
    <div>
        <NavbarLogin />
        <Hero />
        <DashboardLogin />
        <AddPost />
        <Footer />
        
    </div>
  );
}

export default HomeLogin;