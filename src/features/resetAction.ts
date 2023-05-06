import { createAction } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";

export const resetState = createAction("RESET_STATE");

const initialState = {
	quote: [],
	character: null,
	isLoading: false,
	error: null,
	multipleData: []
};

const myReducer = createReducer(initialState, (builder) => {
	builder.addCase(resetState, (state, action) => {
		return initialState;
	});
});

export default myReducer;
