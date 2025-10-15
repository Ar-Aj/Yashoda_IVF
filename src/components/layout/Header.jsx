import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about-us',
      dropdown: [
        { name: 'About Us', path: '/about-us' },
        { name: 'Meet Our Fertility Expert', path: '/about-us/meet-our-fertility-expert' }
      ]
    },
    { 
      name: 'Services', 
      path: '/services/ivf',
      dropdown: [
        { name: 'IVF', path: '/services/ivf' },
        { name: 'IUI', path: '/services/iui' },
        { name: 'ICSI', path: '/services/icsi' },
        { name: 'Laparoscopy', path: '/services/laparoscopy' },
        { name: 'Laser Assisted Hatching', path: '/services/laser-assisted-hatching' },
        { name: 'Blastocyst Culture and Transfer', path: '/services/blastocyst-culture-and-transfer' },
        { name: 'Hysteroscopy', path: '/services/hysteroscopy' }
      ]
    },
    { 
      name: 'About Infertility', 
      path: '/about-fertility',
      dropdown: [
        { name: 'About Fertility', path: '/about-fertility' },
        { name: 'Male Fertility Problems', path: '/about-fertility/male-fertility-problems' },
        { name: 'Female Infertility Problems', path: '/about-fertility/female-infertility-problems' },
        { name: 'Infertility Problems', path: '/about-fertility/infertility-problems' }
      ]
    },
    { name: 'Blog', path: '/articles' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  return (
    <header className="fixed top-[50px] left-0 right-0 bg-white shadow-md z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/images/logomain.png" 
              alt="Yashoda IVF Logo" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-5">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="flex items-center cursor-pointer text-gray-800 hover:text-pink-500 font-medium text-xs sm:text-xs md:text-sm whitespace-nowrap"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <svg 
                      className={`w-2.5 h-2.5 ml-1 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className="text-gray-800 hover:text-pink-500 font-medium text-xs sm:text-xs md:text-sm whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block px-3 py-1.5 text-gray-800 hover:bg-pink-50 hover:text-pink-500 text-xs whitespace-nowrap"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Book Appointment Button - Only visible on large screens */}
            <button className="hidden lg:block bg-pink-500 text-white px-2.5 py-1 rounded-lg font-medium hover:bg-pink-600 transition-colors text-xs sm:text-xs md:text-sm whitespace-nowrap ml-3">
              Book A Free Appointment
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div 
                        className="flex items-center justify-between text-gray-800 font-medium"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <svg 
                          className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {openDropdown === item.name && (
                        <div className="mt-2 pl-4 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="block py-2 text-gray-600 hover:text-pink-500"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="block py-2 text-gray-800 font-medium hover:text-pink-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Book Appointment Button */}
              <button className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors mt-4">
                Book An Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;