import * as action from '../../src/redux/cars/actions'

describe('cars action', () => {
    it('should give proper action', () => {
        const expectedObject = {
            type: action.GET_CAR_REQUEST,
            payload: {
                nextPage: false,
                resetPage: true,
                skip: 10,
                take: 10

            }
        }
        const actionObject = action.getCars({nextPage: false, resetPage: true, skip: 10, take: 10})
        expect(expectedObject).toEqual(actionObject)
    });
});