import React, { useState, useEffect } from 'react';
import { Lock, BookOpen, FileText, GraduationCap, Plus, Trash2, Edit, Upload, X } from 'lucide-react';
import { db, storage } from '../lib/supabase';

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

const AdminPanel: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState<'seminars' | 'papers' | 'materials'>('seminars');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Data states
    const [seminars, setSeminars] = useState<Seminar[]>([]);
    const [papers, setPapers] = useState<ResearchPaper[]>([]);
    const [materials, setMaterials] = useState<StudyMaterial[]>([]);

    // Form states
    const [showAddForm, setShowAddForm] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Check if already authenticated
    useEffect(() => {
        const auth = localStorage.getItem('admin_authenticated');
        if (auth === 'true') {
            setIsAuthenticated(true);
            loadData();
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

        if (password === adminPassword) {
            setIsAuthenticated(true);
            localStorage.setItem('admin_authenticated', 'true');
            loadData();
            setError('');
        } else {
            setError('Incorrect password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('admin_authenticated');
        setPassword('');
    };

    const loadData = async () => {
        try {
            const [seminarsData, papersData, materialsData] = await Promise.all([
                db.seminars.getAll(),
                db.researchPapers.getAll(),
                db.studyMaterials.getAll()
            ]);
            setSeminars(seminarsData || []);
            setPapers(papersData || []);
            setMaterials(materialsData || []);
        } catch (err: any) {
            setError('Failed to load data: ' + err.message);
        }
    };

    const handleFileUpload = async (file: File, bucket: string): Promise<string> => {
        const fileName = `${Date.now()}-${file.name}`;
        const filePath = `${fileName}`;

        try {
            const publicUrl = await storage.uploadFile(bucket, filePath, file);
            return publicUrl;
        } catch (err: any) {
            throw new Error('File upload failed: ' + err.message);
        }
    };

    const handleAddSeminar = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const imageFile = formData.get('image') as File;

        try {
            let imageUrl = '';
            if (imageFile && imageFile.size > 0) {
                imageUrl = await handleFileUpload(imageFile, 'seminar-images');
            }

            await db.seminars.create({
                title: formData.get('title'),
                date: formData.get('date'),
                description: formData.get('description'),
                image_url: imageUrl
            });

            setSuccess('Seminar added successfully!');
            setShowAddForm(false);
            loadData();
            e.currentTarget.reset();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddPaper = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const pdfFile = formData.get('pdf') as File;

        try {
            if (!pdfFile || pdfFile.size === 0) {
                throw new Error('Please select a PDF file');
            }

            const pdfUrl = await handleFileUpload(pdfFile, 'research-papers');

            await db.researchPapers.create({
                title: formData.get('title'),
                author: formData.get('author'),
                description: formData.get('description'),
                pdf_url: pdfUrl,
                published_date: formData.get('published_date')
            });

            setSuccess('Research paper added successfully!');
            setShowAddForm(false);
            loadData();
            e.currentTarget.reset();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddMaterial = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const pdfFile = formData.get('pdf') as File;

        try {
            if (!pdfFile || pdfFile.size === 0) {
                throw new Error('Please select a PDF file');
            }

            const pdfUrl = await handleFileUpload(pdfFile, 'study-materials');

            await db.studyMaterials.create({
                title: formData.get('title'),
                category: formData.get('category'),
                description: formData.get('description'),
                pdf_url: pdfUrl
            });

            setSuccess('Study material added successfully!');
            setShowAddForm(false);
            loadData();
            e.currentTarget.reset();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (type: 'seminars' | 'papers' | 'materials', id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        setLoading(true);
        try {
            if (type === 'seminars') {
                await db.seminars.delete(id);
            } else if (type === 'papers') {
                await db.researchPapers.delete(id);
            } else {
                await db.studyMaterials.delete(id);
            }
            setSuccess('Item deleted successfully!');
            loadData();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Login Screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-rose-900 to-gray-900 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="text-rose-600" size={32} />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
                        <p className="text-gray-600">Enter password to access</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter admin password"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                                required
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Admin Dashboard
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Student Portal Admin</h1>
                        <p className="text-gray-600 mt-1">Manage seminars, research papers, and study materials</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
                    >
                        Logout
                    </button>
                </div>

                {/* Success/Error Messages */}
                {success && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 flex justify-between items-center">
                        <span>{success}</span>
                        <button onClick={() => setSuccess('')}><X size={20} /></button>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 flex justify-between items-center">
                        <span>{error}</span>
                        <button onClick={() => setError('')}><X size={20} /></button>
                    </div>
                )}

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm p-2 mb-6 flex gap-2">
                    <button
                        onClick={() => { setActiveTab('seminars'); setShowAddForm(false); }}
                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${activeTab === 'seminars' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <BookOpen size={20} />
                        Seminars ({seminars.length})
                    </button>
                    <button
                        onClick={() => { setActiveTab('papers'); setShowAddForm(false); }}
                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${activeTab === 'papers' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <FileText size={20} />
                        Research Papers ({papers.length})
                    </button>
                    <button
                        onClick={() => { setActiveTab('materials'); setShowAddForm(false); }}
                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${activeTab === 'materials' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <GraduationCap size={20} />
                        Study Materials ({materials.length})
                    </button>
                </div>

                {/* Add Button */}
                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="mb-6 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
                >
                    <Plus size={20} />
                    Add New {activeTab === 'seminars' ? 'Seminar' : activeTab === 'papers' ? 'Research Paper' : 'Study Material'}
                </button>

                {/* Add Forms */}
                {showAddForm && (
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                        <h3 className="text-xl font-bold mb-4">
                            Add New {activeTab === 'seminars' ? 'Seminar' : activeTab === 'papers' ? 'Research Paper' : 'Study Material'}
                        </h3>

                        {activeTab === 'seminars' && (
                            <form onSubmit={handleAddSeminar} className="space-y-4">
                                <input name="title" placeholder="Seminar Title" className="w-full px-4 py-3 border rounded-lg" required />
                                <input name="date" type="date" className="w-full px-4 py-3 border rounded-lg" required />
                                <textarea name="description" placeholder="Description" className="w-full px-4 py-3 border rounded-lg" rows={3} />
                                <input name="image" type="file" accept="image/*" className="w-full px-4 py-3 border rounded-lg" />
                                <button type="submit" disabled={loading} className="bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 disabled:opacity-50">
                                    {loading ? 'Adding...' : 'Add Seminar'}
                                </button>
                            </form>
                        )}

                        {activeTab === 'papers' && (
                            <form onSubmit={handleAddPaper} className="space-y-4">
                                <input name="title" placeholder="Paper Title" className="w-full px-4 py-3 border rounded-lg" required />
                                <input name="author" placeholder="Author Name" className="w-full px-4 py-3 border rounded-lg" />
                                <textarea name="description" placeholder="Description" className="w-full px-4 py-3 border rounded-lg" rows={3} />
                                <input name="published_date" type="date" className="w-full px-4 py-3 border rounded-lg" />
                                <input name="pdf" type="file" accept=".pdf" className="w-full px-4 py-3 border rounded-lg" required />
                                <button type="submit" disabled={loading} className="bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 disabled:opacity-50">
                                    {loading ? 'Uploading...' : 'Add Paper'}
                                </button>
                            </form>
                        )}

                        {activeTab === 'materials' && (
                            <form onSubmit={handleAddMaterial} className="space-y-4">
                                <input name="title" placeholder="Material Title" className="w-full px-4 py-3 border rounded-lg" required />
                                <input name="category" placeholder="Category (e.g., Materia Medica, Organon)" className="w-full px-4 py-3 border rounded-lg" />
                                <textarea name="description" placeholder="Description" className="w-full px-4 py-3 border rounded-lg" rows={3} />
                                <input name="pdf" type="file" accept=".pdf" className="w-full px-4 py-3 border rounded-lg" required />
                                <button type="submit" disabled={loading} className="bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 disabled:opacity-50">
                                    {loading ? 'Uploading...' : 'Add Material'}
                                </button>
                            </form>
                        )}
                    </div>
                )}

                {/* Content List */}
                <div className="space-y-4">
                    {activeTab === 'seminars' && seminars.map((seminar) => (
                        <div key={seminar.id} className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900">{seminar.title}</h3>
                                <p className="text-gray-600 mt-1">{seminar.date}</p>
                                <p className="text-gray-700 mt-2">{seminar.description}</p>
                                {seminar.image_url && <img src={seminar.image_url} alt={seminar.title} className="mt-4 w-48 h-32 object-cover rounded-lg" />}
                            </div>
                            <button
                                onClick={() => handleDelete('seminars', seminar.id)}
                                className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}

                    {activeTab === 'papers' && papers.map((paper) => (
                        <div key={paper.id} className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900">{paper.title}</h3>
                                <p className="text-gray-600 mt-1">By {paper.author}</p>
                                <p className="text-gray-700 mt-2">{paper.description}</p>
                                <a href={paper.pdf_url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-rose-600 hover:underline">
                                    View PDF →
                                </a>
                            </div>
                            <button
                                onClick={() => handleDelete('papers', paper.id)}
                                className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}

                    {activeTab === 'materials' && materials.map((material) => (
                        <div key={material.id} className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900">{material.title}</h3>
                                <p className="text-gray-600 mt-1">{material.category}</p>
                                <p className="text-gray-700 mt-2">{material.description}</p>
                                <a href={material.pdf_url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-rose-600 hover:underline">
                                    Download PDF →
                                </a>
                            </div>
                            <button
                                onClick={() => handleDelete('materials', material.id)}
                                className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
