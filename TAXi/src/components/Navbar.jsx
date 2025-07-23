import React, { useContext, useEffect } from "react";
import logo from "./Image/logo.png";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../Context/UserContext/Context";

const Navbar = () => {
  const {isLogin , setisLogin} = useContext(userContext);

  return (
    <div className="flex flex-wrap gap-10 leading-10 pl-2 w-screen absolute bg-white top-0">
      <div className="flex gap-25">
        {/* <img src={logo} className="w-46 h-12 rounded-full " alt="" /> */}
        <NavLink to="/" className="bg-gradient-to-r from-orange-700 to-indigo-800 bg-clip-text  text-transparent font-bold h-12 w-46">
          Chandra Prabha Travels
        </NavLink>
        <NavLink
          to="/Home"
          className={`font-semibold cursor-pointer h-fit hover:underline`}
          style={(value) => {
            return {
              color: value.isActive ? "Red" : " ",
            };
          }}
        >
          Home
        </NavLink>
      </div>
      <NavLink
        to="/About"
        className="font-semibold cursor-pointer h-fit hover:underline"
        style={(value) => {
          return {
            color: value.isActive ? "Red" : " ",
          };
        }}
      >
        About Us
      </NavLink>
      <NavLink
        to="/Updates"
        className="font-semibold cursor-pointer h-fit hover:underline"
        style={(value) => {
          return {
            color: value.isActive ? "Red" : " ",
          };
        }}
      >
        Updates
      </NavLink>
      <NavLink
        to="/Feedback"
        className="font-semibold cursor-pointer h-fit hover:underline"
        style={(value) => {
          return {
            color: value.isActive ? "Red" : " ",
          };
        }}
      >
        Reviews and Feedback
      </NavLink>
      <NavLink
        to="/Contact"
        className="font-semibold cursor-pointer h-fit hover:underline"
        style={(value) => {
          return {
            color: value.isActive ? "Red" : " ",
          };
        }}
      >
        Contact US
      </NavLink>
      <NavLink
        to="/"
        className={({isActive})=>`font-semibold cursor-pointer absolute right-5 top-1 bg-gray-400 hover:bg-gray-300 hover:underline h-fit items-center text-center
        rounded-md  w-20 ${isLogin ? "hidden" : " "}`}
      >
        Login
      </NavLink>
    </div>
  );
};

export default Navbar;
