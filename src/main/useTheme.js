import { useEffect, useState } from 'react';
import { getDarkModeFromLocalStorage } from "../features/toggleTheme/themeLocalStorage";

export const useTheme = () => {
    const [darkMode, setDarkMode] = useState(null);

    useEffect(() => {
        const storedMode = getDarkModeFromLocalStorage();
        setDarkMode(storedMode);
    }, []);

    return darkMode;
};