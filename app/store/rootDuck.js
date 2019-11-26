import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "./ducks/auth.duck";

export const rootReducer = combineReducers({
	// Custom
	auth: auth.persistedReducer,
});

export function* rootSaga() {
	yield all(
		[
			auth.saga(),
		]
	);
}
// TODO clear states on logout for all reducers

export const rootActions = {
	auth: auth.ACTIONS,
}
