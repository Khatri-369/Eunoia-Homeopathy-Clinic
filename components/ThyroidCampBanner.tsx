import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Phone, Activity, Heart, AlertCircle, Share2 } from 'lucide-react';

const ThyroidCampBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleShare = async () => {
        const shareData = {
            title: 'Special Thyroid Treatment Camp',
            text: 'Join Dr. Hetal Pandav for a Special Thyroid Treatment Camp at Eunoia Homoeopathy! Get TSH test for ₹100 and 50% off on treatment.',
            url: window.location.origin // improved to use origin to ensure clean base URL
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
                alert('Camp details copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="relative bg-gradient-to-r from-rose-50 to-rose-100 border-b-4 border-primary shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 p-1 bg-white/50 hover:bg-white rounded-full text-gray-600 hover:text-red-500 transition-all z-20"
                aria-label="Close banner"
            >
                <X size={20} />
            </button>

            <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">

                    {/* Left Column: Hooks & Intro */}
                    <div className="lg:w-1/3 text-center lg:text-left space-y-4">
                        <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider mb-2 animate-pulse">
                            Limited Time Event
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                            Special Thyroid <span className="text-primary italic">Treatment Camp</span>
                        </h2>
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <div className="h-10 w-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                                <Heart className="text-primary h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800">Dr. Hetal Pandav</p>
                                <p className="text-xs text-secondary font-semibold">MD (Homoeopathy)</p>
                            </div>
                        </div>

                        <div className="bg-white/60 p-4 rounded-xl shadow-sm border border-rose-100">
                            <p className="text-sm font-semibold text-gray-700 mb-2">Are you suffering from?</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs text-gray-600">
                                <span className="bg-white px-2 py-1 rounded-md border border-gray-200">Weight changes</span>
                                <span className="bg-white px-2 py-1 rounded-md border border-gray-200">Hair fall</span>
                                <span className="bg-white px-2 py-1 rounded-md border border-gray-200">Fatigue</span>
                                <span className="bg-white px-2 py-1 rounded-md border border-gray-200">Anxiety</span>
                                <span className="bg-white px-2 py-1 rounded-md border border-gray-200">Mood swings</span>
                                <span className="bg-white px-2 py-1 rounded-md border border-gray-200">Irregular Periods</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Offers & What We Treat */}
                    <div className="lg:w-1/3 w-full">
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-secondary p-3 text-center">
                                <h3 className="text-white font-bold text-lg flex items-center justify-center gap-2">
                                    <Activity size={20} /> Exclusive Camp Offers
                                </h3>
                            </div>
                            <div className="p-5 space-y-4">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-primary rounded-full flex items-center justify-center font-bold text-sm">₹</span>
                                        <span className="font-medium">TSH Test – <span className="text-primary font-bold">Only ₹100</span></span>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-primary rounded-full flex items-center justify-center font-bold text-sm">%</span>
                                        <span className="font-medium">50% OFF on <span className="text-gray-900">Complete Thyroid Profile</span></span>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-primary rounded-full flex items-center justify-center font-bold text-sm">%</span>
                                        <span className="font-medium">50% OFF on <span className="text-gray-900">Homoeopathic Treatment</span></span>
                                    </li>
                                </ul>
                                <div className="border-t border-gray-100 pt-3 mt-2">
                                    <p className="text-xs text-center text-gray-500 font-medium">
                                        ✔ Hypothyroidism ✔ Weight gain ✔ Hair fall ✔ Fatigue
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Key Details & CTA */}
                    <div className="lg:w-1/3 w-full flex flex-col gap-4">
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-3">
                            <div className="flex items-start gap-3">
                                <Calendar className="text-primary mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-gray-900">12th Feb to 12th Mar 2026</h4>
                                    <p className="text-sm text-gray-600">Every Thursday to Sunday</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="text-primary mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-gray-900">6:00 PM to 8:00 PM</h4>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-gray-900">Eunoia Homoeopathy</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        FF-7, Sharanam Complex, Above Jay Ambe Laundry, Next to Sai Dental Clinic, Krunal Cross Road, Gotri, Vadodara – 390021
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a href="tel:8141327947" className="w-full bg-primary hover:bg-pink-700 text-white py-3 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                            <Phone size={20} className="group-hover:animate-bounce" />
                            Book Appointment: 8141327947
                        </a>

                        <button
                            onClick={handleShare}
                            className="w-full bg-white hover:bg-gray-50 text-secondary border-2 border-secondary py-3 rounded-xl font-bold text-center shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                        >
                            <Share2 size={20} />
                            Share Camp Details
                        </button>

                        <div className="flex items-center justify-center gap-2 text-xs text-amber-700 font-medium bg-amber-50 py-2 rounded-lg">
                            <AlertCircle size={14} />
                            <span>Limited seats available • Prior appointment mandatory</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>
    );
};

export default ThyroidCampBanner;
