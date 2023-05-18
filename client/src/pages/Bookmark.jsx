import React, { useState, Fragment } from "react";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import PostModal from "../components/PostModal";

export default function Bookmark() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div>
        <NavbarLogin />

        <div>
          <h1 className="text-orange-600 font-bold text-4xl text-center mt-8">
            Bookmark
          </h1>
          <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-8 ">
            {/* Card */}
            <div className="rounded-xl relative ">
              {/* Overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl pl-4 px-2 pt-4">
                  @Potytofries
                </p>
                <p className="px-2 pl-8 mx-4">
                  This sandwich is the best sandwich I ever tried! 4 star for
                  this one, you can try this sandwich at Breadass.
                </p>
                <button
                  className="border-white bg-white text-black mx-2 absolute bottom-4"
                  onClick={() => setShowModal(true)}
                >
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
                <p className="font-bold text-2xl pl-4 px-2 pt-4">@Paork</p>
                <p className="px-2 pl-8 mx-4">
                  LOOK AT THAT STEAAAAAAAK! If you're craving for some juicy
                  steak, you can try this at Steakhouse.
                </p>
                <button
                  className="border-white bg-white text-black mx-2 absolute bottom-4"
                  onClick={() => setShowModal(true)}
                >
                  Show more
                </button>
                <p className=" absolute bottom-3 right-5">⭐⭐⭐⭐</p>
                <p className="absolute top-1 right-5 text-sm">
                  Category: Dinner{" "}
                </p>
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
                <p className="font-bold text-2xl pl-4 px-2 pt-4">@Celssert</p>
                <p className="px-2 pl-8 mx-4">
                  Fave fruit as my fave dessert, try it if you love
                  strawberries.
                </p>
                <button
                  className="border-white bg-white text-black mx-2 absolute bottom-4"
                  onClick={() => setShowModal(true)}
                >
                  Show more
                </button>
                <p className=" absolute bottom-3 right-5">⭐⭐⭐</p>
                <p className="absolute top-1 right-5 text-sm">
                  Category: Dessert{" "}
                </p>
              </div>
              <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="/"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <PostModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
}
