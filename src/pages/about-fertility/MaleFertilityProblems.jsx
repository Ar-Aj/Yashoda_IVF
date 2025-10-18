import React, { useState, useRef, useEffect } from 'react';
import Button from '../../components/ui/Button';

const MaleFertilityProblems = () => {
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
          title: "Low Sperm Count",
          description: "Sometimes, a guy might not produce enough sperm. This can happen due to various reasons like hormonal issues, infections, or even some lifestyle factors like smoking or excessive drinking."
        },
        {
          title: "Poor Sperm Quality",
          description: "Even if there are enough sperm, they might not swim well or have the right shape to reach and fertilize an egg. This can be because of genetics, heat exposure, or health problems."
        },
        {
          title: "Blockages or Problems in Tubes",
          description: "Sometimes, there might be a blockage or damage in the tubes that carry sperm. This could be due to infections, surgeries, or certain genetic conditions."
        },
        {
          title: "Erectile Dysfunction or Ejaculation Issues",
          description: "Problems in getting or maintaining an erection or trouble ejaculating properly can also affect fertility. This could be due to stress, health conditions, or sometimes certain medications."
        }
      ]
    },
    symptoms: {
      content: [
        "Most men with infertility will not notice obvious symptoms other than inability to conceive.",
        "Sometimes, signs can include:",
        "● Trouble with sexual function (erection, ejaculation problems)",
        "● Pain, swelling, or lumps in the testicle area",
        "● Changes in hair growth",
        "● Problems with sexual desire"
      ]
    },
    treatment: {
      content: [
        "The treatment for male infertility depends on the underlying cause. Options include:",
        "● Medication for hormonal issues or infections",
        "● Surgery for blockages or varicoceles",
        "● Lifestyle modification (improving diet, exercise, reducing stress, quitting smoking/alcohol)",
        "● Assisted reproductive techniques like IUI or IVF may be suggested if other options do not work."
      ]
    },
    prevention: {
      content: [
        "While not all cases can be prevented, you can improve your chances by:",
        "● Avoiding tobacco, excessive alcohol, and drugs",
        "● Maintaining a healthy weight",
        "● Protecting yourself from sexually transmitted infections",
        "● Managing stress and getting regular exercise"
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
              Male Infertility Problems
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

      {/* Section 2 — What is Male Infertility? */}
      <section id="what-is-male-infertility" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <div className="absolute inset-0 bg-pink-100 opacity-20"></div>
                <div className="aspect-square w-full">
                  <img 
                    src="/assets/images/male-infertility-illustration.jpg" 
                    alt="Illustration showing male reproductive system and sperm" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/5 p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What is Male Infertility?</h2>
                <p className="text-gray-700">
                  Male infertility refers to difficulties a man may have in achieving pregnancy with a female partner. It occurs when a man experiences issues related to his reproductive system that affect the ability to conceive a child. These issues might include low sperm count, poor sperm quality (like abnormal shape or movement), or problems with sperm delivery due to blockages or medical conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Tabbed Section (Causes, Symptoms, Treatment, Prevention) */}
      <section id="male-infertility-details" className="py-12 sm:py-16 bg-pink-50" style={{ backgroundColor: '#FFF0F7' }}>
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

      {/* Section 4 — Lifestyle & Natural Fertility Improvement */}
      <section id="lifestyle-improvement" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Improve your <span className="text-pink-500">Male fertility</span> Naturally
          </h2>
          
          <div className="bg-pink-50 rounded-xl p-6 mb-8">
            <p className="text-gray-700 mb-4">
              Discover simple lifestyle choices and science-backed tips to unlock your fertility potential. Optimise your health, enhance sperm quality, and increase your chances of conception—all without relying on artificial methods. Join us on this empowering journey towards the joy of parenthood.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-pink-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintain a Healthy Weight</h3>
              <p className="text-gray-700">
                Striking a balance is key. Both obesity and being underweight can hinder fertility. Focus on a nutritious diet and regular exercise to keep your weight in check and enhance fertility naturally.
              </p>
            </div>
            
            <div className="bg-white border border-pink-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quit Smoking</h3>
              <p className="text-gray-700">
                Smoking is not just harmful to your lungs; it can also take a toll on your sperm count and motility. Quitting smoking can lead to improved sperm quality and overall fertility levels.
              </p>
            </div>
            
            <div className="bg-white border border-pink-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limit Alcohol Consumption</h3>
              <p className="text-gray-700">
                Excessive alcohol consumption can throw a wrench into your sperm production and quality. Consider cutting back on alcohol or abstaining altogether to give your fertility a boost.
              </p>
            </div>
            
            <div className="bg-white border border-pink-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exercise Regularly</h3>
              <p className="text-gray-700">
                Regular exercise not only helps you maintain a healthy weight but also promotes overall well-being, which can positively impact fertility. Incorporate physical activity into your daily routine for optimal reproductive health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Global CTA Stripe */}
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

export default MaleFertilityProblems;