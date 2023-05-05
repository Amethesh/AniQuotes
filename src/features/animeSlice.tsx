import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimeState {
	animeList: Anime[];
	isLoading: boolean;
	error: string | null;
}

const initialState: AnimeState = {
	animeList: [],
	isLoading: false,
	error: null
};

const animeSlice = createSlice({
	name: "anime",
	initialState,
	reducers: {
		getAnimeListRequest: (state) => {
			state.isLoading = true;
			state.error = null;
		},
		getAnimeListSuccess: (state, action: PayloadAction<Anime[]>) => {
			state.animeList = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		getAnimeListFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const { getAnimeListRequest, getAnimeListSuccess, getAnimeListFailure } = animeSlice.actions;

export default animeSlice.reducer;
