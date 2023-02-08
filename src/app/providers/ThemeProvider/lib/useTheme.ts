import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext, useState} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newItem = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newItem);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newItem )
    };

    return {theme, toggleTheme}
}