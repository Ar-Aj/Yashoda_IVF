import React, { useState } from 'react';
import Button from '../components/ui/Button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    queries: '',
    location: '',
    recaptcha: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = [
    'Vashi',
    'Kamothe',
    'Alibag',
    'Mangaon',
    'Thane',
    'Charni Road'
  ];

  // FAQ data
  const faqs = [
    {
      question: "How soon will I get a response?",
      answer: "Our team typically responds to all inquiries within 24-48 hours during business days. For urgent matters, please call us directly."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid ID, any previous medical records or test results related to fertility, and a list of current medications. Our team will provide additional guidance when you schedule your appointment."
    },
    {
      question: "How are my details protected?",
      answer: "We maintain the highest standards of patient confidentiality and data protection. All personal and medical information is securely stored and never shared without your explicit consent, in compliance with healthcare privacy regulations."
    }
  ];

  // Clinic locations data
  const clinics = [
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Vashi",
      address: "Shop No. 101, First Floor, Building No. 1, Sector 15, Vashi, Navi Mumbai, Maharashtra 400703"
    },
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Kamothe",
      address: "Shop No. 5 & 6, Shree Hari Complex, Opp. Railway Station, Kamothe, Navi Mumbai, Maharashtra 410209"
    },
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Alibag",
      address: "First floor, Jagdale complex, Bypass Rd, Opp Samruddhi Family Restaurant, Shribag No.2, Chendhare, Alibaug, Maharashtra 402209"
    },
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Mangaon",
      address: "Shop No 113 & 114A, Royal Plaza, First Floor, opp. SBI At Post, Mangaon, Maharashtra 402104"
    },
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Thane",
      address: "1st Floor, DOSTI IMPERIA, Ghodbunder Rd, opposite R Mall, near Chitalsar, Manpada, Police Station, Thane, Maharashtra 400607"
    },
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Charni Road",
      address: "Shop No. 1, Ground Floor, Kamal Kunj, Charni Road, Mumbai, Maharashtra 400004"
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian mobile number';
    }

    if (!formData.location) {
      newErrors.location = 'Please select a location';
    }

    if (!formData.recaptcha) {
      newErrors.recaptcha = 'Please verify that you are not a robot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            queries: formData.queries,
            location: formData.location
          }),
        });
        
        const result = await response.json();
        
        if (response.ok) {
          console.log('Form submitted successfully:', result);
          setIsSubmitted(true);
          
          // Reset form after 5 seconds
          setTimeout(() => {
            setFormData({
              name: '',
              phone: '',
              queries: '',
              location: '',
              recaptcha: false
            });
            setIsSubmitted(false);
          }, 5000);
        } else {
          // Handle server errors
          console.error('Server error:', result.error);
          setErrors({ submit: result.error || 'Failed to submit form. Please try again.' });
        }
      } catch (error) {
        console.error('Network error:', error);
        setErrors({ submit: 'Network error. Please check your connection and try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section 1 — Hero / Intro */}
      <section className="py-16 bg-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-pink-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700">
              Ready to start your parenthood journey? Reach out to Yashoda IVF to connect with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Contact Form (Central Focus) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-pink-500 p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-700 mb-6">
                    Thank you for reaching out! Our team will contact you shortly to assist with your query.
                  </p>
                  <p className="text-sm text-gray-500">
                    This form will reset automatically in a few seconds.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Global error message */}
                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm">{errors.submit}</p>
                    </div>
                  )}
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-pink-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your 10-digit mobile number"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-pink-500">{errors.phone}</p>
                    )}
                  </div>

                  {/* Queries */}
                  <div>
                    <label htmlFor="queries" className="block text-sm font-medium text-gray-700 mb-1">
                      Queries
                    </label>
                    <textarea
                      id="queries"
                      name="queries"
                      value={formData.queries}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Select Yashoda IVF Location <span className="text-pink-500">*</span>
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors ${
                        errors.location ? 'border-red-500' : 'border-gray-300'
                      }`}
                      aria-describedby={errors.location ? "location-error" : undefined}
                    >
                      <option value="">Select a location</option>
                      {locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                    {errors.location && (
                      <p id="location-error" className="mt-1 text-sm text-pink-500">{errors.location}</p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  <div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="recaptcha"
                          name="recaptcha"
                          type="checkbox"
                          checked={formData.recaptcha}
                          onChange={handleChange}
                          required
                          className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
                          aria-describedby={errors.recaptcha ? "recaptcha-error" : undefined}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="recaptcha" className="font-medium text-gray-700">
                          I'm not a robot <span className="text-pink-500">*</span>
                        </label>
                      </div>
                    </div>
                    {errors.recaptcha && (
                      <p id="recaptcha-error" className="mt-1 text-sm text-pink-500">{errors.recaptcha}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="large"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Book An Appointment'}
                  </Button>
                </form>
              )}

              {/* Additional contact options */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Prefer speaking directly? Call us at{' '}
                  <a href="tel:8655442182" className="text-pink-500 hover:text-pink-600 font-medium">
                    8655442182
                  </a>{' '}
                  /{' '}
                  <a href="tel:7575888333" className="text-pink-500 hover:text-pink-600 font-medium">
                    7575888333
                  </a>{' '}
                  or email{' '}
                  <a href="mailto:contact@yashodaivf.com" className="text-pink-500 hover:text-pink-600 font-medium">
                    contact@yashodaivf.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Frequently Asked Questions */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-pink-500 transition-transform duration-300 ${
                      openFaqIndex === index ? 'transform rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Location Map/Addresses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Our Centers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinics.map((clinic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-pink-100">
                <div className="flex items-start mb-4">
                  <svg className="w-6 h-6 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{clinic.location}</h3>
                    <p className="text-pink-500 font-medium">{clinic.name}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{clinic.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;