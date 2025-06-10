import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="">
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

        <button className="bg-[#F13528] text-white px-4 py-2 rounded-sm hover:bg-red-700  cursor-pointer">
          Login
        </button>
      </div>
      <div className="h-screen w-full flex justify-evenly ">
        <div className="">
          <h1 className="text-8xl mt-12 ml-20 font-extrabold ">YOUR FEET</h1>
          <h1 className="text-8xl ml-20 font-extrabold">DESRVE</h1>
          <h1 className="text-8xl ml-20 font-extrabold">THE BEST</h1>
          <p className="ml-22">YOUR FEET DESERVE THE BEST AND WE ARE HERE TO</p>
          <p className="ml-22">HELP YOU WITH OUR SHOES.YOUR FEET DESERVE</p>
          <p className="ml-22">THE BEST AND WE'HERE TO HELP YOU WITH OUR</p>
          <p className="ml-22">SHOES.</p>
          <div className="flex mt-5 ml-22">
            <button className="bg-[#F13528] cursor-pointer hover:bg-red-700 text-white w-27 h-8">
              Shop Now
            </button>
            <button className="border-2 w-25 h-8 ml-7 font-extralight">
              Category
            </button>
          </div>
          <p className="ml-22 mt-5">Also Available On</p>
          <div className="flex">
            <img
              src="flipkart-logo-39903.png"
              className="w-15 h-15 ml-18 mt-3"
              alt=""
            />
            <img
              src="/picture-logo-42725.png"
              className="w-22 h-20 ml-1 mt-2"
              alt=""
            />
          </div>
        </div>
        <img
          src="/ccd9e7f69d4cbfcf331c69b8e21db35d2e158410.png"
          alt=""
          className="w-xl h-xl"
        />
      </div>
      <div className="shadow-md w-full h-20 bg-gray-100 mt-8">
        <footer>
          <ul className="flex justify-around items-center">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">MENU</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default App;
