import React from "react";
import mobile from "../assets/mobile.png";

function Banner() {
  return (
    <>
      <div className="m-5 md:m-20">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mockup-window border border-gray-400 bg-yellow-400 shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col md:flex-row dark:bg-slate-800 dark:text-white">
          <div className="order-2 md:order-1 w-full md:w-1/2">
            <div className="px-4 py-8 md:py-16 bg-[#fff356] text-gray-700 hover:text-gray-900 transition duration-300 dark:bg-slate-900 dark:text-white">
              <h1 className="text-xl font-bold mb-4 text-orange-500">
                Hey Buddy 😊
              </h1>
              <h1 className="text-lg font-semibold mb-5 mt-5 text-green-900">
                Welcome Here to learn something new Everyday
              </h1>
              <h2 className="text-sm font-semibold m-5">
                Embrace the journey of learning with an open heart and a curious
                mind. Every step you take towards growth opens new doors of
                opportunity and understanding.
              </h2>
              <p className="text-base">
                I am Hari Om, a Software Engineer committed to delivering
                high-quality, educational content on YouTube. My channel focuses
                on providing practical insights, tutorials, and expert tips to
                help developers and tech enthusiasts enhance their skills and
                stay ahead in the ever-evolving field of software development.
                Join me as I explore innovative solutions and share valuable
                knowledge to support your journey in the tech world.
              </p>
              <br />
              <h1 className="text-xl font-semibold mt-10 mb-4 text-orange-500">
                Any Doubt? 🤔
              </h1>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <br />
              <div className="w-full md:w-1/2 px-0.3 py-3 bg-[#fff356] text-xl font-semibold text-gray-700 hover:text-gray-900 transition duration-300 flex justify-start dark:bg-slate-900 dark:text-white">
                <button className="btn btn-outline btn-warning">
                  Send Email
                </button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center px-4 py-8 md:py-16 bg-[#fff356] text-xl font-semibold text-gray-700 hover:text-gray-900 transition duration-300 dark:bg-slate-900 dark:text-white">
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <img src={mobile} alt="Mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
