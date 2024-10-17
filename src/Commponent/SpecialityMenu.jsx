import React from 'react';
import { Link } from 'react-router-dom';
import item1 from "../assets/item1.png";

const specialities = [
  {
    Image: item1, 
    id: '',
  },
  {
    Image: item1,
    id: '',
  },
  {
    Image: item1,
    id: '',
  },
  {
    Image: item1,
    id: '',
  },
];

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800" id='Speciality'>
      <h1 className="text-3xl font-medium">
        Find by Speciality
        </h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule your appointment.
      </p>

      <div className="flex sm:justify-center gap-4 pt-2 w-full overflow-scroll">
        {specialities.map((speciality, index) => (
          <div key={index} className="">
            <img  
              src={speciality.Image} 
              alt={`Speciality ${speciality.id}`} 
              className="w-36 sm:24 mb-2" 
            />
            <p className="">{speciality.id}</p>
            <Link onClick={() =>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
            to={`/doctors/${speciality.id}`}
            >
            <button
               
              className=""
            >
              General physcal
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
