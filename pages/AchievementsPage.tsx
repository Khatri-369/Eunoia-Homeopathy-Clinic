import React, { useState, useEffect } from 'react';
import { Award, Calendar, Trophy, Medal, Sparkles } from 'lucide-react';
import { db } from '../lib/supabase';

interface Achievement {
    id: string;
    title: string;
    description: string;
    image_url: string;
    date: string;
}

const AchievementsPage: React.FC = () => {
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAchievements();
    }, []);

    const loadAchievements = async () => {
        try {
            const data = await db.achievements.getAll();
            setAchievements(data || []);
        } catch (error) {
            console.error('Error loading achievements:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-rose-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading achievements...</p>
                </div>
            </div>
        );
    }

    if (achievements.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-rose-50 flex flex-col items-center justify-center p-4">
                <div className="text-center max-w-md animate-fade-in-up">
                    <div className="mb-8 flex justify-center relative">
                        <div className="w-28 h-28 bg-gradient-to-br from-purple-100 to-rose-100 rounded-full flex items-center justify-center shadow-xl">
                            <Trophy size={56} className="text-purple-600" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                            <Sparkles size={24} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-purple-900 via-rose-900 to-purple-900 bg-clip-text text-transparent mb-4">
                        Achievements
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Our achievements and recognitions will be showcased here soon.
                    </p>
                    <div className="inline-block px-6 py-3 bg-white rounded-full border-2 border-purple-200 text-sm font-semibold text-purple-600 shadow-sm">
                        Coming Soon
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-rose-50 py-16">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Enhanced Header */}
                <div className="text-center mb-16 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>

                    <div className="relative">
                        <div className="inline-block mb-6">
                            <span className="px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-600 text-white text-sm font-bold rounded-full shadow-lg uppercase tracking-wider">
                                Our Achievements
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-purple-900 via-rose-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
                            Awards & Recognition
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Celebrating milestones and recognitions in homeopathic excellence
                        </p>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-3 mt-8">
                            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-purple-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-rose-400 to-purple-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-transparent rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Achievements Grid with staggered animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {achievements.map((achievement, index) => (
                        <div
                            key={achievement.id}
                            className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Section with overlay */}
                            {achievement.image_url && (
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={achievement.image_url}
                                        alt={achievement.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Floating Award Icon */}
                                    <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                        <Award className="text-purple-600" size={28} />
                                    </div>
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="p-6">
                                {/* Date Badge */}
                                {achievement.date && (
                                    <div className="flex items-center gap-2 text-purple-600 text-sm font-bold mb-4">
                                        <div className="p-2 bg-purple-50 rounded-lg">
                                            <Calendar size={16} />
                                        </div>
                                        <span>
                                            {new Date(achievement.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                )}

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                                    {achievement.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {achievement.description}
                                </p>

                                {/* Bottom Accent */}
                                <div className="pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-purple-600 text-xs font-bold uppercase tracking-wider">
                                        <Medal size={18} />
                                        <span>Achievement</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Stats Section */}
                <div className="bg-gradient-to-r from-purple-600 to-rose-600 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="group">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <Trophy className="text-white" size={40} />
                            </div>
                            <h3 className="text-5xl font-bold text-white mb-2">{achievements.length}+</h3>
                            <p className="text-purple-100 font-semibold text-lg">Achievements</p>
                        </div>
                        <div className="group">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <Award className="text-white" size={40} />
                            </div>
                            <h3 className="text-5xl font-bold text-white mb-2">10+</h3>
                            <p className="text-purple-100 font-semibold text-lg">Years of Excellence</p>
                        </div>
                        <div className="group">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <Medal className="text-white" size={40} />
                            </div>
                            <h3 className="text-5xl font-bold text-white mb-2">1000+</h3>
                            <p className="text-purple-100 font-semibold text-lg">Happy Patients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsPage;
