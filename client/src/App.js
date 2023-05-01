import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/Dashboard'
import AddPost from './components/AddPost';
import Footer from './components/Footer';


function App() {
 
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <AddPost />
        <Footer />
        
    </div>
  );
}

export default App;