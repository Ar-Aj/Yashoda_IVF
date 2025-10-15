import React from 'react';

const FloatingContactButton = () => {
  return (
    <button className="fixed bottom-4 right-4 w-14 h-14 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all z-30">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <span className="text-xs font-medium mt-0.5">Contact</span>
    </button>
  );
};

export default FloatingContactButton;