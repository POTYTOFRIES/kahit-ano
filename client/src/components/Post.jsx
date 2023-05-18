import React, { useState } from "react";
import axios from "axios";
import Ratings from "./Ratings";
import FormData from 'form-data';

function Post({ isVisible, onClose }) {
 
  const [post, setPost] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  
  if (!isVisible) return null;
  const handleTitle = (e) => {
    let value = e.target.value;
    setPost({
      ...post,
      title: value,
    });
  };

  const handleBody = (e) => {
    let value = e.target.value;
    setPost({
      ...post,
      body: value,
    });
  };

  const handleCategory = (e) => {
    let value = e.target.value;
    setPost({
      ...post,
      category: value,
    });
  };

  const handleRate = (e) => {
    let value = e.target.value;
    setPost({
      ...post,
      rate: value,
    });
  };

  const handlePhoto = (e) => {
    setIsUploading(true);
    const file = e.target.files[0];

    //FormData is used when sending files to the backend so the endpoint can read it
    const formData = new FormData();
    formData.append("file", file);
    //line 80-84 is uploading to cloudinary
    axios
      .post("http://localhost:8000/upload-photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(`this is upload-picture ${res.data}`);
        setPost({
          ...post,
          photo: res.data.url,
        });
        setIsUploading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsUploading(false);
      });
  };

  const addPost = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/add-post", {
        title: post.title,
        body: post.body,
        category_id: post.category,
        rate: post.rate,
      })
      .then(function (response) {
        localStorage.setItem("jwt_token", response.data.token);
        localStorage.setItem("id", response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[800px] flex flex-col">
        <div class="heading text-center font-bold text-2xl m-5 text-gray-200">
          New Post
        </div>
        <form onSubmit={addPost}>
          <div class="editor mx-auto rounded-xl bg-gray-100 w-10/12 flex flex-col text-gray-800 border border-gray-500 p-4 shadow-lg max-w-2xl">
            <input
              class="title bg-gray-200 border rounded-lg border-gray-300 p-2 mb-4 outline-none"
              spellcheck="false"
              placeholder="Title"
              type="text"
              onChange={handleTitle}
              value={post.title}
            />
            <input
              class="description bg-gray-200 sec p-3 h-60 border rounded-lg border-gray-300 outline-none"
              spellcheck="false"
              placeholder="Describe everything about this post here"
              onChange={handleBody}
              value={post.body}
            ></input>

            <div class="icons flex text-gray-500 m-2">
              <Ratings onChange={handleRate}
              value={post.rate}/>
              {/* <svg
                class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg> */}

            <div className="">
              <p>Category:</p>
              <input
                type="radio"
                name="category"
                id="Breakfast"
                value="Breakfast"
                onChange={handleCategory}
              />
                <label for="Breakfast">Breakfast</label>
              <br />
              <input
                type="radio"
                name="category"
                id="Lunch"
                value="Lunch"
                onChange={handleCategory}
              />
                <label for="Lunch">Lunch</label>
              <br />
              <input
                type="radio"
                name="category"
                id="Dinner"
                value="Dinner"
                onChange={handleCategory}
              />
                <label for="Dinner">Dinner</label>
              <br />
              <input
                type="radio"
                name="category"
                id="Dessert"
                value="Dessert"
                onChange={handleCategory}
              />
                <label for="Dessert">Dessert</label>
              <br />
              <input
                type="radio"
                name="category"
                id="Drinks"
                value="Drinks"
                onChange={handleCategory}
              />
                <label for="Drinks">Drinks</label>
              <br />
              <input
                type="radio"
                name="category"
                id="Snacks"
                value="Snacks"
                onChange={handleCategory}
              />
                <label for="Snacks">Snacks</label>
              <br />
            </div>

              <div>
                <input type="file" name="add image" onChange={handlePhoto} />
              </div>

            </div>

            <div class="buttons flex">
              <div
                class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
                onClick={() => onClose()}
              >
                Cancel
              </div>
              <button
                class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                type="submit"
                disabled = {isUploading}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
