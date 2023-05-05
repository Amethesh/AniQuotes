import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Quote, InputProps, CharacterInfo, Character } from "../types/interface";
// import CharacterInfo from "./Anilist/CharacterInfo";
import { gql, useLazyQuery } from "@apollo/client";
// import { CharacterInfoProps } from "../../types/interface";
import { getError, getRandomQuote, isLoading } from "../features/quote";
// import { useState } from "react";

const URL = "https://animechan.vercel.app/api";

const GET_CHARACTER_INFO = gql`
	query Character($characterName: String) {
		Character(search: $characterName, sort: SEARCH_MATCH) {
			name {
				first
				last
				full
				native
			}
			image {
				large
			}
			description
		}
	}
`;

const ApiRequest = ({ quoteInput }: InputProps) => {
	const dispatch = useDispatch();
	// const [animeTitle, setAnimeTitle] = useState<string | null>(null);
	const [getCharacterInfo, { loading, error, data: Character }] = useLazyQuery<Character>(GET_CHARACTER_INFO);

	function CharacterInfo(characterName: string) {
		console.log(characterName);
		getCharacterInfo({ variables: { characterName } });
	}

	// useEffect(() => {
	// 	if (info) {
	// 		console.log(`Character Info: ${info}`);
	// 		dispatch(getRandomQuote(info));
	// 	}
	// 	if (loading !== undefined) {
	// 		dispatch(isLoading(loading));
	// 	}
	// 	if (error) {
	// 		dispatch(getError(error));
	// 	}
	// }, [info, loading, error, dispatch]);

	const fetchQuote = (request: string) => {
		console.log(`Sending Request: ${request}`);

		fetch(`${URL}${request}${quoteInput}`)
			.then((response) => response.json())
			.then((data: Quote) => {
				console.log(data);
				let newdata: CharacterInfo;
				return new Promise((resolve, reject) => {
					// CharacterInfo(data.character);
					getCharacterInfo({ variables: { characterName: data.character } })
						.then((response) => {
							newdata = { ...data, Character };
							dispatch(getRandomQuote(Character));
							dispatch(isLoading(loading));
							dispatch(getError(error));
							resolve();
						})
						.catch((error) => {
							console.log(error);
							reject(error);
						});
				});
			});
	};

	const handleAnime = () => {
		fetchQuote("/random/anime?title=");
	};
	const handleCharacter = () => {
		fetchQuote("/random/character?name=");
	};
	const handle10Anime = () => {
		fetchQuote("/quotes/anime?title=");
	};
	const handle10Character = () => {
		fetchQuote("/quotes/character?name=");
	};

	return (
		<div className="UsingAnime">
			{/* <input type="text" placeholder="10 Anime title" onChange={(e) => setAnimeTitle(e.target.value || null)} /> */}
			<button onClick={handleAnime} disabled={quoteInput === ""}>
				Get Anime Quote
			</button>
			<button onClick={handleCharacter} disabled={quoteInput === ""}>
				Get Character Quote
			</button>
			<button onClick={handle10Anime} disabled={quoteInput === ""}>
				Get 10 Anime Quotes
			</button>
			<button onClick={handle10Character} disabled={quoteInput === ""}>
				Get 10 Character Quotes
			</button>
		</div>
	);
};

export default ApiRequest;
