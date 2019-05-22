import {all, fork, put, takeEvery, call} from "redux-saga/effects";
import {createAction} from "redux-actions";
import * as actions from "./actions";
import {getCarsList} from '../../networkservices/cars'

export function * getCars(params) {
    try {
        const data = yield call(getCarsList, {
            skip: params.payload.skip,
            take: params.payload.take
        });

        const carList = {
            carList: data.data.vehicles.edges,
            pageInfo: {
                hasNextPage: data.data.vehicles.pageInfo.hasNextPage,
                totalCount: data.data.vehicles.totalCount
            },
            resetPage: params.payload.resetPage
        }
        yield put(createAction(actions.CAR_LIST_SUCCESS)(carList));
    } catch (error) {
        yield put(createAction(actions.CAR_LIST_FAILED)(error));
    }
}

const spin = (actionType, saga) => function * () {
    yield takeEvery(actionType, saga);
};

export default function * rootSaga() {
    yield all([fork(spin(actions.GET_CAR_REQUEST, getCars))]);
}