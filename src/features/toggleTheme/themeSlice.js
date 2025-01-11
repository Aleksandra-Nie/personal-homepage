import { createSlice } from "@reduxjs/toolkit";
import { getDarkModeFromLocalStorage, saveDarkModeInLocalStorage } from "./themeLocalStorage";

const initialState = {
    darkMode: getDarkModeFromLocalStorage(),
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.darkMode = !state.darkMode;
            saveDarkModeInLocalStorage(state.darkMode);
        },
    },
});

export const { toggleMode } = themeSlice.actions;

export const selectDarkMode = (state) => state.theme.darkMode;

export default themeSlice.reducer;