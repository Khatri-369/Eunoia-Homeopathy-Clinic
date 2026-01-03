import React, { useState } from 'react';
import { Activity, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutPage: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const carouselImages = [
        { src: '/Client Laptop photo.jpg', alt: 'Client Laptop Photo' },
        { src: '/client diary photo.jpg', alt: 'Client Diary Photo' },
        { src: '/Medicine photo.jpg', alt: 'Medicine Photo' },
    ];

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % carouselImages.length
        );
    };

    return (
        <main className="flex-grow">


            {/* Meet Dr. Hetal Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Image Side - Carousel */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-primary">
                                {/* Fixed size container */}
                                <div className="relative w-full h-[500px] bg-gray-100">
                                    {carouselImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image.src}
                                            alt={image.alt}
                                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-multiply"></div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={handlePrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={24} />
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={24} />
                                </button>

                                {/* Carousel Indicators */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {carouselImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                ? 'bg-white w-8'
                                                : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Decorative background blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-rose-100 rounded-full blur-3xl -z-10"></div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Meet Our Expert</span>
                                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">Dr. Hetal Pandav</h2>
                                <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
                            </div>

                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Dr. Hetal Pandav is a trusted, patient-focused, and experienced homeopathic doctor with a long history of successfully treating patients. She is renowned for her expertise in constitutional homeopathy and her compassionate approach to patient care.
                                </p>
                                <p>
                                    With a deep understanding of the human body and mind, Dr. Hetal believes in treating the root cause of ailments rather than just suppressing symptoms. Her dedication to holistic healing empowers patients to achieve lifelong good health.
                                </p>
                                <p>
                                    Specializing in lifestyle management, weight loss, and chronic disorders, Dr. Hetal combines traditional homeopathic wisdom with modern diagnostic insights to provide personalized treatment plans.
                                </p>
                            </div>

                            <div className="pt-4">
                                <div className="inline-block bg-neutral px-8 py-4 rounded-xl border border-gray-200">
                                    <p className="font-serif font-bold text-xl text-primary">"Healing begins when we listen to the body."</p>
                                    <p className="text-right text-gray-500 text-sm mt-2">- Dr. Hetal Pandav</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HETAL Section - Vertical List Style */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Our Core Values</h2>
                        <p className="text-gray-600">The pillars that define our practice and commitment to your well-being.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* H */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            {/* Icon Flag */}
                            <div className="md:w-24 bg-[#802640] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">H</span>
                            </div>

                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#802640] mb-2 flex items-center">
                                    Healing with Harmony <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Holistic Healing)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Addressing the physical, emotional, and mental aspects of health for complete well-being. At our core, we abide by the timeless virtue of honor.
                                </p>
                            </div>
                        </div>

                        {/* E */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            <div className="md:w-24 bg-[#7fc343] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">E</span>
                            </div>
                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#4a7a23] mb-2 flex items-center">
                                    Empowering Patient Care <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Empathetic Care)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Listening to your story with compassion. Our pursuit of excellence is relentless, ensuring top-tier services and unparalleled satisfaction.
                                </p>
                            </div>
                        </div>

                        {/* T */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            <div className="md:w-24 bg-[#136da0] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">T</span>
                            </div>
                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#0d4d73] mb-2 flex items-center">
                                    Togetherness in Teamwork <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Trusted Expertise)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Building relationships based on integrity. We believe in fostering an atmosphere of cooperation where collective efforts lead to higher quality results.
                                </p>
                            </div>
                        </div>

                        {/* A */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            <div className="md:w-24 bg-[#802640] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">A</span>
                            </div>
                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#802640] mb-2 flex items-center">
                                    Aligned with Modern Homeopathy <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Advanced Homoeopathy)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Utilizing modern advancements. We are fully conscious of our actions and embrace ownership with grace, poised to face any outcomes.
                                </p>
                            </div>
                        </div>

                        {/* L */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            <div className="md:w-24 bg-[#7fc343] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">L</span>
                            </div>
                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#4a7a23] mb-2 flex items-center">
                                    Lifestyle wellness <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Reverence for Diversity)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Guiding you towards a healthier lifestyle. We cultivate an environment of mutual respect, cherishing the rich tapestry of our clientele.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section - Premium Design */}
            <section className="py-20 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden">
                {/* Enhanced Decorative Elements */}
                <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-rose-100/40 to-green-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-green-100/40 to-rose-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                        {/* Mission Card */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-rose-100/30 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                            <div className="relative bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border-2 border-white hover:border-rose-100 overflow-hidden">
                                {/* Animated Corner Accent */}
                                <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-rose-100 to-rose-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                                {/* Icon Container */}
                                <div className="relative mb-6 sm:mb-8 flex justify-center">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-50 to-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border border-rose-100">
                                        <Activity size={28} className="sm:w-9 sm:h-9 text-rose-600 group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    {/* Decorative Ring */}
                                    <div className="absolute -inset-2 border-2 border-rose-100 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-5 text-center group-hover:text-rose-700 transition-colors duration-300">
                                    Our Mission
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-center">
                                    "Our commitment is to educate and motivate individuals to reach their optimal fitness potential and inspire them to continue reaching for their highest ideal of health."
                                </p>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-green-100/30 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                            <div className="relative bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border-2 border-white hover:border-green-100 overflow-hidden">
                                {/* Animated Corner Accent */}
                                <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-green-100 to-green-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                                {/* Icon Container */}
                                <div className="relative mb-6 sm:mb-8 flex justify-center">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-50 to-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border border-green-100">
                                        <ShieldCheck size={28} className="sm:w-9 sm:h-9 text-green-600 group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    {/* Decorative Ring */}
                                    <div className="absolute -inset-2 border-2 border-green-100 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-5 text-center group-hover:text-green-700 transition-colors duration-300">
                                    Our Vision
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-center">
                                    "Mind and Body Fitness for Lifelong Good Health can be achieved through holistic health approaches. To assist people in attaining their vision, dreams, and goals; to inspire, motivate, and educate people to live lives of health and well-being."
                                </p>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AboutPage;
