import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Download, Calendar, User, GraduationCap } from 'lucide-react';
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
      <div className="min-h-screen bg-neutral flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  if (!hasContent) {
    return (
      <div className="min-h-screen bg-neutral flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center shadow-inner">
              <BookOpen size={48} className="text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Coming Soon
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            A dedicated learning space for homeopathy students.
            Stay tuned for seminars, case studies, and mentorship programs.
          </p>
          <div className="inline-block px-6 py-2 bg-white rounded-full border border-gray-200 text-sm font-semibold text-gray-500 shadow-sm">
            Seminars Info and Case Studies Processes Coming Soon
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
              Student Resources
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Student Portal
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access seminars, research papers, and study materials curated by Dr. Hetal Pandav
          </p>
        </div>

        {/* Seminars Section */}
        {seminars.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-rose-100 rounded-xl">
                <BookOpen className="text-rose-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Seminars</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seminars.map((seminar) => (
                <div key={seminar.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {seminar.image_url && (
                    <img
                      src={seminar.image_url}
                      alt={seminar.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-rose-600 text-sm font-semibold mb-3">
                      <Calendar size={16} />
                      {new Date(seminar.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{seminar.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{seminar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research Papers Section */}
        {papers.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-xl">
                <FileText className="text-blue-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Research Papers</h2>
            </div>
            <div className="space-y-4">
              {papers.map((paper) => (
                <div key={paper.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                      {paper.author && (
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                          <User size={16} />
                          <span>By {paper.author}</span>
                          {paper.published_date && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{new Date(paper.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                            </>
                          )}
                        </div>
                      )}
                      <p className="text-gray-600 text-sm leading-relaxed">{paper.description}</p>
                    </div>
                    <a
                      href={paper.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                    >
                      <Download size={20} />
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Study Materials Section */}
        {materials.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-100 rounded-xl">
                <GraduationCap className="text-green-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Study Materials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materials.map((material) => (
                <div key={material.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {material.category && (
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">
                          {material.category}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{material.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{material.description}</p>
                      <a
                        href={material.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                      >
                        <Download size={18} />
                        Download Material
                      </a>
                    </div>
                  </div>
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