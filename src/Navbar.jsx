import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();
  
  return (
    <div className='ml-2 mt-2 mb-[2rem] font-bold text-md md:text-lg lg:text-4xl cursor-pointer'
    onClick={()=>navigate("/")}
    >Frontend Daily</div>
  )
}

export default Navbar