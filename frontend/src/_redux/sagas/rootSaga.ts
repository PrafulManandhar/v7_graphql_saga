import { all, fork } from "redux-saga/effects";
import authSaga from './authSaga/authSaga';
import loginSaga from './loginSaga/loginSaga'

export function* rootSaga() {
  yield all([fork(authSaga), fork(loginSaga)]);
}
