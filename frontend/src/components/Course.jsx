import React from "react";
import Card from "./Card";
import list from "../list.json";
import { Link } from "react-router-dom";
function Course() {
  const filterData = list.filter((data) => data.category === "Paid");
  console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Hey 🙋🏻‍♂️ We are delighted to have you{" "}
            <span className="text-2xl bold  md:text-4xl text-orange-500 ">
              Here
            </span>
          </h1>
          <p className="mt-5 p-2 font-extralight dark:text-yellow-500 text-purple-900 ">
            Welcome to our comprehensive learning platform! Our courses are
            designed to help students master Full Stack Development, covering
            React, Node.js, JavaScript, and more. Whether you're a beginner or
            seeking to advance your skills, our expert instructors guide you
            through practical projects and real-world scenarios. Join us to gain
            proficiency in front-end and back-end development, and build robust,
            scalable applications. Start your learning journey today!
          </p>
          <Link to={"/"}>
            <button className="bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-600 duration-300 mt-5">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {filterData.map((item) => (
            <Card key={item.key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
