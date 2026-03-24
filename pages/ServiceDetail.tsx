
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle, Heart, ShieldCheck, Activity, Calendar } from 'lucide-react';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const service = SERVICES.find(s => s.id === id);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Treatment Not Found</h2>
                    <Link to="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    const { fullContent } = service;

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px]">
                <img
                    src={service.imageUrl || 'https://via.placeholder.com/1200x600'}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white max-w-7xl mx-auto">
                    <Link to="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Treatments
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                            <service.icon size={32} className="text-white" />
                        </div>
                        <span className="text-sm font-semibold tracking-wider uppercase bg-primary/90 px-3 py-1 rounded-full">Specialized Treatment</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 shadow-sm">{service.title}</h1>
                    <p className="text-xl text-gray-200 max-w-2xl font-light">{service.description}</p>
                </div>
            </section>

            {/* Content Container */}
            <div className="container mx-auto px-4 max-w-6xl -mt-10 relative z-10">
                <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-gray-100">

                    {fullContent ? (
                        <div className="flex flex-col lg:flex-row gap-16">

                            {/* Main Content - Left */}
                            <div className="flex-1 space-y-12">

                                {/* Overview */}
                                <section>
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                                        <Activity className="text-primary mr-3" /> Overview
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                        {fullContent.overview}
                                    </p>
                                </section>

                                {/* Two Column Grid for Symptoms & Causes */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Symptoms */}
                                    <div className="bg-rose-50/50 p-8 rounded-2xl border-2 border-black">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                            <AlertCircle className="text-rose-500 mr-2" size={20} /> Common Symptoms
                                        </h3>
                                        <ul className="space-y-3">
                                            {fullContent.symptoms.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-gray-700">
                                                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Causes */}
                                    <div className="bg-gray-50 p-8 rounded-2xl border-2 border-black">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                            <AlertCircle className="text-gray-500 mr-2" size={20} /> Causes & Triggers
                                        </h3>
                                        <ul className="space-y-3">
                                            {fullContent.causes.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-gray-700">
                                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Homeopathic Approach */}
                                <section>
                                    <div className="bg-green-50/50 p-8 rounded-2xl border-2 border-black">
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                                            <Heart className="text-green-600 mr-3" /> Why Homeopathy?
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                                            {fullContent.approach}
                                        </p>
                                    </div>
                                </section>

                                {/* Benefits */}
                                <section>
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                                        <ShieldCheck className="text-secondary mr-3" /> Key Benefits
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {fullContent.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-sm border-2 border-black">
                                                <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" size={20} />
                                                <span className="font-semibold text-gray-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Who Should Consult */}
                                {fullContent.whoShouldConsult && (
                                    <section>
                                        <h2 className="text-xl font-bold text-gray-900 mb-4">Who Should Consult?</h2>
                                        <ul className="flex flex-wrap gap-2">
                                            {fullContent.whoShouldConsult.map((item, idx) => (
                                                <li key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                            </div>

                            {/* Sidebar CTA - Right (Sticky on Large Screens) */}
                            <div className="lg:w-80 flex-shrink-0">
                                <div className="sticky top-24 space-y-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-black">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Book Your Visit</h3>
                                        <p className="text-gray-500 text-sm mb-6">Dr. Hetal Pandav is ready to help you heal naturally.</p>

                                        <Link to="/book-appointment" className="block w-full bg-primary text-white text-center py-3 rounded-full font-bold hover:bg-rose-700 transition shadow-lg shadow-rose-200 mb-4">
                                            Book Appointment
                                        </Link>
                                        <Link to="/contact" className="block w-full bg-white text-gray-800 border border-gray-200 text-center py-3 rounded-full font-bold hover:bg-gray-50 transition">
                                            Contact Us
                                        </Link>
                                    </div>

                                    <div className="bg-neutral p-6 rounded-2xl border-2 border-black">
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center"><Calendar size={18} className="mr-2" /> Clinic Timings</h4>
                                        <p className="text-sm text-gray-600 mb-1">Monday - Saturday</p>
                                        <p className="font-semibold text-gray-800">5:30 PM - 8:30 PM</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500">Detailed content coming soon for this treatment.</p>
                            <Link to="/contact" className="text-primary font-semibold mt-4 inline-block">Contact us for more info</Link>
                        </div>
                    )}

                    <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-500 italic">
                            Note: Homeopathic treatment is individualized. Results may vary depending on the patient’s condition, duration, and lifestyle.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceDetail;
