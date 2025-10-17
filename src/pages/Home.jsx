import React from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import DoctorCard from '../components/ui/DoctorCard';
import BlogCard from '../components/ui/BlogCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import StatsCounter from '../components/ui/StatsCounter';
import Form from '../components/ui/Form';
import FixedSocialSidebar from '../components/ui/FixedSocialSidebar';
import FloatingContactButton from '../components/ui/FloatingContactButton';
import AnimatedStatsCounter from '../components/ui/AnimatedStatsCounter';

const Home = () => {
  // Doctor data
  const doctors = [
    {
      name: "Dr. Balasaheb V Khadbade",
      credentials: "MBBS, MD",
      location: "Kamothe, Navi Mumbai",
      imageSrc: "/assets/images/doctor-bala-1.jpg"
    },
    {
      name: "Dr. Snehalata B Khadbade",
      credentials: "MBBS, DGO",
      location: "Kamothe, Navi Mumbai",
      imageSrc: "/assets/images/doctor-snehalata-1.jpg"
    },
    {
      name: "Dr. Sphurti Raghu",
      credentials: "MBBS, DNB",
      location: "Vashi, Navi Mumbai",
      imageSrc: "/assets/images/doctor-sphurti-2.jpg"
    },
    {
      name: "Dr. Varsha Nimbalkar",
      credentials: "MBBS, MD",
      location: "Thane",
      imageSrc: "/assets/images/doctor-varsha-3.jpg"
    }
  ];

  // Blog data
  const blogs = [
    {
      title: "पीसीओडी कैसे और क्यू होता है ? जानिये आहार,लक्षण,कारण और उपचार (PCOD Problem In Hindi)",
      imageSrc: "/assets/images/blog-pcod.jpg",
      category: "Yashoda IVF"
    },
    {
      title: "Erectile Dysfunction - Understand its Causes and Treatment",
      imageSrc: "/assets/images/blog-erectile.jpg",
      category: "Yashoda IVF",
      excerpt: "Physical causes • Psychological Causes"
    },
    {
      title: "Hysterosalpingogram (HSG) Test at Yashoda IVF",
      imageSrc: "/assets/images/blog-hsg.jpg",
      category: "Yashoda IVF",
      excerpt: "Complete process • Solution"
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      name: "Rajesh & Priya Sharma",
      location: "Mumbai",
      testimonial: "The team at Yashoda IVF made our dream of becoming parents come true. Their expertise and care are unmatched.",
      imageSrc: "/assets/images/testimonial-1.jpg"
    },
    {
      name: "Anjali & Vivek Mehta",
      location: "Delhi",
      testimonial: "After struggling with infertility for years, we finally found success with Yashoda IVF. Highly recommended!",
      imageSrc: "/assets/images/testimonial-2.jpg"
    },
    {
      name: "Sneha & Amit Patel",
      location: "Pune",
      testimonial: "The personalized care and attention we received was exceptional. We're grateful for our healthy baby boy!",
      imageSrc: "/assets/images/testimonial-3.jpg"
    }
  ];

  // Stats data
  const stats = [
    { number: '15+', label: 'Years' },
    { number: '78%', label: 'Success Rate' },
    { number: '5,450+', label: 'Cycle Done' },
    { number: '6,426+', label: 'Happy Patients' },
    { number: '5,777+', label: 'Babies Delivered' }
  ];

  // Reasons data
  const reasons = [
    {
      title: "Naturally Pregnancy First",
      icon: "heart",
      description: "IVF success rate at Yashoda IVF is more than 85%, however we encourage natural pregnancy and help patients conceive naturally. Our fertility specialist suggests IVF treatment only when it is actually necessary."
    },
    {
      title: "Transparent and ethical",
      icon: "check",
      description: "Yashoda Treatment: Transparent and ethical care, prioritizing your well-being with integrity and compassion."
    },
    {
      title: "Affordable Treatment",
      icon: "rupee",
      description: "Yashoda Treatment offers cost-effective healthcare solutions for all, ensuring accessible and affordable care."
    },
    {
      title: "Personalized Care",
      icon: "heart",
      description: "At Yashoda IVF, our commitment to personalized care is reflected in our exceptional success rates. By carefully tailoring our approach to each patient, we're able to maximize your chances of achieving your family dreams."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] sm:h-[700px] md:h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-baby2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center pt-16 sm:pt-20 md:pt-24">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Affordable Fertility Clinic & IVF Centre in Navi Mumbai
            </h1>
            <div className="border-l-4 border-pink-500 pl-4">
              <p className="text-lg sm:text-xl">
                Yashoda IVF: Transforming Dreams into Families. Know why we're recognized as the Best IVF Centre in Navi Mumbai
              </p>
            </div>
            <div className="mt-8">
              <Button variant="primary" size="large">
                Book A Free Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhance Fertility Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Enhance fertility journey with <span className="text-pink-500">IVF Fertility Treatment in Navi Mumbai</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              If you are seeking IVF fertility treatment in Navi Mumbai, our fertility treatment centre offers comprehensive services tailored to your needs. Our IVF fertility treatment processes are designed to provide the highest chances of success, utilizing cutting-edge techniques and compassionate care.
            </p>
            <p className="text-gray-700">
              At our centre, we understand the emotional journey of fertility treatment, and our team is dedicated to supporting you every step of the way. Trust us to guide you through the IVF treatment in Navi Mumbai with expertise and empathy.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Feature List with Clinic Image */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <ul className="space-y-4">
                {[
                  "Comprehensive fertility treatments: Offering a wide range of assisted reproductive technologies.",
                  "Expertise in IVF procedures: Skilled specialists with years of experience in fertility treatments",
                  "State-of-the-art facilities: Equipped with the latest medical technologies for optimal care.",
                  "Personalized patient care: Tailored treatment plans to suit individual needs and preferences.",
                  "High success rates: Demonstrated track record of successful IVF treatments, ensuring hopeful parents the best chance",
                  "With much affordable cost: Given our commitment to the belief that everyone deserves the opportunity to be a parent, we keep the 'Patient First' approach at Yashoda IVF. Aiming to provide exceptional IVF treatment at the most affordable rates."
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/assets/images/clinic-interior.jpeg" 
                alt="Modern clinic waiting area" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-pink-500 text-white">
        <div className="container mx-auto px-4">
          <AnimatedStatsCounter stats={stats} />
        </div>
      </section>

      {/* Reasons to Choose Yashoda IVF */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ minHeight: '500px' }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/images/parent-baby.jpg)' }}></div>
        <div className="relative container mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Reason to choose Yashoda IVF fertility and IVF centre as best IVF centre in Navi Mumbai
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white bg-opacity-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white mr-3">
                    {reason.icon === "heart" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    )}
                    {reason.icon === "check" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {reason.icon === "rupee" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-9a1 1 0 100 2h2a1 1 0 100-2h-2zm0 4a1 1 0 100 2h2a1 1 0 100-2h-2z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Trusted IVF Clinic */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="border-2 border-pink-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-pink-500">
                  Most Trusted and Best IVF Clinic in Navi Mumbai
                </h3>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                Yashoda IVF Fertility & IVF Centre is the best IVF Clinic which stands out for its unparalleled expertise, compassionate care, and comprehensive solutions in treating fertility issues. With a track record of success, transparent processes, and a dedicated team of Fertility Specialists and Gynaecologists we offer hope and effective treatments on your journey to parenthood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Provided */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Treatments provided by <span className="text-pink-500">Yashoda IVF Fertility & IVF Centre</span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gray-700 mb-4">
              Yashoda IVF Fertility & IVF Centre is a leading destination for IVF treatment in Navi Mumbai. We offer comprehensive fertility treatments, including IVF, IUI, ICSI, laparoscopy, Hysteroscopy, Blastocyst culture and advanced reproductive technologies. As a premier IVF centre in Navi Mumbai, we prioritize the emotions of couples and joy of becoming parents.
            </p>
            <p className="text-gray-700">
              Our experienced team of fertility specialists employs cutting-edge techniques to help couples achieve their dream of parenthood. With a reputation as a trusted fertility treatment centre, we strive to provide personalized care and support throughout every step of the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome to Best IVF Centre */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Welcome to the Best IVF Centre in Navi Mumbai
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-gray-700">
              Many couples wish to experience the joys of parenthood with ease, believing it will bring them even closer. Couples experiencing infertility see IVF fertility treatment as a powerful option in their journey to build a family.
            </p>
            <p className="text-gray-700">
              IVF offers with its advanced techniques and cutting-edge technology a ray of hope to those longing for parenthood.
            </p>
            <p className="text-gray-700">
              Yashoda IVF Fertility and IVF Centre stands as the foremost choice for the IVF treatment in Navi Mumbai for couples experiencing Fertility challenges. With over 15 years of dedicated practice in reproductive medicine, we offer an extensive solution for your needs. Our IVF Centre boasts high success rates, ensuring high possibilities of achieving your dream of parenthood.
            </p>
            <p className="text-gray-700">
              We consider your financial and emotional burdens of infertility treatment. That's why we are here to provide you with an affordable IVF cost in Navi Mumbai without compromising on the quality of care. Our Fertility specialists guide you through every step of your parenthood journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team of Doctors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-pink-500">
            Our team of dedicated specialist fertility doctors
          </h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-700 mb-4">
              Our dedicated specialist fertility doctors are committed to provide personalized care and support to couples who are facing challenges with infertility. With extensive experience and expertise in infertility treatment, our doctors employ the latest advancements in reproductive medicine.
            </p>
            <p className="text-gray-700">
              Rest assured that our clinic has 80% of success rates, ensuring that you receive the best possible chance of conceiving a healthy baby. Trust in our compassionate and skilled IVF fertility specialists to guide you on your journey to parenthood.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <DoctorCard 
                key={index}
                name={doctor.name}
                credentials={doctor.credentials}
                location={doctor.location}
                imageSrc={doctor.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Our Customers Are Saying */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-pink-500">
            What our customers are saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                testimonial={testimonial.testimonial}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Most Common Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="/assets/images/founders-photo.jpg" 
                alt="Doctors at clinic with logo wall" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Most common question About IVF
              </h2>
              <Button variant="primary">
                Know More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-6">
                Every success story at Yashoda Fertility & IVF Centre is a monument to the resolve, confidence, and loyalty of our patients on their journey to parenthood, and we are immensely proud to share these touching stories that showcase the victory of the human spirit and the knowledge of our dedicated experts.
              </p>
              
              <div className="border rounded-lg p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="font-bold">Yashoda Fertility & IVF Centre - Best IVF Center in Navi Mumbai</div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2">4.7 stars (based on 512 reviews)</span>
                </div>
                
                <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                  Review us on Google
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                Google Reviews Embed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-pink-500 relative inline-block mx-auto">
            Blogs
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-pink-500"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard 
                key={index}
                title={blog.title}
                imageSrc={blog.imageSrc}
                category={blog.category}
                excerpt={blog.excerpt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-500 mb-4">
                Contact Us Today
              </h2>
              <h3 className="text-xl text-center mb-6">
                Ready to take the next step on your fertility journey?
              </h3>
              <p className="text-center font-bold mb-6">
                Contact our IVF Fertility Centre in Navi Mumbai, to schedule your consultation.
              </p>
              <p className="text-center text-gray-700">
                Our friendly and knowledgeable team is here to answer your questions, address your concerns, and help you explore your options. Let us be your partner in achieving your dream of parenthood.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Form />
              </div>
              
              <div className="mt-8">
                <img 
                  src="/assets/images/founders-photo.jpg" 
                  alt="Clinic founders" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;