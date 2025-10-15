import React from 'react';
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

const ComponentDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-12">Component Demo</h1>
          
          {/* Buttons Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="tertiary">Tertiary Button</Button>
              <Button size="small">Small Button</Button>
              <Button size="large">Large Button</Button>
            </div>
          </section>
          
          {/* Cards Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <DoctorCard 
                name="Dr. Jane Smith" 
                credentials="MBBS, MD, IVF Specialist" 
                location="Vashi, Mumbai" 
              />
              <DoctorCard 
                name="Dr. John Doe" 
                credentials="MBBS, MS, Reproductive Endocrinologist" 
                location="CBD Belapur, Mumbai" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <BlogCard 
                title="Understanding IVF Treatment" 
                excerpt="IVF is a complex series of procedures used to help with fertility or prevent genetic problems and assist with the conception of a child." 
                date="Oct 15, 2025" 
                readTime="8 min read"
              />
              <BlogCard 
                title="Preparing for Your First IVF Cycle" 
                excerpt="Learn what to expect during your first IVF cycle and how to prepare yourself physically and emotionally." 
                date="Oct 10, 2025" 
                readTime="6 min read"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard 
                name="Priya Sharma" 
                location="Mumbai" 
                testimonial="The team at Yashoda IVF made our dream of becoming parents come true. Their expertise and care are unmatched."
              />
              <TestimonialCard 
                name="Rajesh & Anjali Mehta" 
                location="Delhi" 
                testimonial="After struggling with infertility for years, we finally found success with Yashoda IVF. Highly recommended!"
              />
            </div>
          </section>
          
          {/* Stats Counter */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Stats Counter</h2>
            <StatsCounter />
          </section>
          
          {/* Form */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
            <div className="max-w-2xl">
              <Form />
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Fixed Components */}
      <FixedSocialSidebar />
      <FloatingContactButton />
    </div>
  );
};

export default ComponentDemo;