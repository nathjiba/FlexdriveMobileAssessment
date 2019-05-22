import {handleActions} from "redux-actions";
import * as actions from "./actions";

const initialState = {
    carList: [],
    pageInfo: {},
    carListFailed: ''
};

function appendListItem(oldList = [], payload) {
    var newArray = []
    if (payload.resetPage) {
        newArray = payload.carList
    } else {
        newArray = oldList.concat(payload.carList)
    }
    return newArray
}

const reducer = handleActions({
    [actions.CAR_LIST_SUCCESS]: (state, action) => {
        return ({
            carList: appendListItem(state.carList, action.payload),
            pageInfo: action.payload.pageInfo
        })
    },
    [actions.CAR_LIST_FAILED]: (state, action) => ({
        ...state,
        carListFailed: action.payload
    })
}, initialState);

export default reducer;