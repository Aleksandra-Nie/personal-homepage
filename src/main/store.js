import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/toggleTheme/themeSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import portfolioReducer from "../features/Portfolio/Projects/portfolioSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;