import { createSlice } from "@reduxjs/toolkit";
import { Quote, CharacterInfo } from "../types/interface";

interface QuoteState {
	value: CharacterInfo;
	error: string | null;
	isLoading: boolean;
}

const initialState: QuoteState = {
	value: {
		anime: "Bleach",
		character: "Aizen Sousuke",
		quote:
			"Any betrayal you can see is trivial, what is truly frightening and much more lethal, is the betrayal you cannot see.",
		Character: {
			name: {
				first: "Aizen",
				last: "",
				full: "",
				native: ""
			},
			image: {
				large:
					"https://preview.redd.it/how-would-you-rank-the-espada-and-aizen-based-on-their-v0-hfd71ol8p7t81.jpg?width=736&format=pjpg&auto=webp&s=55d2c4160118e47dc5641e4e13382794d396df9b"
			},
			description: ""
		}
	},
	error: null,
	isLoading: false
};

export const quoteSlice = createSlice({
	name: "quote",
	initialState,
	reducers: {
		getRandomQuote: (state, action) => {
			state.value = action.payload;
		},
		isLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		getError: (state, action) => {
			state.error = action.payload;
		}
	}
});

export const { getRandomQuote, isLoading, getError } = quoteSlice.actions;
export const RandomQuote = (state: { quote: QuoteState }) => state.quote.value;
export const LoadingStatus = (state: { quote: QuoteState }) => state.quote.isLoading;
export const ErrorStatus = (state: { quote: QuoteState }) => state.quote.error;
export default quoteSlice.reducer;
