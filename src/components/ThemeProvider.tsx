import { createContext, FC, useState } from 'react';

interface ThemeContextValue {
    dark: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
    dark: false,
    toggleTheme: () => {},
});

const ThemeProvider: FC = ({ children }) => {
    const [dark, setDark] = useState(true);

    const toggleTheme = () => {
        setDark(!dark);
    };

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

