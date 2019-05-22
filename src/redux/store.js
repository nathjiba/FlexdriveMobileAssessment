import {createStore, applyMiddleware, combineReducers} from "redux";
import {NavigationActions} from "react-navigation";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./saga";
import RootNavigation from "../navigation";

const INITIAL_STATE = RootNavigation
    .router
    .getStateForAction(NavigationActions.init());
const navigation = (state = INITIAL_STATE, action) => {
    const newState = RootNavigation
        .router
        .getStateForAction(action, state);
    return newState || state;
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    ...reducers,
    nav: navigation
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
