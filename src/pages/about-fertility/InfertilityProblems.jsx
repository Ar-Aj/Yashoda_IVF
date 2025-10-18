import React, { useState, useRef, useEffect } from 'react';
import Button from '../../components/ui/Button';

const InfertilityProblems = () => {
  const [activeTab, setActiveTab] = useState('causes');
  const tabListRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tabs = [
    { id: 'causes', label: 'Causes' },
    { id: 'symptoms', label: 'Symptoms' },
    { id: 'treatment', label: 'Treatment' },
    { id: 'prevention', label: 'Prevention' }
  ];

  const tabContent = {
    causes: {
      content: [
        {
          title: "Ovulation Issues",
          description: "Sometimes, women don't release eggs regularly, making it hard to conceive."
        },
        {
          title: "Sperm Issues",
          description: "Low sperm count, weak movement, or odd shapes can make it tough for sperm to fertilize an egg."
        },
        {
          title: "Blocked Tubes",
          description: "Tubes in women might get blocked, stopping the egg and sperm from meeting."
        },
        {
          title: "Endometriosis",
          description: "A condition where tissue grows outside the uterus and affects fertility."
        },
        {
          title: "Age",
          description: "Getting older can reduce fertility in both men and women because of fewer and poorer quality eggs or sperm."
        }
      ]
    },
    symptoms: {
      content: [
        "Failure to conceive after 12+ months of regular, unprotected intercourse.",
        "Possible related signs:",
        "● Irregular periods (women)",
        "● Sexual function/ejaculation issues (men)",
        "● Pelvic pain or abnormalities",
        "● Hormone imbalance signs (both)"
      ]
    },
    treatment: {
      content: [
        "Treatment depends on the cause. Can include:",
        "● Medicines for ovulation/hormones",
        "● Surgery for blockages, endometriosis, or varicoceles",
        "● Lifestyle modification (quit smoking/alcohol, reduce stress, diet)",
        "● Assisted reproductive technology (IUI, IVF, ICSI)"
      ]
    },
    prevention: {
      content: [
        "While not all infertility can be prevented:",
        "● Maintain healthy weight",
        "● Practice safe sex to avoid STIs",
        "● Avoid smoking, excess alcohol, toxins",
        "● Manage stress and reproductive health"
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
      <section id="hero" className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-hands-baby.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center pt-10 sm:pt-14 md:pt-16">
          <div className="bg-white bg-opacity-50 p-6 sm:p-8 rounded-lg inline-block">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center">
              Infertility Problems
            </h1>
          </div>
        </div>
        {/* Pink wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="fill-pink-500">
            <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Section 2 — What is Infertility Problems? */}
      <section id="what-is-infertility" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <div className="absolute inset-0 bg-pink-100 opacity-20"></div>
                <div className="aspect-square w-full">
                  <img 
                    src="/assets/images/infertility-illustration.jpg" 
                    alt="Couple with pregnancy test" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/5 p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What is Infertility problems?</h2>
                <p className="text-gray-700">
                  Infertility, which affects both men and women, is the failure to conceive after a year of frequent, unprotected intercourse. Causes range from hormone imbalances to reproductive disorders, with medical treatment generally required for pregnancy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Tabbed Section (Causes, Symptoms, Treatment, Prevention) */}
      <section id="infertility-details" className="py-12 sm:py-16 bg-pink-50" style={{ backgroundColor: '#FFF0F7' }}>
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
                {activeTab !== 'symptoms' && activeTab !== 'treatment' && activeTab !== 'prevention' ? (
                  <div className="space-y-6">
                    {tabContent[activeTab].content.map((item, index) => (
                      <div key={index}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {tabContent[activeTab].content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        {item.startsWith('●') ? (
                          <>
                            <span className="text-pink-500 mr-3 mt-1 flex-shrink-0">•</span>
                            <span className="text-gray-700 break-words" style={{ wordBreak: 'break-word' }}>{item.substring(1).trim()}</span>
                          </>
                        ) : (
                          <span className="text-gray-700 break-words" style={{ wordBreak: 'break-word' }}>{item}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Global CTA Stripe */}
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

export default InfertilityProblems;