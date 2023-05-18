import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';


function App() {
 
  return (
    <div>
        <Navbar />
        <Hero />
        <Dashboard />
        <Footer />       
    </div>
  );
}

export default App;