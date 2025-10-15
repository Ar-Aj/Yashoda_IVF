import React from 'react';

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  imageSrc, 
  imageAlt = "Blog post", 
  category = "Blog",
  readTime = "5 min read"
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      {/* Blog Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={imageSrc || "/assets/images/blog-placeholder.jpg"} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        
        <button className="text-pink-500 font-bold text-sm flex items-center hover:text-pink-600 transition-colors">
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;