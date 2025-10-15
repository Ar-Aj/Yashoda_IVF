import React from 'react';

const TestimonialCard = ({ 
  name, 
  location, 
  testimonial, 
  imageSrc, 
  imageAlt = "Patient" 
}) => {
  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden">
      {/* Testimonial Image */}
      <img 
        src={imageSrc || "/assets/images/testimonial-1.jpg"} 
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Testimonial Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <p className="text-sm italic mb-3">"{testimonial}"</p>
        <div className="font-bold">{name}</div>
        <div className="text-xs opacity-80 flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          {location}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;