import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface MoodboardItem {
    id: string;
    url: string;
    title: string;
    category: string;
}

interface MoodboardContextType {
    items: MoodboardItem[];
    addItem: (item: MoodboardItem) => void;
    removeItem: (id: string) => void;
    clearMoodboard: () => void;
    isInMoodboard: (id: string) => boolean;
}

const MoodboardContext = createContext<MoodboardContextType | undefined>(undefined);

const STORAGE_KEY = 'filali_moodboard';

export const MoodboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<MoodboardItem[]>(() => {
        // Initialize from localStorage
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    // Persist to localStorage whenever items change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addItem = (item: MoodboardItem) => {
        setItems(prev => {
            // Prevent duplicates
            if (prev.some(i => i.id === item.id)) return prev;
            return [...prev, item];
        });
    };

    const removeItem = (id: string) => {
        setItems(prev => prev.filter(i => i.id !== id));
    };

    const clearMoodboard = () => {
        setItems([]);
    };

    const isInMoodboard = (id: string) => {
        return items.some(i => i.id === id);
    };

    return (
        <MoodboardContext.Provider value={{ items, addItem, removeItem, clearMoodboard, isInMoodboard }}>
            {children}
        </MoodboardContext.Provider>
    );
};

export const useMoodboard = () => {
    const context = useContext(MoodboardContext);
    if (!context) {
        throw new Error('useMoodboard must be used within MoodboardProvider');
    }
    return context;
};
