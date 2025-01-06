import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./getRepositories";
import { fetchProjects, fetchProjectsError, fetchProjectsSuccess } from "./portfolioSlice";

function* fetchProjectsHandler() {
    try {
        yield delay(2000);
        const project = yield call(getRepositories);
        yield put(fetchProjectsSuccess(project));
    } catch (error) {
        yield put(fetchProjectsError(error));
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchProjects.type, fetchProjectsHandler)
}