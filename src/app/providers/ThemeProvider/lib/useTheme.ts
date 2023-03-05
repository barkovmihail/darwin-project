import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newItem = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newItem);
        document.body.className = newItem;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newItem);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
