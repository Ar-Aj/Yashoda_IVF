import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logomain.png';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <Link to="/">Yashoda Fertility</Link>
          </div>
           
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-600">Home</Link>
            </li>
            
            <li className="relative group">
              <button className="hover:text-blue-600 flex items-center">
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                <Link to="/about-us/meet-our-fertility-expert" className="block px-4 py-2 hover:bg-gray-100">Meet Our Fertility Expert</Link>
              </div>
            </li>
            
            <li className="relative group">
              <button className="hover:text-blue-600 flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                <Link to="/services/ivf" className="block px-4 py-2 hover:bg-gray-100">IVF</Link>
                <Link to="/services/iui" className="block px-4 py-2 hover:bg-gray-100">IUI</Link>
                <Link to="/services/icsi" className="block px-4 py-2 hover:bg-gray-100">ICSI</Link>
                <Link to="/services/laparoscopy" className="block px-4 py-2 hover:bg-gray-100">Laparoscopy</Link>
                <Link to="/services/laser-assisted-hatching" className="block px-4 py-2 hover:bg-gray-100">Laser Assisted Hatching</Link>
                <Link to="/services/blastocyst-culture-and-transfer" className="block px-4 py-2 hover:bg-gray-100">Blastocyst Culture and Transfer</Link>
                <Link to="/services/hysteroscopy" className="block px-4 py-2 hover:bg-gray-100">Hysteroscopy</Link>
              </div>
            </li>
            
            <li className="relative group">
              <button className="hover:text-blue-600 flex items-center">
                About Fertility
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                <Link to="/about-fertility" className="block px-4 py-2 hover:bg-gray-100">About Fertility</Link>
                <Link to="/about-fertility/male-fertility-problems" className="block px-4 py-2 hover:bg-gray-100">Male Fertility Problems</Link>
                <Link to="/about-fertility/female-infertility-problems" className="block px-4 py-2 hover:bg-gray-100">Female Infertility Problems</Link>
                <Link to="/about-fertility/infertility-problems" className="block px-4 py-2 hover:bg-gray-100">Infertility Problems</Link>
              </div>
            </li>
            
            <li>
              <Link to="/articles" className="hover:text-blue-600">Articles</Link>
            </li>
            
            <li>
              <Link to="/type/video" className="hover:text-blue-600">Videos</Link>
            </li>
            
            <li>
              <Link to="/contact-us" className="hover:text-blue-600">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;