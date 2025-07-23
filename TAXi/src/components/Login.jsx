import React, { useState , useContext} from "react";
import lofo from "./Image/logo.png"
import {useForm} from "react-hook-form";
import {useNavigate} from  "react-router-dom";
import axios from "axios";
import { userContext } from "../Context/UserContext/Context";

const Login = ({handledata}) => {
  const {isLogin , setisLogin} = useContext(userContext);
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_KEY;
  const [message , setMessage] = useState(" ");
  const {register , handleSubmit , reset} = useForm();
  
 
  const handelapi = async(data)=>{
    try{
      setMessage(" ");
      const result = await axios.post(`${import.meta.env.VITE_API_KEY}/Login/login`,{email :data.email , password:data.password})
      if(result.status === 200){
        setTimeout(() => {
          setisLogin(true)
          navigate("/Home")
        }, 1000);
      }
      else{
          setMessage("Incorrect details");
      }
    }
    catch(err){
      setMessage(" ")
      console.log(err.message)
      setMessage("Username or password are incorrect");
    }
  }
  return (

    
    <div className={`bg-[url('/imagecar.webp')] justify-center grid items-center bg-cover bg-center m-0 h-screen`}>
      <div className="bg-white  h-100 w-100 shadow-lg  shadow-black rounded-md p-4">
      {/* <img src={lofo} alt="" /> */}
      <h1 className="bg-gradient-to-r from-orange-700 to-indigo-800 bg-clip-text text-2xl  text-transparent font-bold text-center">
          Chandra Prabha Travels 
        </h1>
        <br />
        <form onSubmit={handleSubmit(handelapi)} className=" text-center flex flex-col leading-10">
          <div className="text-left flex flex-col">
            <label>Username:</label>
          </div>
          <input
            type="text"
            {...register('email')}
            placeholder="Enter Email"
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
          <div className="text-red-500">
          {message}
          </div>
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
