import React from 'react';
import { Link } from 'react-router-dom';
import item1 from "../assets/item1.png";

const specialities = [
  {
    Image: item1, 
    id: 'cardiology',
    name: 'Cardiology'
  },
  {
    Image: item1,
    id: 'neurology',
    name: 'Neurology'
  },
  {
    Image: item1,
    id: 'orthopedics',
    name: 'Orthopedics'
  },
  {
    Image: item1,
    id: 'dermatology',
    name: 'Dermatology'
  },
];

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-0 text-gray-800" id='Speciality'>
      <h1 className="text-3xl font-medium">
        Find by Speciality
      </h1>
      <p className="text-center text-sm">
        Simply browse through our extensive list of trusted <br /> doctors, schedule your appointment.
      </p>

      <div className="flex sm:justify-center gap-4 pt-2 w-full">
        {specialities.map((speciality, index) => (
          <div key={index} className="text-center">
            <img  
              src={speciality.Image} 
              alt={`Speciality ${speciality.name}`} 
              className="w-36 sm:w-24 mb-2" 
            />
            <p className="text-sm font-semibold">{speciality.name}</p>
            <Link 
              onClick={() =>scrollTo(0,0)} 
              className='text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
              to={`/doctors/${speciality.id}`} 
            >
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
