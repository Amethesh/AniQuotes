import { createSlice } from "@reduxjs/toolkit";
import { Quote } from "../types/interface";

interface QuoteState {
	value: Quote;
}

const initialState: QuoteState = {
	value: {
		anime: "Bleach",
		character: "Aizen Sousuke",
		image:
			"https://preview.redd.it/how-would-you-rank-the-espada-and-aizen-based-on-their-v0-hfd71ol8p7t81.jpg?width=736&format=pjpg&auto=webp&s=55d2c4160118e47dc5641e4e13382794d396df9b",
		quote: "Any betrayal you can see is trivial, what is truly frightening and much more lethal, is the betrayal you cannot see."
	}
};

export const quoteSlice = createSlice({
	name: "quote",
	initialState,
	reducers: {
		getRandomQuote: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { getRandomQuote } = quoteSlice.actions;
export const RandomQuote = (state: { quote: QuoteState }) => state.quote.value;
export default quoteSlice.reducer;
