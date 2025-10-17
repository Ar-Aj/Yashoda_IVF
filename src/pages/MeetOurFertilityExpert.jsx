import React, { useState } from 'react';
import Button from '../components/ui/Button';
import DoctorCard from '../components/ui/DoctorCard';

const MeetOurFertilityExpert = () => {
  // State for carousels
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Awards data
  const awards = [
    { id: 1, image: '/assets/images/award-1.jpg', alt: 'Award 1' },
    { id: 2, image: '/assets/images/award-2.jpg', alt: 'Award 2' },
    { id: 3, image: '/assets/images/award-3.jpg', alt: 'Award 3' },
    { id: 4, image: '/assets/images/award-4.jpg', alt: 'Award 4' }
  ];

  // News data
  const news = [
    { id: 1, image: '/assets/images/news-1.jpg', alt: 'News 1' },
    { id: 2, image: '/assets/images/news-2.jpg', alt: 'News 2' },
    { id: 3, image: '/assets/images/news-3.jpg', alt: 'News 3' }
  ];

  // Testimonials data
  const testimonials = [
    { id: 1, image: '/assets/images/testimonial-1.jpg', alt: 'Testimonial 1' },
    { id: 2, image: '/assets/images/testimonial-2.jpg', alt: 'Testimonial 2' },
    { id: 3, image: '/assets/images/testimonial-3.jpg', alt: 'Testimonial 3' },
    { id: 4, image: '/assets/images/testimonial-4.jpg', alt: 'Testimonial 4' }
  ];

  // Videos data
  const videos = [
    { id: 1, thumbnail: '/assets/images/testimonial-1.jpg', alt: 'Video 1' },
    { id: 2, thumbnail: '/assets/images/testimonial-2.jpg', alt: 'Video 2' },
    { id: 3, thumbnail: '/assets/images/testimonial-3.jpg', alt: 'Video 3' },
    { id: 4, thumbnail: '/assets/images/testimonial-4.jpg', alt: 'Video 4' }
  ];

  // Services data
  const services = [
    {
      title: 'IVF',
      description: 'IVF assists couples in producing by gathering eggs, fertilizing them with sperm outside the body, then gently transferring the embryos into the woman\'s female reproductive system',
      image: '/assets/images/ivf-illustration.jpg',
      alt: 'IVF Illustration'
    },
    {
      title: 'IUI',
      description: 'Intrauterine insemination (IUI) increases the chances of fertilization by inserting sperm directly into the uterus, bypassing cervical barriers. It is a simple, affordable fertility treatment for all married individuals.',
      image: '/assets/images/iui-illustration.jpg',
      alt: 'IUI Illustration'
    },
    {
      title: 'ICSI',
      description: 'ICSI (Intracytoplasmic Sperm Injection) is a precise fertility process during which a single sperm is injected into an egg, enabling couples experiencing severe male infertility with successful pregnancy',
      image: '/assets/images/icsi-illustration.jpg',
      alt: 'ICSI Illustration'
    }
  ];

  // Other doctors data
  const otherDoctors = [
    {
      name: 'Dr. Balasaheb V Khadbade',
      credentials: 'MBBS, MD',
      location: 'Kamothe, Navi Mumbai',
      imageSrc: '/assets/images/doctor-balasaheb.jpg',
      imageAlt: 'Dr. Balasaheb V Khadbade'
    },
    {
      name: 'Dr. Snehalata B Khadbade',
      credentials: 'MBBS, DGO',
      location: 'Kamothe, Navi Mumbai',
      imageSrc: '/assets/images/doctor-snehalata.jpg',
      imageAlt: 'Dr. Snehalata B Khadbade'
    },
    {
      name: 'Dr. Sphurti Raghu',
      credentials: 'MBBS, DNB',
      location: 'Vashi, Navi Mumbai',
      imageSrc: '/assets/images/doctor-sphurti.jpg',
      imageAlt: 'Dr. Sphurti Raghu'
    },
    {
      name: 'Dr. Rajashree Badgire',
      credentials: 'MBBS, MD',
      location: 'Alibaug, Raigad',
      imageSrc: '/assets/images/doctor-rajashree.jpg',
      imageAlt: 'Dr. Rajashree Badgire'
    },
    {
      name: 'Dr. Vinod Kumar N',
      credentials: 'MBBS, MD',
      location: 'Thane',
      imageSrc: '/assets/images/doctor-vinod.jpg',
      imageAlt: 'Dr. Vinod Kumar N'
    },
    {
      name: 'Dr. Varsha Nimbalkar',
      credentials: 'MBBS, MS OBGY, FRM',
      location: 'Kamothe, Navi Mumbai',
      imageSrc: '/assets/images/doctor-placeholder.jpg',
      imageAlt: 'Dr. Varsha Nimbalkar'
    },
    {
      name: 'Dr. Binita Shah',
      credentials: 'MBBS, MS, DNB, FRM, DRM',
      location: 'Charni Road',
      imageSrc: '/assets/images/doctor-placeholder.jpg',
      imageAlt: 'Dr. Binita Shah'
    },
    {
      name: 'Dr. Sonali',
      credentials: 'MBBS, DGO, FRM, Infertility and IVF consultant',
      location: 'Alibaug, Raigad',
      imageSrc: '/assets/images/doctor-placeholder.jpg',
      imageAlt: 'Dr. Sonali'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section 1 – Doctor Profile Hero */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Dr. Balasaheb V Khadbade
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                MBBS, MD Obstetrics & Gynaecology
              </p>
              
              <div className="space-y-2 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Gynecologist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Infertility Specialist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Obstetrician</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">16 Years Experience Overall (13 years as specialist)</span>
                </div>
              </div>
              
              <Button variant="primary" size="default">
                Book Appointment
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="/assets/images/doctor-balasaheb.jpg" 
                alt="Dr. Balasaheb V Khadbade" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 – Main Bio */}
      <section className="py-12 sm:py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            One of the best IVF doctor in Mumbai
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-pink-500 text-center mb-8">
            About Dr. Balasaheb V Khadbade
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              Dr. Khadbade's dedication and innovative approach have not only improved treatment outcomes but also garnered numerous accolades. His commitment to staying at the forefront of medical advancements ensures that Yashoda IVF Centre remains a beacon of hope for those struggling with infertility.
            </p>
            <p className="text-gray-700 mb-6">
              A team of highly qualified and experienced experts work at our IVF clinic in Navi Mumbai, including renowned IVF doctors, clinical embryologists, assistants, and dedicated nurses.
            </p>
            <p className="text-gray-700">
              To assist patients in locating the most suitable and economical option, the entire team makes every effort, including providing moral support and appropriate assistance.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12 p-8 bg-pink-500 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Start your parenthood journey with us
            </h3>
            <Button variant="secondary" size="large">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3 – Doctor Awards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Dr. Khadbade: Award-winning excellence in Fertility care
          </h2>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <img 
                src={awards[currentAwardIndex].image} 
                alt={awards[currentAwardIndex].alt} 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {awards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAwardIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentAwardIndex ? 'bg-pink-500' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <div key={award.id} className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={award.image} 
                  alt={award.alt} 
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 – News & Media */}
      <section className="py-12 sm:py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            News & Media
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {news.map((item) => (
              <div key={item.id} className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Video Placeholder */}
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
            YouTube Video Embed Placeholder
          </div>
        </div>
      </section>

      {/* Section 5 – Testimonials Carousel */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Videos of Fertility Treatment by doctor
          </h2>
          
          {/* First Carousel - Testimonials */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-center mb-8">Patient Testimonials</h3>
            
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative">
                <img 
                  src={testimonials[currentTestimonialIndex].image} 
                  alt={testimonials[currentTestimonialIndex].alt} 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                
                {/* Navigation Dots */}
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
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.alt} 
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Second Carousel - Videos */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-8">Treatment Videos</h3>
            
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative">
                <img 
                  src={videos[currentVideoIndex].thumbnail} 
                  alt={videos[currentVideoIndex].alt} 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                
                {/* Navigation Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`w-3 h-3 rounded-full ${index === currentVideoIndex ? 'bg-pink-500' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.alt} 
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 – Service Expertise Cards */}
      <section className="py-12 sm:py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Dr. Khadbade's expertise in Fertility Treatment services with advanced technologies
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 – Other IVF Experts */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Other IVF experts in our Fertility care
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDoctors.map((doctor, index) => (
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

      {/* Section 8 – Contact/CTA Stripe */}
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

export default MeetOurFertilityExpert;