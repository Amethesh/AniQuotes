import { createSlice } from "@reduxjs/toolkit";
import { Quote } from "../types/interface";

interface QuoteState {
	value: Quote;
	isLoading: boolean;
	error: string | null;
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
			state.value = action.payload;
		}
	}
});

export const { getQuote } = quoteSlice.actions;
export const RandomQuote = (state: { quote: QuoteState }) => state.quote.value;
export default quoteSlice.reducer;
