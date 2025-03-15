import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Home from './pages/Home';
import "./App.css";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow w-full ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <div className="full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
