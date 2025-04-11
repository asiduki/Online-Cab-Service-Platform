// Import necessary libraries
import React from 'react';
import Routing  from '../utils/Routing';
import { useEffect} from 'react';

const Portfolio = () => {
  useEffect(()=>{
    document.title = "CHANDRA PRABHA TRAVELS";
  },[]);
  
  // const router = createBrowserRouter([
  //   {path:"/",
  //     element:<Home/>
  //   },
  //   {
  //     path:'/About',
  //     element:<About/>
  //   },
  //   {
  //     path:'/Book',
  //     element:<Book/>
  //   },
  //   {
  //     path:'/Updates',
  //     element:<Updates/>
  //   },
  //   {
  //     path:'/Feedback',
  //     element:<Feedback/>
  //   },
  //   {
  //     path:'/Login',
  //     element:<Login handledata={handledata}/>
  //   },
  // ]);
  
  return (
    <>
    <Routing />
    </>
  );
};

export default Portfolio;
