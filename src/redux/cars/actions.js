import {createAction} from "redux-actions";

export const GET_CAR_REQUEST = "GET_CAR_REQUEST";
export const CAR_LIST_SUCCESS = "CAR_LIST_SUCCESS";
export const CAR_LIST_FAILED = "CAR_LIST_FAILED";
export const getCars = createAction(GET_CAR_REQUEST);
