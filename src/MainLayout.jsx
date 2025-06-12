import React, { useContext } from "react";
import { ThemeContext } from "../src/context/ThemeContext";

const MainLayout = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-950 text-white min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <div className="flex flex-row justify-evenly items-center px-8 py-4">
        <img
          src="logo-removebg-preview.png"
          alt="Logo"
          className="rounded-md h-16 w-20"
        />

        <nav>
          <ul className="flex gap-8 text-md font-medium">
            <li>
              <a href="#" className="hover:text-red-600">
                MENU
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                LOCATION
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-2">
          <button
            className={`rounded-full font-medium w-10 mr-5  transition duration-200 ${
              theme === "dark"
                ? "bg-gray-700 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={handleToggleTheme}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="bg-[#F13528] text-white px-4 py-2 rounded-sm hover:bg-red-700 cursor-pointer">
            Login
          </button>
        </div>
      </div>

      <div className="w-full flex justify-evenly">
        <div>
          <h1 className="text-8xl mt-12 ml-20 font-extrabold">YOUR FEET</h1>
          <h1 className="text-8xl ml-20 font-extrabold">DESERVE</h1>
          <h1 className="text-8xl ml-20 font-extrabold">THE BEST</h1>
          <p className="ml-[88px]">
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO
          </p>
          <p className="ml-[88px]">
            HELP YOU WITH OUR SHOES. YOUR FEET DESERVE
          </p>
          <p className="ml-[88px]">
            THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          </p>
          <p className="ml-[88px]">SHOES.</p>

          <div className="flex mt-5 ml-[88px] gap-4">
            <button className="bg-[#F13528] hover:bg-red-700 text-white px-4 py-2">
              Shop Now
            </button>
            <button
              className={`border-2 px-4 py-2 font-extralight ${
                theme === "dark"
                  ? "border-white text-white"
                  : "border-black text-black"
              }`}
            >
              Category
            </button>
          </div>

          <p className="ml-[88px] mt-5">Also Available On</p>
          <div className="flex ml-[72px] mt-3 gap-2">
            <img
              src="flipkart-logo-39903.png"
              className="w-16 h-16"
              alt="Flipkart"
            />
            <img
              src="/picture-logo-42725.png"
              className="w-20 h-20"
              alt="Amazon"
            />
          </div>
        </div>

        <img
          src="/ccd9e7f69d4cbfcf331c69b8e21db35d2e158410.png"
          alt="Main Product"
          className="w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default MainLayout;
