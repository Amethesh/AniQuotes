import { createSlice } from "@reduxjs/toolkit";
import { Quote } from "../types/interface";

interface QuoteState {
	value: Quote;
	isLoading: boolean;
	error: string | null | number;
}

const initialState: QuoteState = {
	value: {
		anime: "Bleach",
		character: "Aizen Sousuke",
		quote:
			"Any betrayal you can see is trivial, what is truly frightening and much more lethal, is the betrayal you cannot see."
	},
	isLoading: false,
	error: null
};

export const quoteSlice = createSlice({
	name: "quote",
	initialState,
	reducers: {
		getQuoteLoading: (state) => {
			state.isLoading = true;
			state.error = null;
		},
		getQuoteSuccess: (state, action) => {
			state.value = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		getQuoteError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const { getQuoteSuccess, getQuoteLoading, getQuoteError } = quoteSlice.actions;
export const RandomQuote = (state: { quote: QuoteState }) => state.quote.value;
export default quoteSlice.reducer;
