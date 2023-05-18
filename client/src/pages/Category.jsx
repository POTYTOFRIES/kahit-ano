import React from 'react';
import NavbarLogin from '../components/NavbarLogin.jsx';
import { categories } from '../data/data.js';
import Food from '../components/Food.jsx';
import Footer from '../components/Footer.jsx';

const Category = () => {
  console.log(categories);
  return (
    <div>
      <NavbarLogin />
      <Food />
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      {/* <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Extras
      </h1> */}
      {/* Categories */}
      {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'
          >
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20' />
          </div>
        ))}
      </div>  */}
    </div>
    <Footer />
    </div>
  );
};

export default Category;