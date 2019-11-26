import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import { put, takeLatest } from "redux-saga/effects";

// Actiion Types
export const ACTION_TYPES = {
	ButtonClick: "[TEST] Btn Click TEST",
	ReqButtonClick: "[TEST] Req Saga Event Btn Click TEST"
};

// Initial State
const initialAuthState = {
  user: undefined,
  clicks: 0 //Temp
};

// Reducer
const reducer = (state = initialAuthState, action) => {
	switch (action.type) {
		// Temp
		case ACTION_TYPES.ButtonClick:
			return {
				...state,
				clicks: 1+state.clicks
			}
		default:
			return state;
	}
}
// Persist Config
const persistConfig = {
	storage: AsyncStorage,
	key: "auth"
}
// Persist Reducer
export const persistedReducer = persistReducer(persistConfig, reducer);

// Actions
export const ACTIONS = {
	ClickBtn: () => ({type:ACTION_TYPES.ButtonClick, value:''}),
	RequestButtonClick: (value='') => ({type: ACTION_TYPES.ReqButtonClick, value})
};

// Saga Generator
export function* saga() {
	yield takeLatest(ACTION_TYPES.ReqButtonClick, function* testSaga({value}){
		console.log('TEST SAGA:', value)
		yield put(ACTIONS.ClickBtn())
	})
}
