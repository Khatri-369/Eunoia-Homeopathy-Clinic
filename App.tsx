import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import HomePage from './pages/HomePage';
import StudentPortal from './pages/StudentPortal';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';

import AboutPage from './pages/AboutPage';
import ServiceDetail from './pages/ServiceDetail';
import AdminPanel from './pages/AdminPanel';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-800">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/student" element={<StudentPortal />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>

        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
};

export default App;