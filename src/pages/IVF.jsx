import React, { useState, useRef, useEffect } from 'react';
import Button from '../components/ui/Button';

const IVF = () => {
  const [activeTab, setActiveTab] = useState('why');
  const tabListRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tabs = [
    { id: 'why', label: 'Why' },
    { id: 'treatment', label: 'Treatment' },
    { id: 'effects', label: 'Post Procedure Effects' },
    { id: 'success', label: 'Success Rate' }
  ];

  const tabContent = {
    why: {
      intro: "IVF may be suggested for couples who are having difficulty developing owing to a variety of problems like:",
      content: [
        "Ovulation disorders — it happens if no reason of infertility can be found, even complete testing.",
        "Unresolved infertility — These conditions, such as polycystic ovarian syndrome, also known as PCOS or not normal hormone levels, may affect egg release, reducing fertility.",
        "Male factor infertility — occurs when a male’s number of sperm, motility, or shape becomes abnormal."
      ]
    },
    treatment: {
      intro: "",
      content: [
        "Ovarian stimulation and monitoring",
        "Egg retrieval and sperm collection",
        "Fertilization (IVF/ICSI) and embryo culture",
        "Embryo transfer and luteal support",
        "Pregnancy testing and follow‑up"
      ]
    },
    effects: {
      intro: "",
      content: [
        "Mild cramping or bloating",
        "Spotting after procedures",
        "Temporary breast tenderness",
        "Injection site discomfort",
        "Report severe pain, fever, or heavy bleeding immediately"
      ]
    },
    success: {
      intro: "",
      content: ["Success rates depend on age, ovarian reserve, embryo quality, and clinical factors. Your specialist will discuss individualized expectations and the clinic's outcomes for your profile."]
    }
  };

  // Handle scroll progress for the baby indicator
  useEffect(() => {
    const tabList = tabListRef.current;
    if (!tabList) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = tabList;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
    };

    tabList.addEventListener('scroll', handleScroll);
    return () => tabList.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      {/* Section 1 — Hero */}
      <section id="hero" className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-hands-baby.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center pt-10 sm:pt-14 md:pt-16">
          <div className="bg-white bg-opacity-50 p-6 sm:p-8 rounded-lg inline-block">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center">
              IVF – In Vitro Fertilization Treatment
            </h1>
          </div>
        </div>
      </section>

      {/* Section 2 — What is IVF? */}
      <section id="what-is-ivf" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <div className="absolute inset-0 bg-pink-100 opacity-20"></div>
                <img 
                  src="/assets/images/ivf-illustration.jpg" 
                  alt="IVF illustration showing embryo dish and pregnant woman" 
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What is IVF?</h2>
                <p className="text-gray-700 mb-4">
                  Female infertility encompasses challenges in conceiving or carrying a pregnancy due to issues with ovulation, reproductive organs, hormones, or health conditions like endometriosis. It involves difficulties in egg release, movement through fallopian tubes, or egg implantation in the uterus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — IVF Details Tabs */}
      <section id="ivf-tabs" className="py-12 sm:py-16 bg-pink-50" style={{ backgroundColor: '#FFF0F7' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs List with Baby Progress Indicator */}
            <div className="lg:w-1/3">
              {/* Horizontal scrollable tabs for mobile, vertical for desktop - hide default scrollbar */}
              <div 
                ref={tabListRef}
                className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-pink-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-pink-100'
                    }`}
                    style={{ minWidth: '150px', maxWidth: '250px' }}
                    onClick={() => setActiveTab(tab.id)}
                    aria-selected={activeTab === tab.id}
                    role="tab"
                  >
                    <span className="block">{tab.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Custom progress bar with baby indicator - now below the buttons */}
              <div className="relative mt-2 w-full">
                <div className="h-3 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gray-500 rounded-full transition-all duration-300" 
                    style={{ width: `${scrollProgress}%` }}
                  ></div>
                </div>
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 text-lg transition-all duration-300"
                  style={{ left: `${Math.min(Math.max(scrollProgress, 5), 95)}%`, transform: 'translate(-50%, -50%)' }}
                >
                  👶
                </div>
              </div>
            </div>

            {/* Content Panel */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl p-6 shadow-md">
                {tabContent[activeTab].intro && (
                  <p className="text-gray-700 mb-6">
                    {tabContent[activeTab].intro}
                  </p>
                )}
                
                <ul className="space-y-4">
                  {tabContent[activeTab].content.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-3 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-700 break-words" style={{ wordBreak: 'break-word' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — CTA Stripe */}
      <section id="cta" className="py-12 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Get a FREE appointment with one of our fertility experts today!
              </h3>
              <p className="text-gray-700">
                Make an appointment with an experienced fertility doctor now to discuss your IVF choices and develop a treatment plan.
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

export default IVF;