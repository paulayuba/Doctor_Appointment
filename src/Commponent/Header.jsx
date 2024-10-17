import React from "react";
import HomePage_image from "../assets/HomePage_image.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import group_image from "../assets/group_image.webp"
import doctor_image from "../assets/doctor_image.webp"

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-grow bg-purple-500 h-full p-10 rounded-lg px-6 md:px-10 lg:px-20">
      {/*........Left side.......*/}
      <div className="md:w-1/2 flex- flex-col items-start justify-center gap-10 m-auto md:">
        <p className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight">
          Book Appointment
          <br  className="hidden sm:block"/> With trusted doctors
        </p>
        <h2 className="flex w-[20%] gap-2">
          <img className="rounded-full" src={group_image} alt="" />
          <img className="rounded-full" src={doctor_image} alt="" />
        </h2>
        <div className="flex items-center py-4">
          <a className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105" href="#speciality">
            Book Appointment 
            <IoIosArrowRoundForward  className="w-3"/>
          </a>
        </div>

        <img src="" alt="" />
      </div>
      {/*.......Right side......*/}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-64 rounded-lg" src={HomePage_image} alt="" />
      </div>
    </div>
  );
};

export default Header;
