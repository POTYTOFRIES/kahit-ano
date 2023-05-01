import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by rate
  const filterRate = (rate) => {
    setFoods(
      data.filter((item) => {
        return item.rate === rate;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Category
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("breakfast")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Breakfast
            </button>
            <button
              onClick={() => filterType("lunch")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Lunch
            </button>
            <button
              onClick={() => filterType("dinner")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Dinner
            </button>
            <button
              onClick={() => filterType("snacks")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Snacks
            </button>
            <button
              onClick={() => filterType("")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Desserts
            </button>
            <button
              onClick={() => filterType("")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Drinks
            </button>
          </div>
        </div>

        {/* Filter Rate */}
        <div>
          <p className="font-bold text-gray-700">Filter Rate</p>
          <div className="flex flex-col lg:flex-row justify-between max-w-[4400px] w-full">
            <button
              onClick={() => filterRate("⭐")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ⭐
            </button>
            <button
              onClick={() => filterRate("⭐⭐")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ⭐⭐
            </button>
            <button
              onClick={() => filterRate("⭐⭐⭐")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ⭐⭐⭐
            </button>
            <button
              onClick={() => filterRate("⭐⭐⭐⭐")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ⭐⭐⭐⭐
            </button>
            <button
              onClick={() => filterRate("⭐⭐⭐⭐⭐")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ⭐⭐⭐⭐⭐
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className=" p-1 ">{item.rate}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
