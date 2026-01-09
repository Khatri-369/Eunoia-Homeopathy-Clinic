import React, { useState } from 'react';
import { Search, MapPin, Calendar, Activity, ArrowRight, ShieldCheck, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, FAQS, FACILITIES, CONTACT_INFO, TESTIMONIALS } from '../constants';
import TreatmentCard from '../components/TreatmentCard';
import HealthImagesCarousel from '../components/HealthImagesCarousel';
import '../styles/HeartButton.css';
import '../styles/GradientButton.css';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.details.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="flex-grow">

      {/* HERO SECTION: Professional & Trust-Building - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-rose-50/50 via-white to-green-50/30 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 bg-white border border-rose-100 rounded-full shadow-sm text-xs sm:text-sm">
                <Star size={12} className="text-yellow-400 fill-yellow-400 sm:w-4 sm:h-4" />
                <span className="font-bold text-gray-800 uppercase tracking-wider">Rated #1 Clinic in Gotri</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.15]">
                Restoring <span className="text-primary italic">The Health Within</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
                Experience the precision of constitutional homeopathy with Dr. Hetal Pandav. Safe, non-toxic, and permanent cures for chronic diseases.
              </p>

              {/* Mobile-Optimized Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <Link
                  to="/book-appointment"
                  className="gradient-button w-full sm:w-auto"
                >
                  <div className="gradient-bg"></div>

                  <div className="glow-effect"></div>

                  <div className="glitter-container">
                    <div className="glitter"></div>
                    <div className="glitter"></div>
                    <div className="glitter"></div>
                  </div>

                  <div className="border-ring"></div>

                  <div className="glitter-container">
                    <div className="wave"></div>
                  </div>

                  <span className="button-content">
                    <span>Book Appointment</span>
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="button-arrow"
                    >
                      <path
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span className="button-underline"></span>
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="gradient-button w-full sm:w-auto"
                >
                  <div className="gradient-bg"></div>

                  <div className="glow-effect"></div>

                  <div className="glitter-container">
                    <div className="glitter"></div>
                    <div className="glitter"></div>
                    <div className="glitter"></div>
                  </div>

                  <div className="border-ring"></div>

                  <div className="glitter-container">
                    <div className="wave"></div>
                  </div>

                  <span className="button-content">
                    <span>Contact Us</span>
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="button-arrow"
                    >
                      <path
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span className="button-underline"></span>
                  </span>
                </Link>
              </div>

              {/* Trust Indicators - Mobile Responsive */}
              <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-gray-500 border-t border-gray-100 mt-6 sm:mt-8">
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-secondary sm:w-5 sm:h-5" /> FDA Approved</span>
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-secondary sm:w-5 sm:h-5" /> No Side Effects</span>
              </div>
            </div>

            {/* Right Visual - Mobile Optimized */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative z-10 w-full max-w-sm sm:max-w-md">
                {/* Main Image */}
                <div className="relative rounded-3xl sm:rounded-[3rem] overflow-hidden border-4 sm:border-[6px] border-primary shadow-2xl">
                  <img
                    src="/Client face photo.jpg"
                    alt="Dr. Hetal Pandav"
                    className="w-full h-auto object-cover bg-gray-100"
                  />

                  {/* Overlay Stats - Mobile Responsive */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 sm:p-6 border-t border-gray-100">
                    <div className="flex justify-between text-center">
                      <div>
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">10+</p>
                        <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider">Years</p>
                      </div>
                      <div className="w-px bg-gray-200"></div>
                      <div>
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">1k+</p>
                        <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider">Patients</p>
                      </div>
                      <div className="w-px bg-gray-200"></div>
                      <div>
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">4.9</p>
                        <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rose-100/40 to-green-100/40 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US: Ultra Premium Medical Design - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-rose-100/40 to-green-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-green-100/40 to-rose-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Floating Medical Icons Background - Hidden on mobile */}
        <div className="absolute inset-0 opacity-5 hidden md:block">
          <div className="absolute top-1/4 left-1/4 text-primary"><Activity size={80} /></div>
          <div className="absolute bottom-1/3 right-1/4 text-secondary"><ShieldCheck size={80} /></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Enhanced Header - Mobile Responsive */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-full shadow-sm mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest">Our Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-400">Eunoia</span>?
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <div className="h-2 w-2 bg-secondary rounded-full"></div>
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light mb-8">
                  We don't just treat symptoms; we treat the person. Our approach is holistic, gentle, and scientifically grounded.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://maps.app.goo.gl/xbU92LeY96UzBKj1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-rose-700 transition-all transform hover:-translate-y-1"
                  >
                    <MapPin size={20} />
                    Start Tracking Location
                  </a>
                </div>
              </div>

              {/* Map Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-rose-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src="/eunoia-location-map.jpg"
                      alt="Eunoia Homeopathy Clinic Location"
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                      <p className="text-white font-serif text-lg font-bold">Visit our clinic in Gotri, Vadodara</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Card 1: Root Cause Treatment */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-rose-100/30 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border-2 border-white hover:border-rose-100 overflow-hidden">
                {/* Animated Corner Accent */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-rose-100 to-rose-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                {/* Icon Container */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-50 to-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border border-rose-100">
                    <Activity size={28} className="sm:w-9 sm:h-9 text-rose-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute -inset-2 border-2 border-rose-100 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-5 group-hover:text-rose-700 transition-colors duration-300">
                  Root Cause Treatment
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  We analyze your genetic history, lifestyle, and emotional state to find the constitutional remedy that uproots the disease.
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 2: Zero Side Effects */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-green-100/30 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border-2 border-white hover:border-green-100 overflow-hidden">
                {/* Animated Corner Accent */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-green-100 to-green-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                {/* Icon Container */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-50 to-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border border-green-100">
                    <ShieldCheck size={28} className="sm:w-9 sm:h-9 text-green-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute -inset-2 border-2 border-green-100 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-5 group-hover:text-green-700 transition-colors duration-300">
                  Zero Side Effects
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Safe for infants, pregnant women, and the elderly. Our medicines are non-toxic, non-addictive, and steroid-free.
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3: Personalized Care */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-rose-100/30 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border-2 border-white hover:border-rose-100 overflow-hidden">
                {/* Animated Corner Accent */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-rose-100 to-rose-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                {/* Icon Container */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-50 to-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border border-rose-100">
                    <Heart size={28} className="sm:w-9 sm:h-9 text-rose-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute -inset-2 border-2 border-rose-100 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-5 group-hover:text-rose-700 transition-colors duration-300">
                  Personalized Care
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Dr. Hetal personally dedicates time to listen to your story. No rushed appointments, just compassionate healing.
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* HEALTH CONDITIONS CAROUSEL */}
      < HealthImagesCarousel />

      {/* SERVICES SECTION */}
      < section className="py-20 bg-gray-50" id="services" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 block">Our Expertise</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">Know more about our specialised treatments</h2>
            </div>

            {/* Search - Mobile Optimized */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 pl-11 pr-4 py-3.5 text-sm sm:text-base rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.length > 0 ? (
              filteredServices.map(service => (
                <TreatmentCard key={service.id} service={service} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No services found for "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </section >

      {/* TESTIMONIALS */}
      < section className="py-20 bg-white border-t border-gray-100" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative mt-4 group hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-400">Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* FAQ Accordion */}
      < section className="py-20 bg-white" >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details key={index} className="group bg-neutral rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-colors hover:bg-gray-100">
                <summary className="flex items-center justify-between font-bold text-gray-800">
                  {faq.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ArrowRight size={20} className="rotate-90 group-open:-rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section >

      {/* CTA Bottom */}
      < section className="py-20 bg-rose-50 text-center" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">Ready to restore your health?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Book a consultation today and start your journey towards a healthier, happier life.</p>
          <Link to="/book-appointment" className="gradient-button inline-block">
            <div className="gradient-bg"></div>

            <div className="glow-effect"></div>

            <div className="glitter-container">
              <div className="glitter"></div>
              <div className="glitter"></div>
              <div className="glitter"></div>
            </div>

            <div className="border-ring"></div>

            <div className="glitter-container">
              <div className="wave"></div>
            </div>

            <span className="button-content">
              <span>Book Appointment Now</span>
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="button-arrow"
              >
                <path
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="button-underline"></span>
            </span>
          </Link>
        </div>
      </section >

    </main >
  );
};

export default HomePage;