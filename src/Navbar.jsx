import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row gap-x-3 items-center ml-2 mt-2 mb-[2rem]  ">
      <div
        className="font-bold text-md md:text-lg lg:text-4xl cursor-pointer m-0"
        onClick={() => navigate("/")}
      >
        Frontend Daily
      </div>
   <div>
       <Link
        to="https://github.com/Vivek7038/Frontend-Daily" 
        target="_blank"
        >
        <FaGithub className="w-6 h-6 self-center" />
      </Link>
        </div>
    </div>
  );
};

export default Navbar;
