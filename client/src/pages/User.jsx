import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";

function User(props) {
  return (
    //   <div className="rounded-xl relative ">
    //   {/* Overlay */}
    //   <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">

    //     <p className="font-bold text-2xl pl-4 px-2 pt-4">@Potytofries</p>
    //     <p className="px-2 pl-8 mx-4">
    //       This sandwich is the best sandwich I ever tried! 4 star for this
    //       one, you can try this sandwich at Breadass.
    //     </p>

    //     <p className=" absolute bottom-3 right-5">⭐⭐⭐⭐</p>
    //     <p className="absolute top-1 right-5 text-sm">
    //       Category: Breakfast{" "}
    //     </p>
    //   </div>
    //   <img
    //     className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
    //     src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
    //     alt="/"
    //   />
    // </div>
    <div>
      <NavbarLogin />
      <div class="relative max-w-md mx-auto md:max-w-2xl mt-40 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
              <div class="relative">
                <img
                  src="char.png"
                  alt="pfp"
                  class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div class="w-full text-center mt-20">
              <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    3
                  </span>
                  <span class="text-sm text-slate-400">Post</span>
                </div>
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    1
                  </span>
                  <span class="text-sm text-slate-400">Likes</span>
                </div>

                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    4
                  </span>
                  <span class="text-sm text-slate-400">Bookmarks</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
              Potytofries
            </h3>

            <div class="mt-6 py-6 border-t border-slate-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-4">
                  <p class="font-light leading-relaxed text-slate-600 mb-4"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

User.propTypes = {};

export default User;
