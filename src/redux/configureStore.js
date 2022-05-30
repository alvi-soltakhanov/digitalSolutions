import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getUsers } from "./features/getUsers";

export const store = legacy_createStore(
    combineReducers({ getUsers }),
    composeWithDevTools(applyMiddleware(thunk))
);