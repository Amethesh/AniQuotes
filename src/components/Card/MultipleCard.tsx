import { useDispatch } from "react-redux";
import { Quote, Character, InputProps } from "../../types/interface";
import { getQuoteSuccess, getQuoteLoading, getQuoteError } from "../../features/quoteSlice";
import { GET_CHARACTER_INFO } from "../../GraphQL/Queries";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import {
	getCharacterSuccess,
	getCharacterLoading,
	getCharacterError,
	getMultipleCharacter
} from "../../features/characterSlice";

const URL = "https://animechan.vercel.app/api";

const ApiRequest = ({ quoteInput }: InputProps) => {
	const dispatch = useDispatch();

	// const [multipleData, setMultipleData] = useState<string [] | null>(null);

	const [getCharacterInfo, {}] = useLazyQuery<Character>(GET_CHARACTER_INFO, {
		onCompleted(data) {
			dispatch(getCharacterSuccess(data));
		},
		onError(error) {
			dispatch(getCharacterError(error));
		}
	});

	const [getMultiCharacterInfo, {}] = useLazyQuery<Character>(GET_CHARACTER_INFO, {
		onCompleted(data) {
			dispatch(getMultipleCharacter(data));
		},
		onError(error) {
			dispatch(getCharacterError(error));
		}
	});

	const handleCharacterInfo = (characterName: string) => {
		dispatch(getQuoteLoading());
		dispatch(getCharacterLoading());
		console.log("getting character info");
		getCharacterInfo({ variables: { characterName } });
		// dispatch(getCharacterSuccess(info));
	};

	const handleMultipleCharacter = (characterName: string) => {
		dispatch(getCharacterLoading());
		console.log(`getting multiple character info: ${characterName}`);
		getMultiCharacterInfo({ variables: { characterName } });
		// dispatch(getMultipleCharacter(info));
	};

	//! Multiple Quote
	const handleMultipleCharacterInfo = (quotes: Quote[]) => {
		const promises = quotes.map((quote) => {
			return new Promise((resolve, reject) => {
				getMultiCharacterInfo({ variables: { characterName: quote.character } })
					.then((data) => {
						resolve(data);
					})
					.catch((error) => {
						reject(error);
					});
			});
		});

		Promise.all(promises)
			.then((characterData) => {
				const characters = characterData.map((data) => data.Character);
				dispatch(getMultipleCharacter(characters));
			})
			.catch((error) => {
				console.log("Error handling character info:", error);
			});
	};

	const fetchMultipleQuote = (request: string) => {
		console.log(`Sending multiple request: ${request}`);

		fetch(`${URL}${request}`)
			.then((response) => response.json())
			.then((data: Quote[]) => {
				console.log(data);
				dispatch(getQuoteSuccess(data));
				handleMultipleCharacterInfo(data);
			})
			.catch((error) => {
				console.log(error);
				dispatch(getQuoteError(error));
			});
	};

	const handle10Random = () => {
		fetchMultipleQuote("/quotes");
	};
	const handle10Anime = () => {
		fetchMultipleQuote("/quotes/anime?title=");
	};
	const handle10Character = () => {
		fetchMultipleQuote("/quotes/character?name=");
	};

	return (
		<div className="UsingAnime">
			<button onClick={handle10Random}>Get 10 Random Quote</button>
			<button onClick={handle10Anime} disabled={quoteInput === ""}>
				Get 10 Anime Quote
			</button>
			<button onClick={handle10Character} disabled={quoteInput === ""}>
				Get 10 Character Quote
			</button>
		</div>
	);
};

export default ApiRequest;
