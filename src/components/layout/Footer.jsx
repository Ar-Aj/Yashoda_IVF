import React from 'react';

const Footer = () => {
  const footerLinks = {
    contact: {
      title: 'Contact Us',
      items: [
        { text: '123, Sector 15, Vashi, Navi Mumbai, Maharashtra 400703', icon: 'location' },
        { text: 'info@yashodaivf.com', icon: 'email' },
        { text: '+91 98765 43210', icon: 'phone' },
        { text: '+91 98765 43211', icon: 'phone' }
      ]
    },
    infertility: {
      title: 'About Infertility',
      items: [
        { text: 'Male Infertility', path: '/about-fertility/male-fertility-problems' },
        { text: 'Female Infertility', path: '/about-fertility/female-infertility-problems' },
        { text: 'IVF Treatment', path: '/services/ivf' },
        { text: 'IUI Treatment', path: '/services/iui' },
        { text: 'ICSI Treatment', path: '/services/icsi' }
      ]
    },
    services: {
      title: 'Services',
      items: [
        { text: 'IVF', path: '/services/ivf' },
        { text: 'IUI', path: '/services/iui' },
        { text: 'ICSI', path: '/services/icsi' },
        { text: 'Laparoscopy', path: '/services/laparoscopy' },
        { text: 'Hysteroscopy', path: '/services/hysteroscopy' }
      ]
    },
    quickLinks: {
      title: 'Quick Links',
      items: [
        { text: 'Blogs', path: '/articles' },
        { text: 'Articles', path: '/articles' },
        { text: 'About Us', path: '/about-us' },
        { text: 'Contact', path: '/contact-us' },
        { text: 'FAQ', path: '#' },
        { text: 'Career', path: '#' },
        { text: 'News', path: '#' }
      ]
    }
  };

  const locations = [
    'Vashi Centre',
    'CBD Belapur Centre',
    'Kharghar Centre',
    'Panvel Centre',
    'Kalyan Centre'
  ];

  return (
    <footer className="bg-orange-600 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{footerLinks.contact.title}</h3>
            <ul className="space-y-3">
              {footerLinks.contact.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon === 'location' && (
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  )}
                  {item.icon === 'email' && (
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  )}
                  {item.icon === 'phone' && (
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  )}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* About Infertility */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{footerLinks.infertility.title}</h3>
            <ul className="space-y-2">
              {footerLinks.infertility.items.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="hover:text-pink-200 transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{footerLinks.services.title}</h3>
            <ul className="space-y-2">
              {footerLinks.services.items.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="hover:text-pink-200 transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{footerLinks.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.items.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="hover:text-pink-200 transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Centres */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Our Centres</h3>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index} className="hover:text-pink-200 transition-colors cursor-pointer">
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-500 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Yashoda IVF. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;