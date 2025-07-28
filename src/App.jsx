import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuickIntro from './components/QuickIntro';
import PhotoSlider from './components/PhotoSlider';
import About from './pages/About';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Location from './pages/Location';
import LocalActivities from './pages/Activities';
import Testimonials from './pages/Testimonials';

function Home() {
  return (
    <div>
      <HeroSection />
      <QuickIntro />
      <PhotoSlider />
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/local-activities" element={<LocalActivities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
