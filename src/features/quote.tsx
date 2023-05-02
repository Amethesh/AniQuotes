import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
	name: "quote",
	initialState: {
		value: {
			anime: "sdgsfdgs",
			character: "sdhgsfdhsdf",
			image: "",
			quote: ""
		}
	},
	reducers: {
		getRandomQuote: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { getRandomQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
