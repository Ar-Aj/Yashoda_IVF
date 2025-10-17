import React, { useState, useEffect, useRef } from 'react';
import DoctorCard from '../components/ui/DoctorCard';
import Button from '../components/ui/Button';
import AnimatedStatsCounter from '../components/ui/AnimatedStatsCounter';

const AboutUs = () => {
  // State for testimonials carousel
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  // Ref for doctors carousel
  const carouselRef = useRef(null);
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);
  
  // Doctor data
  const doctors = [
    {
      name: "Doctor Balasaheb V Khadbade",
      credentials: "MBBS, MD",
      location: "Kamothe, Navi Mumbai",
      imageSrc: "/assets/images/doctor-bala-1.jpg",
      imageAlt: "Doctor Balasaheb V Khadbade"
    },
    {
      name: "Doctor Snehalata B Khadbade",
      credentials: "MBBS, DGO",
      location: "Kamothe, Navi Mumbai",
      imageSrc: "/assets/images/doctor-snehalata-1.jpg",
      imageAlt: "Doctor Snehalata B Khadbade"
    },
    {
      name: "Doctor Sphurti Raghu",
      credentials: "MBBS, DNB",
      location: "Vashi, Navi Mumbai",
      imageSrc: "/assets/images/doctor-sphurti-2.jpg",
      imageAlt: "Doctor Sphurti Raghu"
    },
    {
      name: "Doctor Rajashree Badgire",
      credentials: "MBBS, MD",
      location: "Alibaug, Raigad",
      imageSrc: "/assets/images/doctor-rajashree-4.png",
      imageAlt: "Doctor Rajashree Badgire"
    },
    {
      name: "Doctor Vinod Kumar N",
      credentials: "MBBS, MD",
      location: "Thane",
      imageSrc: "/assets/images/doctor-vinod-2.png",
      imageAlt: "Doctor Vinod Kumar N"
    }
  ];

  // Clinic stats data
  const clinicStats = [
    { number: '15+', label: 'Years' },
    { number: '78%', label: 'Success Rate' },
    { number: '5,450+', label: 'Cycle Done' },
    { number: '6,426+', label: 'Happy Patients' },
    { number: '5,777+', label: 'Babies Delivered' }
  ];

  // Clinic locations data
  const clinicLocations = [
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Kamothe",
      address: "",
      imageSrc: "/assets/images/clinic-kamothe.jpg"
    },
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Alibaug",
      address: "First floor, Jagdale complex, Bypass Rd, Opp Samruddhi Family Restaurant, Shribag No.2, Chendhare, Alibaug, Maharashtra 402209.",
      imageSrc: "/assets/images/clinic-alibaug.jpg"
    },
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Mangaon",
      address: "Shop No 113 & 114A, Royal Plaza, First Floor, opp. SBI At Post, Mangaon, Maharashtra 402104.",
      imageSrc: "/assets/images/clinic-mangaon.jpg"
    },
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Thane",
      address: "1st Floor, DOSTI IMPERIA, Ghodbunder Rd, opposite R Mall, near Chitalsar, Manpada, Police Station, Thane, Maharashtra 400607.",
      imageSrc: "/assets/images/clinic-thane.jpg"
    },
    {
      name: "Yashoda IVF & Fertility Centre",
      location: "Vashi",
      address: "",
      imageSrc: "/assets/images/clinic-vashi.jpg"
    }
  ];

  // Circular stats data
  const circularStats = [
    { label: "Pregnancy Rate", value: "86%" },
    { label: "Patient Satisfaction", value: "98%" },
    { label: "Successful IVF cycle", value: "100%" }
  ];

  // Mission, Approach, Vision data
  const missionApproachVision = [
    {
      title: "Our Mission",
      content: "Our mission is to empower individuals on their path to parenthood. We are Dedicated to providing comprehensive, compassionate, and personalized fertility care. We strive to offer world-class fertility treatments, coupled with unwavering support and guidance, to help our patients realize their dream of having a child."
    },
    {
      title: "Our Approach",
      content: "Backed by a team of highly skilled specialists, cutting-edge technology, and a patient-centric approach, we tailor our services to meet the unique needs of every individual or couple. Our commitment to excellence and ethical practices ensures that each step of the fertility journey is guided with transparency, empathy, and professionalism."
    },
    {
      title: "Our Vision",
      content: "Our vision extends beyond just medical treatments; it encompasses unwavering support, guidance, and empathy throughout your fertility journey, and goes beyond traditional healthcare to foster optimism, resilience, and unwavering support as we travel this road together. Parenthood is a dream that deserves every ounce of dedication, and we are here to help you make that dream a reality. We aspire to be more than a healthcare provider; we aim to be a trusted partner, walking alongside you on the path to realizing your dreams of parenthood."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Kiran Shelke",
      rating: 5,
      review: "Once we came to yashoda hospital till we become parents, yashoda hospital staff treat us very well and take care of like family member. Specially thanks to recipients, Sisters, and special thanks mavsi, And many thanks to all Doctors and Dr. Khadbade Sir. I am strongly recommended to all.",
      imageSrc: "/assets/images/testimonial-1.jpg",
      imageAlt: "Kiran Shelke"
    },
    {
      name: "Rajesh & Priya Sharma",
      rating: 5,
      review: "The team at Yashoda IVF made our dream of becoming parents come true. Their expertise and care are unmatched.",
      imageSrc: "/assets/images/testimonial-2.jpg",
      imageAlt: "Rajesh & Priya Sharma"
    },
    {
      name: "Anjali & Vivek Mehta",
      rating: 5,
      review: "After struggling with infertility for years, we finally found success with Yashoda IVF. Highly recommended!",
      imageSrc: "/assets/images/testimonial-3.jpg",
      imageAlt: "Anjali & Vivek Mehta"
    },
    {
      name: "Sneha & Amit Patel",
      rating: 5,
      review: "The personalized care and attention we received was exceptional. We're grateful for our healthy baby boy!",
      imageSrc: "/assets/images/testimonial-4.jpg",
      imageAlt: "Sneha & Amit Patel"
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-pink-500' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section 1 - Hero */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-services.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center pt-16 sm:pt-20 md:pt-24">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Yashoda IVF
            </h1>
            <div className="border-l-4 border-pink-500 pl-4">
              <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
                Best IVF Fertility Centre in Navi Mumbai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Intro Paragraph */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              The best IVF fertility centre in Navi Mumbai, Yashoda IVF Fertility & IVF Centre is dedicated to provide you state of the art infertility treatment with compassionate care. Our infertility specialists in Navi Mumbai provide a complete solution for your needs, having practiced fertility treatment for more than 15 years. Discover how we can help you achieve your goal of becoming a parent by providing individualized attention and successful results during your IVF treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Dedicated Specialist Fertility Doctor */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Dedicated Specialist Fertility Doctor</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Meet our dedicated IVF specialist doctors, renowned as the best IVF specialists in Navi Mumbai. Offering good care and personalized treatment plans to help you achieve your dream of parenthood.
          </p>
          
          {/* Mobile Carousel */}
          <div className="md:hidden overflow-hidden relative">
            {/* Navigation Arrows */}
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
              onClick={() => {
                if (carouselRef.current && currentDoctorIndex > 0) {
                  const cardWidth = 320 + 24; // w-80 (320px) + gap-6 (24px)
                  carouselRef.current.scrollTo({
                    left: (currentDoctorIndex - 1) * cardWidth,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
              onClick={() => {
                if (carouselRef.current && currentDoctorIndex < doctors.length - 1) {
                  const cardWidth = 320 + 24; // w-80 (320px) + gap-6 (24px)
                  carouselRef.current.scrollTo({
                    left: (currentDoctorIndex + 1) * cardWidth,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-4 px-4 scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onScroll={() => {
                if (carouselRef.current) {
                  const scrollLeft = carouselRef.current.scrollLeft;
                  const cardWidth = 320 + 24; // w-80 (320px) + gap-6 (24px)
                  const newIndex = Math.round(scrollLeft / cardWidth);
                  setCurrentDoctorIndex(Math.min(newIndex, doctors.length - 1));
                }
              }}
            >
              <style jsx>{`
                .snap-x {
                  scroll-snap-type: x mandatory;
                }
                .snap-start {
                  scroll-snap-align: start;
                }
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {doctors.map((doctor, index) => (
                <div key={index} className="snap-start flex-shrink-0 w-96">
                  <DoctorCard 
                    name={doctor.name}
                    credentials={doctor.credentials}
                    location={doctor.location}
                    imageSrc={doctor.imageSrc}
                    imageAlt={doctor.imageAlt}
                  />
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {doctors.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentDoctorIndex ? 'bg-pink-500' : 'bg-pink-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {doctors.map((doctor, index) => (
              <DoctorCard 
                key={index}
                name={doctor.name}
                credentials={doctor.credentials}
                location={doctor.location}
                imageSrc={doctor.imageSrc}
                imageAlt={doctor.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Clinic Stats */}
      <section className="py-16 bg-pink-500 text-white">
        <div className="container mx-auto px-4">
          <AnimatedStatsCounter stats={clinicStats} />
        </div>
      </section>

      {/* Section 5 - Clinic Locations Carousel/Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Yashoda IVF Centres</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicLocations.map((clinic, index) => (
              <div key={index} className="bg-pink-100 rounded-xl overflow-hidden shadow-md">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={clinic.imageSrc || "/assets/images/clinic-placeholder.jpg"} 
                    alt={`${clinic.name} ${clinic.location}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{clinic.location}</h3>
                  <h4 className="text-lg font-semibold text-pink-500 mb-3">{clinic.name}</h4>
                  {clinic.address && (
                    <p className="text-gray-700 text-sm mb-4">{clinic.address}</p>
                  )}
                  <a href="#" className="text-pink-500 font-medium hover:text-pink-600 transition-colors">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Why Yashoda Fertility & IVF Centre & Circular Stats */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Yashoda Fertility & IVF Centre</h3>
              <p className="text-gray-700 mb-6">
                At Yashoda Fertility & IVF Centre, we recognize the importance of the journey to parenthood at Yashoda Fertility & IVF Centre, which was founded with the goal of fulfilling the ambitions of individuals and couples seeking to start a family. We are a light of hope and innovation in the field of reproductive health care.
              </p>
              <Button variant="primary" size="default">
                Know More
              </Button>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-center mb-8">What we do best</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {circularStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-pink-200 stroke-current"
                          strokeWidth="10"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>
                        <circle
                          className="text-pink-500 stroke-current"
                          strokeWidth="10"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          strokeDasharray="251.2"
                          strokeDashoffset={251.2 - (251.2 * parseInt(stat.value)) / 100}
                          transform="rotate(-90 50 50)"
                        ></circle>
                        <text
                          x="50"
                          y="50"
                          fontFamily="sans-serif"
                          fontSize="20"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          className="text-2xl font-bold fill-pink-500"
                        >
                          {stat.value}
                        </text>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900">{stat.label}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Mission, Approach, Vision Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionApproachVision.map((item, index) => (
              <div key={index} className="bg-pink-100 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 - Patient Testimonials Carousel */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What our customers are <span className="text-pink-500">saying</span>
          </h2>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[currentTestimonialIndex].imageSrc} 
                  alt={testimonials[currentTestimonialIndex].imageAlt}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonials[currentTestimonialIndex].name}</h3>
                  {renderStars(testimonials[currentTestimonialIndex].rating)}
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonials[currentTestimonialIndex].review}"</p>
            </div>
            
            {/* Dots for mobile carousel */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentTestimonialIndex ? 'bg-pink-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.imageSrc} 
                    alt={testimonial.imageAlt}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 - Patient Stories Block */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our patient's stories</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-700 text-center italic font-semibold">
              Every success story at Yashoda Fertility & IVF Centre is a monument to the resolve, confidence, and loyalty of our patients on their journey to parenthood, and we are immensely proud to share these touching stories that showcase the victory of the human spirit and the knowledge of our dedicated experts.
            </p>
          </div>
          
          {/* Additional testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="bg-pink-100 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.imageSrc} 
                    alt={testimonial.imageAlt}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 - CTA Stripe */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Get a FREE appointment with one of our fertility experts today!
              </h3>
              <p className="text-gray-700">
                Make an appointment with an experienced fertility doctor now to discuss your treatment options and develop a personalized plan.
              </p>
            </div>
            <div className="md:w-1/3 w-full flex justify-center">
              <Button 
                variant="primary" 
                size="default" 
                className="w-full max-w-[200px]"
                onClick={() => window.location.href = '/contact-us'}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;