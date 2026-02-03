import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { themes } from './design-tokens';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
  themeOverrides?: Partial<Record<ThemeMode, Record<string, string>>>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultMode = 'light',
  themeOverrides = {}
}) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  // Apply CSS Variables to the root element whenever mode changes
  useEffect(() => {
    const root = document.documentElement;
    const defaultThemeValues = themes[mode];
    const overrideValues = themeOverrides[mode] || {};
    
    const finalThemeValues = { ...defaultThemeValues, ...overrideValues };

    Object.entries(finalThemeValues).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    // Also toggle a class for Tailwind 'dark:' prefix support if needed
    // although our system relies on CSS variables, adding the class is good practice
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
