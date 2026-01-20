import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Eye, Calendar, User, GraduationCap, Sparkles, Award, BookMarked } from 'lucide-react';
import { db } from '../lib/supabase';

interface Seminar {
  id: string;
  title: string;
  date: string;
  description: string;
  image_url: string;
}

interface ResearchPaper {
  id: string;
  title: string;
  author: string;
  description: string;
  pdf_url: string;
  published_date: string;
}

interface StudyMaterial {
  id: string;
  title: string;
  category: string;
  description: string;
  pdf_url: string;
}

const StudentPortal: React.FC = () => {
  const [seminars, setSeminars] = useState<Seminar[]>([]);
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const [seminarsData, papersData, materialsData] = await Promise.all([
        db.seminars.getAll(),
        db.researchPapers.getAll(),
        db.studyMaterials.getAll()
      ]);
      setSeminars(seminarsData || []);
      setPapers(papersData || []);
      setMaterials(materialsData || []);
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setLoading(false);
    }
  };

  const hasContent = seminars.length > 0 || papers.length > 0 || materials.length > 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading resources...</p>
        </div>
      </div>
    );
  }

  if (!hasContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md animate-fade-in-up">
          <div className="mb-8 flex justify-center relative">
            <div className="w-28 h-28 bg-gradient-to-br from-rose-100 to-orange-100 rounded-full flex items-center justify-center shadow-xl">
              <BookOpen size={56} className="text-rose-600" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles size={24} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Student Portal
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Educational resources and materials will be available here soon.
          </p>
          <div className="inline-block px-6 py-3 bg-white rounded-full border-2 border-rose-200 text-sm font-semibold text-rose-600 shadow-sm">
            Coming Soon
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header - matching Achievements style */}
        <div className="text-center mb-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-rose-200/30 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-rose-600 to-orange-600 text-white text-sm font-bold rounded-full shadow-lg uppercase tracking-wider">
                Student Resources
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-rose-900 via-orange-900 to-rose-900 bg-clip-text text-transparent mb-6 leading-tight">
              Student Portal
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Access seminars, research papers, and study materials curated by Dr. Hetal Pandav
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-rose-400 rounded-full"></div>
              <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
              <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-orange-400 to-rose-400 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-rose-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Seminars Section */}
        {seminars.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-rose-100 rounded-xl">
                  <BookOpen className="text-rose-600" size={28} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Upcoming Seminars</h2>
              </div>
              <p className="text-gray-600">Join our educational sessions and workshops</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seminars.map((seminar, index) => (
                <div
                  key={seminar.id}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-rose-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {seminar.image_url && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={seminar.image_url}
                        alt={seminar.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="text-rose-600" size={28} />
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {seminar.date && (
                      <div className="flex items-center gap-2 text-rose-600 text-sm font-bold mb-4">
                        <div className="p-2 bg-rose-50 rounded-lg">
                          <Calendar size={16} />
                        </div>
                        <span>
                          {new Date(seminar.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300 leading-tight">
                      {seminar.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {seminar.description}
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider">
                        <Award size={18} />
                        <span>Seminar</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-rose-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research Papers Section */}
        {papers.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <FileText className="text-blue-600" size={28} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Research Papers</h2>
              </div>
              <p className="text-gray-600">Published academic work and studies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {papers.map((paper, index) => (
                <div
                  key={paper.id}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    {paper.published_date && (
                      <div className="flex items-center gap-2 text-blue-600 text-sm font-bold mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <Calendar size={16} />
                        </div>
                        <span>
                          {new Date(paper.published_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long'
                          })}
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {paper.title}
                    </h3>

                    {paper.author && (
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                        <User size={16} />
                        <span>By {paper.author}</span>
                      </div>
                    )}

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {paper.description}
                    </p>

                    <a
                      href={paper.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 w-full justify-center group-hover:scale-105"
                    >
                      <Eye size={20} />
                      View PDF
                    </a>
                  </div>

                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Study Materials Section */}
        {materials.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <GraduationCap className="text-green-600" size={28} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Study Materials</h2>
              </div>
              <p className="text-gray-600">Essential learning resources and guides</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materials.map((material, index) => (
                <div
                  key={material.id}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-green-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <BookMarked className="text-green-600" size={24} />
                      </div>
                      {material.category && (
                        <span className="px-4 py-2 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                          {material.category}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                      {material.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {material.description}
                    </p>

                    <a
                      href={material.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-all group-hover:gap-3"
                    >
                      <Eye size={20} />
                      View Material
                      <span className="text-xl">→</span>
                    </a>

                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-wider">
                        <BookMarked size={18} />
                        <span>Study Resource</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default StudentPortal;