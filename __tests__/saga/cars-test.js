import * as action from '../../src/redux/cars/actions'
import * as api from '../../src/networkservices/cars'
import {getCars} from '../../src/redux/cars/saga'
import MockData from '../../MockData'
// we can do saga testing without "redux-saga-test-plan" lib, but its really
// good libarary for end to end saga testing. We can test exact effects and
// their ordering or just test your saga put's a specific action at some point,
import {expectSaga} from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {throwError} from 'redux-saga-test-plan/providers';

import {call} from 'redux-saga/effects';

describe('cars saga', () => {
    it('should test saga', async() => {
        const carList = {
            carList: MockData.CAR_LIST.data.vehicles.edges,
            pageInfo: {
                hasNextPage: MockData.CAR_LIST.data.vehicles.pageInfo.hasNextPage,
                totalCount: MockData.CAR_LIST.data.vehicles.totalCount
            },
            resetPage: false
        }
        return expectSaga(getCars, {
            payload: {
                nextPage: true,
                resetPage: false,
                skip: 10,
                take: 10
            }
        }).provide([
            [
                call(api.getCarsList, {
                    skip: 10,
                    take: 10
                }),
                    MockData.CAR_LIST
                ]
        ])
            .put({type: action.CAR_LIST_SUCCESS, payload: carList})
            .dispatch({
                type: action.GET_CAR_REQUEST,
                payload: {
                    nextPage: true,
                    resetPage: false,
                    skip: 10,
                    take: 10
                }
            })
            .run();
    });

    it('handles errors', () => {
        const error = new Error('error');
        return expectSaga(getCars, {
            payload: {
                nextPage: true,
                resetPage: false,
                skip: 10,
                take: 10
            }
        }).provide([
            [
                matchers
                    .call
                    .fn(api.getCarsList),
                    throwError(error)
                ]
        ])
            .put({type: action.CAR_LIST_FAILED, error: true, payload: error})
            .dispatch({
                type: action.GET_CAR_REQUEST,
                payload: {
                    nextPage: true,
                    resetPage: false,
                    skip: 10,
                    take: 10
                }
            })
            .run();
    });

});
