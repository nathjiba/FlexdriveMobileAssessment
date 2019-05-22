import reducer from '../../src/redux/cars/reducers'
import * as action from '../../src/redux/cars/actions'
import MockData from '../../MockData'

const initialState = {
    carList: [],
    pageInfo: {},
    carListFailed: ''
};

describe('cars reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle Car List Success', () => {
        const payloadObject = {
            carList: MockData.CAR_LIST.data.vehicles.edges,
            pageInfo: {
                hasNextPage: MockData.CAR_LIST.data.vehicles.pageInfo.hasNextPage,
                totalCount: MockData.CAR_LIST.data.vehicles.totalCount
            },
            resetPage: false
        }
        expect(reducer({}, {
            type: action.CAR_LIST_SUCCESS,
            payload: payloadObject
        })).toEqual({carList: payloadObject.carList, pageInfo: payloadObject.pageInfo})
    })

    it('should handle Car List Failed', () => {
        const payloadObject = "No Data Found"
        expect(reducer({}, {
            type: action.CAR_LIST_FAILED,
            payload: payloadObject
        })).toEqual({carListFailed: payloadObject})
    })
})