import React, { useState, useEffect, useRef } from 'react';

const AnimatedStatsCounter = ({ stats, duration = 5000 }) => {
  const [counters, setCounters] = useState(stats.map(stat => 0));
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    
    const timers = stats.map((stat, index) => {
      // Extract number from string (e.g., "1000+" -> 1000, "95%" -> 95)
      const targetValue = parseInt(stat.number.replace(/[^\d]/g, '')) || 0;
      
      if (targetValue === 0) {
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = stat.number;
          return newCounters;
        });
        return null;
      }

      const increment = targetValue / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          clearInterval(timers[index]);
          setCounters(prev => {
            const newCounters = [...prev];
            // Preserve original format (e.g., "1000+" or "95%")
            newCounters[index] = stat.number;
            return newCounters;
          });
        } else {
          setCounters(prev => {
            const newCounters = [...prev];
            // Format the number with original suffix
            const suffix = stat.number.replace(/[\d]/g, '');
            newCounters[index] = Math.floor(currentValue) + suffix;
            return newCounters;
          });
        }
      }, interval);
    });

    return () => {
      timers.forEach(timer => {
        if (timer) clearInterval(timer);
      });
    };
  }, [isVisible, stats, duration]);

  return (
    <div ref={counterRef} className="bg-pink-500 py-10">
      <div className="container mx-auto px-4">
        {/* Mobile view - 2 columns for first 4 items, full width for last item */}
        <div className="grid grid-cols-2 md:hidden gap-6">
          {stats.slice(0, 4).map((stat, index) => (
            <div 
              key={index} 
              className="text-center text-white border-r border-white border-opacity-30"
            >
              <div className="text-3xl font-bold mb-2">{counters[index]}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Horizontal divider above last item in mobile view */}
        {stats.length > 4 && (
          <div className="md:hidden border-t border-white border-opacity-30 my-6 mx-auto w-1/2"></div>
        )}
        
        {/* Last item in mobile view - centered */}
        {stats.length > 4 && (
          <div className="md:hidden text-center text-white mb-6">
            <div className="text-3xl font-bold mb-2">{counters[4]}</div>
            <div className="text-sm opacity-90">{stats[4].label}</div>
          </div>
        )}
        
        {/* Desktop view - 5 columns with vertical dividers */}
        <div className="hidden md:grid md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center text-white ${
                index < stats.length - 1 
                  ? 'border-r border-white border-opacity-30' 
                  : ''
              }`}
            >
              <div className="text-4xl font-bold mb-2">{counters[index]}</div>
              <div className="text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsCounter;