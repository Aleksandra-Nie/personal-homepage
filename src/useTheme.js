import { useEffect, useState } from 'react';
import { getDarkModeFromLocalStorage } from "./features/toggleTheme/themeLocalStorage";

export const useTheme = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const fetchTheme = async () => {
            const storedMode = await getDarkModeFromLocalStorage();
            setDarkMode(storedMode);
        };

        fetchTheme();
    }, []);

    return darkMode;
};