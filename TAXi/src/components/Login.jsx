import React from "react";
import lofo from "./Image/logo.png"
import {useForm} from "react-hook-form";


const Login = ({handledata}) => {
  const {register , handleSubmit , reset} = useForm();
  const handlesubmitbutton = (data)=>{
    handledata(data);
    reset();
  }
  return (
    <div className={`bg-[url('/imagecar.webp')] justify-center grid items-center bg-cover bg-center m-0 h-screen`}>
      <div className="bg-white  h-100 w-100 shadow-lg  shadow-black rounded-md p-4">
      {/* <img src={lofo} alt="" /> */}
      <h1 className="bg-gradient-to-r from-orange-700 to-indigo-800 bg-clip-text text-2xl  text-transparent font-bold text-center">
          Chandra Prabha Travels 
        </h1>
        <br />
        <form onSubmit={handleSubmit(handlesubmitbutton)} className=" text-center flex flex-col leading-10">
          <div className="text-left flex flex-col">
            <label>Username:</label>
          </div>
          <input
            type="text"
            {...register('name')}
            placeholder="Enter Username"
            className="border-b-1 h-8 font-semibold outline-0 pl-2 pt-2 pb-2 w-full"
          />
          <div className="text-left flex flex-col">
            <label>Password:</label>
          </div>
          <input
            type="password"
            {...register('password')}
            placeholder="Enter Password"
            className="border-b-1  h-8 font-semibold outline-0 pl-2 pt-2 pb-2  w-full"
          />
          <input
            type="submit"
            value="Login"
            className="bg-[#504B38] mt-5 rounded-md text-xl font-semibold h-10 hover:bg-[#B9B28A] cursor-pointer text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
