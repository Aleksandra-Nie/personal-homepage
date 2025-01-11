const localStorageKey = "darkMode";

export const saveDarkModeInLocalStorage = (darkMode) => {
    localStorage.setItem(localStorageKey, JSON.stringify(darkMode));
};

export const getDarkModeFromLocalStorage = () => {
    const storedMode = localStorage.getItem(localStorageKey);
    return storedMode ? JSON.parse(storedMode) : false;
};