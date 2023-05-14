import React from "react";
import {
  AiFillHeart,
  AiOutlineComment
} from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs"

const PostModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl border-0 place-self-end"
          onClick={() => onClose()}
        >
          close
        </button>
        <div className="p-2">
          <div className="rounded-xl relative h-[500px]">
            {/* Overlay */}
            <img
              className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="/"
            />
            <div className=" w-full h-[300px] bg-black/70  rounded-b-xl text-white">
              <p className="font-bold text-2xl pl-4 px-2 pt-8">@Potytofries</p>
              <p className="px-2 pt-2 pl-8 mx-4">
                This sandwich is the best sandwich I ever tried! 4 star for this
                one, you can try this sandwich at Breadass.
              </p>

              <p className=" absolute bottom-5 right-5">⭐⭐⭐⭐</p>
              <p className="absolute top-52 right-5 text-sm">
                Category: Breakfast{" "}
              </p>
              <button className="border-0 absolute bottom-5 left-8">
              <AiFillHeart size={20} color="red"/>
              </button>

              <button className="border-0 absolute bottom-5 left-32">
              <AiOutlineComment size={20} color="white"/>
              </button>

              <button className="border-0 absolute bottom-5 left-56">
              <BsBookmarkHeart size={20} color="white"/>
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
