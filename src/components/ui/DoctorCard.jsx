import React from 'react';

const DoctorCard = ({ 
  name, 
  credentials, 
  location, 
  imageSrc, 
  imageAlt = "Doctor" 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-pink-100">
      {/* Doctor Image */}
      <div className="w-full aspect-square overflow-hidden">
        <img 
          src={imageSrc || "/assets/images/doctor-placeholder.jpg"} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Doctor Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-pink-600 font-medium mb-3">{credentials}</p>
        
        <div className="flex items-center text-gray-700">
          <svg className="w-4 h-4 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;