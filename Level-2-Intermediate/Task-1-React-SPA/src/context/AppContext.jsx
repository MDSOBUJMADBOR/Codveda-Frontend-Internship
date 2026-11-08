import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('novasphere-theme') || 'dark';
  });

  // Global Inquiries / State preserved across pages
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: 'Sarah Connor',
      email: 'sarah@skynet-defense.com',
      service: 'Cloud Migration',
      date: '2026-11-06'
    }
  ]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('novasphere-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const addInquiry = (inquiry) => {
    const newEntry = {
      id: Date.now(),
      ...inquiry,
      date: new Date().toISOString().split('T')[0]
    };
    setInquiries(prev => [newEntry, ...prev]);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, inquiries, addInquiry }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

