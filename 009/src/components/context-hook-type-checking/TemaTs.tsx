import React, { useState } from 'react';

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

// YENİ: TypeScript güvenli hook
function useTheme(): ThemeContextType {
    const context = React.useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme sadece ThemeProvider içinde kullanılabilir!');
    }

    return context; // TypeScript biliyor: kesinlikle ThemeContextType tipinde
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<string>('light');

    const value: ThemeContextType = {
        theme: theme,
        setTheme: setTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

// YENİ: Hook'u kullanan bileşen
function ThemeButton() {
    const { theme, setTheme } = useTheme(); // TypeScript otomatik tip bilir

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                padding: '10px'
            }}
        >
            Tema: {theme} (Değiştir)
        </button>
    );
}

function App() {
    return (
        <ThemeProvider>
            <div style={{ padding: '20px' }}>
                <h1>TypeScript Context</h1>
                <ThemeButton />
            </div>
        </ThemeProvider>
    );
}

export default App;
