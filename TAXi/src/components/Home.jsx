import React, { useContext } from "react";
import "./Style.css";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../Context/UserContext/Context";

function Home() {
  // const [isLogin] = useContext(userContext);
  return (
    <>
      <Navbar />
      <div className="bg-gray-300 min-h-screen w-screen">
        <div className="flex justify-center items-center text-center w-full uppercase">
          <div className="bg-[url('/Homeback.jpg')] w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-10">
            <div className="w-full max-w-2xl text-white flex flex-col justify-center items-center p-5 rounded-2xl sm:rounded-4xl">
              <div className="bg-white px-3 py-1 shadow-md text-black shadow-black rounded-full font-semibold text-xs sm:text-base">
                Premium Taxi Service
              </div>
              <h1 className="text-5xl sm:text-7xl font-semibold bg-gradient-to-r from-orange-700 to-indigo-800 bg-clip-text text-transparent text-center">
                Chandra Prabha Travel
              </h1>
              <p className="text-lg sm:text-3xl font-bold text-center">
                Our Journey, Our Commitment
              </p>
              <p className="text-xs sm:text-sm p-2 text-center">
                Reliable, comfortable, and always on time. Book your ride today!
              </p>
              <div className="flex flex-col sm:flex-row pt-4 gap-3">
                <NavLink
                  to="/Contact"
                  className="bg-[#dbecd9] w-full sm:w-35 h-12 text-black p-2 rounded-md text-lg hover:bg-white cursor-pointer text-center"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/About"
                  className="w-full sm:w-30 p-2 rounded-md text-lg border border-white hover:backdrop-blur-md cursor-pointer text-center"
                >
                  More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;