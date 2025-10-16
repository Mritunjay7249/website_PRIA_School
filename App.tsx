import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdmissionLanding from './components/pages/AdmissionLanding';
import AdmissionProcedure from './components/pages/AdmissionProcedure';
import AdmissionForms from './components/pages/AdmissionForms';
import NurseryAdmission from './components/pages/NurseryAdmission';
import ReAdmission from './components/pages/ReAdmission';
import Std1To8Admission from './components/pages/Std1To8Admission';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on "page" change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    const path = route.split('?')[0]; // Ignore query params for routing
    
    switch (path) {
      case '#/admission':
        return <AdmissionLanding />;
      case '#/admission/procedure':
        return <AdmissionProcedure />;
      case '#/admission/forms':
        return <AdmissionForms />;
      case '#/admission/nursery':
        return <NurseryAdmission />;
      case '#/admission/re-admission':
        return <ReAdmission />;
      case '#/admission/std1-8':
        return <Std1To8Admission />;
      default:
        return (
          <>
            <Hero />
            <Gallery />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;