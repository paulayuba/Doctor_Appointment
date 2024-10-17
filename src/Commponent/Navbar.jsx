import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import doctor_image from "../assets/doctor_image.webp"
import logo from "../assets/logo.png"


const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
     <img className="w-16 cursor-pointer" src={logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctor">
          <li className="py-1">All Doctor</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
           <img className="w-16 rounded-full" src={doctor_image} alt="" />
            <div className="w-3.5">
            <RiArrowDropDownLine />
            </div>
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={()=>navigate(My-profile)} className="hover: text-black cursor-pointer">My profile</p>
                <p onClick={()=>navigate(My-Apointment)} className="hover: text-black cursor-pointer">My Apointment</p>
                <p onClick={()=>setToken(false)} className="hover: text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-purple-500 text-white px-6 py-3 rounded-full font-light"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
