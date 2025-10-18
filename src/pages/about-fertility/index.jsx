import React from 'react';
import Button from '../../components/ui/Button';

const AboutFertilityIndex = () => {
  // Fertility education cards data
  const fertilityCards = [
    {
      title: "Infertility Problems",
      description: "What infertility means, main causes, and when to seek help.",
      icon: "🔍",
      link: "/about-fertility/infertility-problems"
    },
    {
      title: "Male Fertility Problems",
      description: "Common issues, symptoms, and solutions for male infertility.",
      icon: "♂️",
      link: "/about-fertility/male-fertility-problems"
    },
    {
      title: "Female Fertility Problems",
      description: "Understanding challenges women may face when trying to conceive.",
      icon: "♀️",
      link: "/about-fertility/female-infertility-problems"
    }
  ];

  // Quick CTA buttons data
  const ctaButtons = [
    {
      title: "Infertility Problems",
      link: "/about-fertility/infertility-problems"
    },
    {
      title: "Male Fertility Problems",
      link: "/about-fertility/male-fertility-problems"
    },
    {
      title: "Female Fertility Problems",
      link: "/about-fertility/female-infertility-problems"
    }
  ];

  return (
    <main>
      {/* Section 1 — Hero Banner */}
      <section id="hero" className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-hands-baby.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center pt-10 sm:pt-14 md:pt-16">
          <div className="bg-white bg-opacity-50 p-6 sm:p-8 rounded-lg inline-block max-w-2xl">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4">
              About Fertility
            </h1>
            <p className="text-gray-700 text-center">
              Understanding fertility is the first step on your journey to parenthood. Explore causes, symptoms, treatments, and prevention strategies with resources from Yashoda IVF.
            </p>
          </div>
        </div>
        {/* Pink wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="fill-pink-500">
            <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Section 2 — Fertility Education Cards Grid */}
      <section id="fertility-education" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fertilityCards.map((card, index) => (
              <div key={index} className="bg-white border-t-4 border-pink-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Button 
                    variant="secondary" 
                    size="default" 
                    className="w-full"
                    onClick={() => window.location.href = card.link}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Did-You-Know / Fast Facts */}
      <section id="did-you-know" className="py-12 sm:py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Did You Know?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-700">Infertility affects about 15% of couples worldwide.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-700">Lifestyle, age, and health all play a role in fertility for both men and women.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-700">Early diagnosis and personalized treatment can greatly improve your chances of success.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Quick CTA to All Fertility Info Pages */}
      <section id="explore-more" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">Explore More on Fertility</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaButtons.map((button, index) => (
              <Button 
                key={index}
                variant="primary" 
                size="default" 
                className="flex-1 min-w-[200px] flex items-center justify-center"
                onClick={() => window.location.href = button.link}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Contact Us CTA Stripe */}
      <section id="cta" className="py-12 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Speak with a Fertility Expert
              </h3>
              <p className="text-gray-700">
                Ready to talk to a specialist? Book your consultation at Yashoda IVF today and take the first step towards parenthood.
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
    </main>
  );
};

export default AboutFertilityIndex;