import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
    toggleTheme: (saveAction: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction: (theme: Theme) => void) => {
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

        saveAction(newItem);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
