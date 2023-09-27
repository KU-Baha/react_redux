import {call, put, takeEvery} from 'redux-saga/effects';
import {addManyUsersAction, FETCH_USERS, fetchUsersAction} from "../store/userReducer";


const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(addManyUsersAction(json))
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker);
}