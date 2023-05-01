import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />

      <div className=" m-auto px-4">
        <h1 className="text-orange-500 font-bold text-4xl text-center mt-8">
          About{" "}
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 pt-6 p-12">
          <div></div>
          <h1 className="border shadow-xl bg-gray-200 rounded-lg hover:scale-105 duration-300 px-8 py-12 text-justify text-2xl font-medium">
            <span className="text-orange-500">
              Kahit Ano <br />
            </span>{" "}
            web app is designed to help users discover new dishes and find what
            kind of food are they craving for based on their preferences. <br />
            The app is intuitive and user-friendly, allowing users to easily
            search for different dishes based on various criteria such as
            cuisine and rating. <br /> <br />
          </h1>

          <h1 className="border shadow-xl bg-gray-200 rounded-lg hover:scale-105 duration-300 px-8 py-12 top text-justify text-2xl font-medium">
            <span className="text-orange-500">
              Features: <br />{" "}
            </span>
            •Users can leave reviews and ratings for dishes they have tried,{" "}
            <br /> which will help the app to provide even more accurate
            recommendations in the future <br />
            •Users can also easily sort and filter the results based on their
            preferences <br />
            •Users can like a certain post from other user and that will
            bookmarked that post <br />
            •Users can leave a comment or questions to the Original post <br />
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
