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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-center">Find by Speciality</h1>
      <p className="text-center mt-4 text-gray-600">
        Simply browse through our extensive list of trusted doctors, schedule your appointment.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialities.map((speciality, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center">
            <img 
              src={speciality.Image} 
              alt={`Speciality ${speciality.id}`} 
              className="w-24 h-32 object-cover mb-4" 
            />
            <p className="text-lg font-medium capitalize mb-2">{speciality.id}</p>
            <Link
            to={`/speciality/${speciality.id}`}
            >
            <button
               
              className=" bg-purple-600 text-white rounded-full py-2 px-2 hover:underline-none"
            >
              Learn More
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
