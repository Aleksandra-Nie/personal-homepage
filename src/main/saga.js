
import { all } from "redux-saga/effects";
import { portfolioSaga } from "../features/Portfolio/Projects/portfolioSaga";

export default function* saga() {
    yield all([
        portfolioSaga(),
    ]);
}
