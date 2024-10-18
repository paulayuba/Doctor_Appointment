import React from 'react';
import image_3 from "../assets/image_3.webp";
import image_4 from "../assets/image_4.jpg"
import image_5 from "../assets/image_5.webp";
import image_7 from "../assets/image_7.jpg";
import image_8 from "../assets/image_8.webp";
import image_9 from "../assets/image_9.jpg";
import image_10 from "../assets/image_10.jpg";
import image_11 from "../assets/image_11.png";

const TopDoctors = [
  {
    Image: image_3,
    name: "Dr. John Doe",
    id: '1',
    description: "Cardiologist",
  },
  {
    Image: image_4,
    name: "Dr. Jane Smith",
    id: '2',
    description: "Neurologist",
  },
  {
    Image: image_5,
    name: "Dr. Sam Wilson",
    id: '3',
    description: "Dermatologist",
  },
  {
    Image: image_7,
    name: "Dr. Emily Clark",
    id: '4',
    description: "Pediatrician",
  },
  {
    Image: image_8,
    name: "Dr. Richard Lee",
    id: '5',
    description: "Orthopedic Surgeon",
  },
  {
    Image: image_9,
    name: "Dr. Maria Gomez",
    id: '6',
    description: "Oncologist",
  },
  {
    Image: image_10,
    name: "Dr. Peter Wong",
    id: '7',
    description: "Ophthalmologist",
  },
  {
    Image: image_11,
    name: "Dr. Nina Patel",
    id: '8',
    description: "Gynecologist",
  },
];

const TopDoctor = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Doctors to Book</h1>
      <p className="text-center text-lg mb-10">Browse through our extensive list of trusted doctors and schedule your appointment.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {TopDoctors.map((doctor, index) => (
          <div key={doctor.id} className="bg-white border rounded-lg p-4">
            <img src={doctor.Image} alt={doctor.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="flex justify-center items-center">
                <p className="text-sm text-green-600">Available</p>
              </div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">{doctor.name}</p>
              <p className="text-gray-600 mb-2">{doctor.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">More</button>
      </div>
    </div>
  );
};

export default TopDoctor;
