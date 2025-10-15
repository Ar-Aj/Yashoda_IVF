import React from 'react';

const StatsCounter = () => {
  const stats = [
    { number: '1000+', label: 'Happy Parents' },
    { number: '15+', label: 'Years of Experience' },
    { number: '50+', label: 'Expert Doctors' },
    { number: '25+', label: 'Clinic Locations' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="bg-pink-500 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center text-white ${index < stats.length - 1 ? 'border-r border-white border-opacity-30' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;