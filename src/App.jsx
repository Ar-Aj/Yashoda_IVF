import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MeetOurFertilityExpert from './pages/MeetOurFertilityExpert';
import IVF from './pages/IVF';
import IUI from './pages/IUI';
import ICSI from './pages/ICSI';
import Laparoscopy from './pages/Laparoscopy';
import LaserAssistedHatching from './pages/LaserAssistedHatching';
import BlastocystCultureAndTransfer from './pages/BlastocystCultureAndTransfer';
import Hysteroscopy from './pages/Hysteroscopy';
import AboutFertility from './pages/AboutFertility';
import MaleFertilityProblems from './pages/MaleFertilityProblems';
import FemaleInfertilityProblems from './pages/FemaleInfertilityProblems';
import InfertilityProblems from './pages/InfertilityProblems';
import Articles from './pages/Articles';
import Video from './pages/Video';
import ContactUs from './pages/ContactUs';
import ComponentDemo from './pages/ComponentDemo';
import FixedSocialSidebar from './components/ui/FixedSocialSidebar';
import FloatingContactButton from './components/ui/FloatingContactButton';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/meet-our-fertility-expert" element={<MeetOurFertilityExpert />} />
            <Route path="/services/ivf" element={<IVF />} />
            <Route path="/services/iui" element={<IUI />} />
            <Route path="/services/icsi" element={<ICSI />} />
            <Route path="/services/laparoscopy" element={<Laparoscopy />} />
            <Route path="/services/laser-assisted-hatching" element={<LaserAssistedHatching />} />
            <Route path="/services/blastocyst-culture-and-transfer" element={<BlastocystCultureAndTransfer />} />
            <Route path="/services/hysteroscopy" element={<Hysteroscopy />} />
            <Route path="/about-fertility" element={<AboutFertility />} />
            <Route path="/about-fertility/male-fertility-problems" element={<MaleFertilityProblems />} />
            <Route path="/about-fertility/female-infertility-problems" element={<FemaleInfertilityProblems />} />
            <Route path="/about-fertility/infertility-problems" element={<InfertilityProblems />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/type/video" element={<Video />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/component-demo" element={<ComponentDemo />} />
          </Routes>
        </main>
        <Footer />
        <FixedSocialSidebar />
        <FloatingContactButton />
      </div>
    </Router>
  );
}

export default App;