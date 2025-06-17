import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebDevelopment from './pages/WebDevelopment';
import AndroidDevelopment from './pages/AndroidDevelopment';
import AIAutomation from './pages/AIAutomation';
import Contact from './pages/Contact';
import Career from './pages/Career';
import FloatingWAButtons from './components/FloatingWAButtons';
import FloatingCallButtons from './components/FloatingCallButtons';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/android-development" element={<AndroidDevelopment />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
      <FloatingWAButtons />
      <FloatingCallButtons />
      <Footer />
    </Router>
  );
};

export default App;
