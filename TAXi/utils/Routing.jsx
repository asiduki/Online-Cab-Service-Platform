import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Book from '../src/components/Book';
import Updates from '../src/components/updates';
import Feedback from '../src/components/feedback';
import Login from '../src/components/Login';
import Contact from '../src/components/Contact';
import Navbar from '../src/components/Navbar';

const handledata = (data)=>{
  console.log(data);
}

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route  path="/Book" element={<Book/>}/>
        <Route  path="/Updates" element={<Updates/>}/>
        <Route  path="/Feedback" element={<Feedback/>}/>
        <Route path='/Contact' element={<Updates/>}/>
        <Route  path="/Login" element={<Login handledata={handledata}/>}/>
        </Routes>
    </div>
  )
}

export default Routing
