import React from 'react'
import Navbar from './Navbar'

const About = () => {
  const object = [
    {name:"Airport Transfers" , data:"Seamless and punctual transfers to and from all major airports, ensuring a stress-free start or end to your journey.",Image:" "},
    {name:"Airport Transfers" , data:"Seamless and punctual transfers to and from all major airports, ensuring a stress-free start or end to your journey.",Image:" "},
    {name:"Airport Transfers" , data:"Seamless and punctual transfers to and from all major airports, ensuring a stress-free start or end to your journey.",Image:" "},
    {name:"Airport Transfers" , data:"Seamless and punctual transfers to and from all major airports, ensuring a stress-free start or end to your journey.",Image:" "},
    {name:"Airport Transfers" , data:"Seamless and punctual transfers to and from all major airports, ensuring a stress-free start or end to your journey.",Image:" "},
    {name:"Airport Transfers" , data:"Seamless and punctual transfers to and from all major airports, ensuring a stress-free start or end to your journey.",Image:" "},
    
  ]
  return (
    <div>
      <Navbar/>
      <div className='w-full mt-20  flex flex-col justify-center items-center'>
        <div className='w-[95%] flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-center text-black'>Our Premium Service</h1>
          <p className='text-sm text-center text-gray-500 p-2'>We offer a range of premium services to meet your needs. From airport transfers to corporate travel, we have you covered.</p>
        </div>
        <div className='w-[95%]  flex items-center justify-center py-5 flex-wrap gap-10'>
          {object.map((value,index)=>{
            return  <div className='bg-[#e8e8e8] p-4 w-80 h-80 rounded-lg grid grid-cols-1' key={index}>
          <div className='flex w-full justify-center'><img src="" alt="" className='w-20 h-20 rounded-b-full border-0'/></div>
          <div className='flex w-full justify-center'><h1 className='text-xl font-bold text-center text-black p-2  '>{value.name}</h1></div>
          <div className='flex w-full justify-center'><p className='text-sm text-center text-gray-500 p-2 '>{value.data}</p></div> 

            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default About
