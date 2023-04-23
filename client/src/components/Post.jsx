import React from "react";

export default function Post() {
  return (
    <div>
      <form>
        <label for="chat" class="sr-only">
          Your message
        </label>
        <div class="flex items-center m-12 px-3 py-2 rounded-lg ">
          <button
            type="button"
            class="inline-flex justify-center p-2 text-gray-900 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Upload image</span>
          </button>
         
    
          <textarea
            id="chat"
            rows="4"
            class="block mx-4 p-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-400"
            placeholder="Your message..."
          ></textarea>
          <button
            type="submit"
            class="inline-flex justify-center p-2 text-gray-900 rounded-full cursor-pointer hover:bg-gray-400"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
            <span class="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  );
}
