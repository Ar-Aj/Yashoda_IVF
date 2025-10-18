import React, { useState, useRef, useEffect } from 'react';
import Button from '../../components/ui/Button';

const Hysteroscopy = () => {
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
      content: [
        {
          title: "Precision Diagnosis:",
          text: "Yashoda Fertility & IVF Center employs hysteroscopy as a precise diagnostic tool to examine the uterus. This minimally invasive procedure allows for detailed visual inspection, aiding in the accurate assessment of various fertility-related issues."
        },
        {
          title: "Tailored Treatment:",
          text: "Hysteroscopy plays a crucial role in shaping personalized treatment plans. Our specialists identify specific uterus problems, enabling us to create targeted solutions for better fertility outcomes."
        },
        {
          title: "Improved Success Rates:",
          text: "Using hysteroscopy has significantly boosted our success rates in fertility treatments. By addressing potential barriers to conception in the uterus, we've increased the chances of successful pregnancies."
        },
        {
          title: "Minimized Risks:",
          text: "Compared to older methods, hysteroscopy is safer, with fewer risks like infections and quicker recovery times. This ensures a safer and faster healing process for our patients."
        },
        {
          title: "Effective Intervention:",
          text: "At Yashoda Fertility & IVF Center, hysteroscopy is an effective intervention for various uterus-related fertility issues. This precise technique improves the chances of successful treatment outcomes."
        },
        {
          title: "Patient-Centric Care:",
          text: "We're committed to providing comprehensive support throughout the hysteroscopy journey. Prioritizing patient comfort and personalized attention is central to our approach."
        }
      ]
    },
    treatment: {
      content: [
        "Pre-procedure evaluation; anesthesia plan as indicated.",
        "Insertion of hysteroscope through cervix to visualize uterine cavity.",
        "Diagnostic assessment; therapeutic steps if required (e.g., polyp removal, adhesiolysis).",
        "Post-procedure recovery and personalized follow-up plan."
      ]
    },
    effects: {
      content: [
        "Mild cramping or spotting for a day or two.",
        "Temporary discomfort managed with routine care.",
        "Contact the care team for fever, severe pain, heavy bleeding, or unusual discharge."
      ]
    },
    success: {
      content: [
        "Outcomes depend on diagnosis, extent of findings, and subsequent treatment plan. Your specialist will provide individualized expectations based on your clinical profile."
      ]
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
      <section id="hero" className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-services.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center pt-10 sm:pt-14 md:pt-16">
          <div className="bg-white bg-opacity-50 p-6 sm:p-8 rounded-lg inline-block">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center">
              Hysteroscopy
            </h1>
          </div>
        </div>
      </section>

      {/* Section 2 — What is Hysteroscopy? */}
      <section id="what-is-hysteroscopy" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <div className="absolute inset-0 bg-pink-100 opacity-20"></div>
                <div className="aspect-square w-full">
                  <img 
                    src="/assets/images/hysteroscopy.jpeg" 
                    alt="Uterus/diagnostic illustration (pink theme)" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/5 p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What is Hysteroscopy?</h2>
                <p className="text-gray-700 mb-4">
                  Hysteroscopy is a minimally invasive medical procedure that involves passing a thin, lighted tube called a hysteroscope through the vagina and cervix into the uterus. It is a diagnostic and occasionally therapeutic procedure used to examine and treat various uterine conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Hysteroscopy Details Tabs */}
      <section id="hysteroscopy-tabs" className="py-12 sm:py-16 bg-pink-50" style={{ backgroundColor: '#FFF0F7' }}>
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
                <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
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
                {activeTab === 'why' && (
                  <div className="space-y-6">
                    {tabContent.why.content.map((item, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'treatment' && (
                  <ul className="space-y-4">
                    {tabContent.treatment.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pink-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span className="text-gray-700 break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {activeTab === 'effects' && (
                  <ul className="space-y-4">
                    {tabContent.effects.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pink-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span className="text-gray-700 break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {activeTab === 'success' && (
                  <div>
                    {tabContent.success.content.map((item, index) => (
                      <p key={index} className="text-gray-700 mb-4 last:mb-0">{item}</p>
                    ))}
                  </div>
                )}
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

export default Hysteroscopy;