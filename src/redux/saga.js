import {all} from 'redux-saga/effects';
import CarsSaga from './cars/saga';

export default function * rootSaga() {
    yield all([CarsSaga()]);
}
