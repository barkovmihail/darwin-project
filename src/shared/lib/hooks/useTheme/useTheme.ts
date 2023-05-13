import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newItem: Theme;
        switch (theme) {
            case Theme.DARK:
                newItem = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newItem = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newItem = Theme.DARK;
                break;
            default:
                newItem = Theme.LIGHT;
        }

        setTheme?.(newItem);
        document.body.className = newItem;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newItem);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
