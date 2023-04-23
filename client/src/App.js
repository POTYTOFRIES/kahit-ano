import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import AddPost from './components/AddPost';


function App() {
 
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <AddPost />
        
    </div>
  );
}

export default App;