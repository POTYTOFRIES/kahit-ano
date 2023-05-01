import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-orange-600 font-bold text-4xl text-center mt-8">
        User Pick
      </h1>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-8 ">
        {/* Card */}
        <div className="rounded-xl relative ">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <img
              className="w-24 h-24 rounded-full border-2 border-amber-700 absolute ml-2 top-2 "
              src="char.png"
              alt=""
            />
            <p className="font-bold text-2xl pl-28 px-2 pt-4">@Potytofries</p>
            <p className="px-2 pl-32 mx-4">
              This sandwich is the best sandwich I ever tried! 4 star for this
              one, you can try this sandwich at Breadass.
            </p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Show more
            </button>
            <p className=" absolute bottom-3 right-5">⭐⭐⭐⭐</p>
            <p className="absolute top-1 right-5 text-sm">
              Category: Breakfast{" "}
            </p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <img
              className="w-24 h-24 rounded-full border-2 border-amber-700 absolute ml-2 top-2 "
              src="6.jpg"
              alt=""
            />
            
            <p className="font-bold text-2xl pl-28 px-2 pt-4">@Paork</p>
            <p className="px-2 pl-32 mx-4">
              LOOK AT THAT STEAAAAAAAK! If you're craving for some juicy steak,
              you can try this at Steakhouse.
            </p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Show more
            </button>
            <p className=" absolute bottom-3 right-5">⭐⭐⭐⭐</p>
            <p className="absolute top-1 right-5 text-sm">Category: Dinner </p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <img
              className="w-24 h-24 rounded-full border-2 border-amber-700 absolute ml-2 top-2 "
              src="1.jpg"
              alt=""
            />
            
            <p className="font-bold text-2xl pl-28 px-2 pt-4">@Celssert</p>
            <p className="px-2 pl-32 mx-4">
              Fave fruit as my fave dessert, try it if you love strawberries.
            </p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Show more
            </button>
            <p className=" absolute bottom-3 right-5">⭐⭐⭐</p>
            <p className="absolute top-1 right-5 text-sm">Category: Dessert </p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <img
              className="w-24 h-24 rounded-full border-2 border-amber-700 absolute ml-2 top-2 "
              src="4.jpg"
              alt=""
            />
            
            
            <p className="font-bold text-2xl pl-28 px-2 pt-4">@aMarkano</p>
            <p className="px-2 pl-32 mx-4">Kapeng di ka papatulugin ng 3 days. </p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Show more
            </button>
            <p className=" absolute bottom-3 right-5">⭐⭐</p>
            <p className="absolute top-1 right-5 text-sm">Category: Drink </p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1565065963005-92ba391a8ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <img
              className="w-24 h-24 rounded-full border-2 border-amber-700 absolute ml-2 top-2 "
              src="5.jpg"
              alt=""
            />
            
            
            <p className="font-bold text-2xl pl-28 px-2 pt-4">@Acecream</p>
            <p className="px-2 pl-32 mx-4">Vanilla Ice cream for lifers.</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Show more
            </button>
            <p className=" absolute bottom-3 right-5">⭐⭐⭐</p>
            <p className="absolute top-1 right-5 text-sm">Category: Dessert </p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <img
              className="w-24 h-24 rounded-full border-2 border-amber-700 absolute ml-2 top-2 "
              src="2.jpg"
              alt=""
            />
            
            <p className="font-bold text-2xl pl-28 px-2 pt-4">@BurgerKing</p>
            <p className="px-2 pl-32 mx-4">
              Double cheeseburger 4 star and broke friendly.
            </p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Show more
            </button>
            <p className=" absolute bottom-3 right-5">⭐⭐⭐⭐</p>
            <p className="absolute top-1 right-5 text-sm">Category: Lunch </p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
            alt="/"
          />
        </div>
        
        </div>
      </div>
  );
};

export default Dashboard;
