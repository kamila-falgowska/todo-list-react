import { takeEvery, call, put, takeLatest, select, delay } from "redux-saga/effects";
import {
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} from "./tasksSlice";

import { selectTasks } from "./selectors";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "../../tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export default function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}
