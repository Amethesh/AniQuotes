import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../types/interface";

interface CharacterState {
	value: Character[];
	isLoading: boolean;
	error: string | null | number;
}

const initialState: CharacterState = {
	value: [
		{
			Character: {
				name: {
					first: "Aizen",
					last: "Soukue",
					full: "Aizen",
					native: ""
				},
				image: {
					large: "https://s4.anilist.co/file/anilistcdn/character/large/b1086-qR9218BjZTC0.png"
				},
				description: ""
			}
		}
	],
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
			console.log("HERE");
			state.value = [action.payload];
			state.isLoading = false;
			state.error = null;
		},
		getMultipleCharacter: (state, action) => {
			// state.value = [...state.value, ...action.payload];
			// state.value.push(action.payload);
			// state.value.push(...action.payload);
			// console.log(state.value);
			// console.log(action.payload);
			state.value.push(action.payload);
			state.isLoading = false;
			state.error = null;
		},

		CharacterReset: (state) => {
			state.value = initialState.value;
			state.isLoading = false;
		},
		getCharacterError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const { getCharacterLoading, getCharacterSuccess, getMultipleCharacter, CharacterReset, getCharacterError } =
	characterSlice.actions;
export const CharacterDetails = (state: { character: CharacterState }) => state.character.value;
export default characterSlice.reducer;
