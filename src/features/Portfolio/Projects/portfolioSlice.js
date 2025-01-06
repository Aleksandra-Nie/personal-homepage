import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        projects: []
    },
    reducers: {
        fetchProjects: (state) => {
            state.loading = true;
        },
        fetchProjectsSuccess: (state, { payload: projects }) => {
            state.loading = false;
            state.projects = projects;
        },
        fetchProjectsError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchProjects,
    fetchProjectsSuccess,
    fetchProjectsError
} = portfolioSlice.actions;

export const selectProjectsState = state => state.portfolio;

export default portfolioSlice.reducer;