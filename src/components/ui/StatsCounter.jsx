import React from 'react';
import AnimatedStatsCounter from './AnimatedStatsCounter';

const StatsCounter = () => {
  const stats = [
    { number: '1000+', label: 'Happy Parents' },
    { number: '15+', label: 'Years of Experience' },
    { number: '50+', label: 'Expert Doctors' },
    { number: '25+', label: 'Clinic Locations' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <AnimatedStatsCounter stats={stats} />
  );
};

export default StatsCounter;