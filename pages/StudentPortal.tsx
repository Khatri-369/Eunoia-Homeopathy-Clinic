import React from 'react';
import { BookOpen } from 'lucide-react';

const StudentPortal: React.FC = () => {
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
};

export default StudentPortal;