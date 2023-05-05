import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../types/interface";

interface CharacterState {
	value: Character;
	isLoading: boolean;
	error: string | null | number;
}

const initialState: CharacterState = {
	value: {
		Character: {
			name: {
				first: "Aizen",
				last: "Soukue",
				full: "Aizen",
				native: ""
			},
			image: {
				large: ""
			},
			description: ""
		}
	},
	isLoading: false,
	error: null
};

const characterSlice = createSlice({
	name: "character",
	initialState,
	reducers: {
		getCharacterLoading: (state) => {
			state.isLoading = true;
			state.error = null;
		},
		getCharacterSuccess: (state, action) => {
			state.value = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		getCharacterError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const { getCharacterLoading, getCharacterSuccess, getCharacterError } = characterSlice.actions;
export const CharacterDetails = (state: { character: CharacterState }) => state.character.value;
export default characterSlice.reducer;
