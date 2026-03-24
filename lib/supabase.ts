import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create client conditionally or with mock to avoid crashing the whole app when env vars are missing
export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createClient('https://placeholder.supabase.co', 'placeholder-key');

// Database helper functions
export const db = {
    // Seminars
    seminars: {
        getAll: async () => {
            const { data, error } = await supabase
                .from('seminars')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            return data;
        },
        create: async (seminar: any) => {
            const { data, error } = await supabase
                .from('seminars')
                .insert(seminar)
                .select()
                .single();
            if (error) throw error;
            return data;
        },
        update: async (id: string, updates: any) => {
            const { data, error } = await supabase
                .from('seminars')
                .update(updates)
                .eq('id', id)
                .select()
                .single();
            if (error) throw error;
            return data;
        },
        delete: async (id: string) => {
            const { error } = await supabase
                .from('seminars')
                .delete()
                .eq('id', id);
            if (error) throw error;
        }
    },

    // Research Papers
    researchPapers: {
        getAll: async () => {
            const { data, error } = await supabase
                .from('research_papers')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            return data;
        },
        create: async (paper: any) => {
            const { data, error } = await supabase
                .from('research_papers')
                .insert(paper)
                .select()
                .single();
            if (error) throw error;
            return data;
        },
        update: async (id: string, updates: any) => {
            const { data, error } = await supabase
                .from('research_papers')
                .update(updates)
                .eq('id', id)
                .select()
                .single();
            if (error) throw error;
            return data;
        },
        delete: async (id: string) => {
            const { error } = await supabase
                .from('research_papers')
                .delete()
                .eq('id', id);
            if (error) throw error;
        }
    },

    // Study Materials
    studyMaterials: {
        getAll: async () => {
            const { data, error } = await supabase
                .from('study_materials')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            return data;
        },
        create: async (material: any) => {
            const { data, error } = await supabase
                .from('study_materials')
                .insert(material)
                .select()
                .single();
            if (error) throw error;
            return data;
        },
        update: async (id: string, updates: any) => {
            const { data, error } = await supabase
                .from('study_materials')
                .update(updates)
                .eq('id', id)
                .select()
                .single();
            if (error) throw error;
            return data;
        },
        delete: async (id: string) => {
            const { error } = await supabase
                .from('study_materials')
                .delete()
                .eq('id', id);
            if (error) throw error;
        }
    },

    // Achievements
    achievements: {
        getAll: async () => {
            const { data, error } = await supabase
                .from('achievements')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            return data;
        },
        create: async (achievement: any) => {
            const { data, error } = await supabase
                .from('achievements')
                .insert(achievement)
                .select()
                .single();
            if (error) throw error;
            return data;
        },
        update: async (id: string, updates: any) => {
            const { data, error } = await supabase
                .from('achievements')
                .update(updates)
                .eq('id', id)
                .select()
                .single();
            if (error) throw error;
            return data;
        },
        delete: async (id: string) => {
            const { error } = await supabase
                .from('achievements')
                .delete()
                .eq('id', id);
            if (error) throw error;
        }
    }
};

// Storage helper functions
export const storage = {
    uploadFile: async (bucket: string, path: string, file: File) => {
        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(path, file, {
                cacheControl: '3600',
                upsert: false
            });
        if (error) throw error;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from(bucket)
            .getPublicUrl(path);

        return publicUrl;
    },

    deleteFile: async (bucket: string, path: string) => {
        const { error } = await supabase.storage
            .from(bucket)
            .remove([path]);
        if (error) throw error;
    }
};
