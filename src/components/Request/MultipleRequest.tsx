import { useDispatch } from "react-redux";
import { Quote, Character, InputProps } from "../../types/interface";
import { getQuoteSuccess, getQuoteLoading, getQuoteError } from "../../features/quoteSlice";
import { GET_CHARACTER_INFO } from "../../GraphQL/Queries";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import {
	getCharacterLoading,
	getCharacterError,
	getMultipleCharacter,
	getCharacterSuccess,
	CharacterReset
} from "../../features/characterSlice";

const URL = "https://animechan.vercel.app/api";

const MultipleRequest = ({ quoteInput }: InputProps) => {
	const dispatch = useDispatch();

	// let multipleData: Character[] = [];
	const [multipleData, setMultipleData] = useState<Character[]>([]);

	const [getMultiCharacterInfo] = useLazyQuery<Character>(GET_CHARACTER_INFO, {
		onCompleted(data) {
			console.log(`pushing data ${data.Character}`);
			setMultipleData((prevData) => [...prevData, data]);
			console.log(multipleData);
			dispatch(getMultipleCharacter(data));
		},
		onError(error) {
			const { graphQLErrors, networkError, message } = error;
			const errorMessage = graphQLErrors
				? graphQLErrors.map((error) => error.message).join(", ")
				: networkError
				? networkError.message
				: message;
			dispatch(getCharacterError(errorMessage));
		}
	});

	const handleMultipleCharacterInfo = async (quotes: Quote[]) => {
		let index = 0;

		const handleQuotes = async (index: number) => {
			if (index >= quotes.length) {
				console.log(`dispatch data`);
				// dispatch(getMultipleCharacter(multipleData));
				setMultipleData([]);
				return;
			}

			await getMultiCharacterInfo({
				variables: { characterName: quotes[index].character }
			});

			index++;
			handleQuotes(index);
		};

		handleQuotes(index);
	};

	//! Random
	const fetchMultipleRandomQuote = (request: string) => {
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

	//! Specific
	const fetchMultipleQuote = (request: string) => {
		console.log(`Sending multiple request: ${request}`);

		fetch(`${URL}${request}${quoteInput}`)
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
		console.log("RESET");
		dispatch(CharacterReset());
		fetchMultipleRandomQuote("/quotes");
	};
	const handle10Anime = () => {
		dispatch(CharacterReset());
		fetchMultipleQuote("/quotes/anime?title=");
	};
	const handle10Character = () => {
		dispatch(CharacterReset());
		fetchMultipleQuote("/quotes/character?name=");
	};

	return (
		<div className="container">
			<div className="multiple-button">
				<button onClick={handle10Random}>Get 10 Random Quote</button>
				<button onClick={handle10Anime} disabled={quoteInput === ""}>
					Get 10 Anime Quote
				</button>
				<button onClick={handle10Character} disabled={quoteInput === ""}>
					Get 10 Character Quote
				</button>
			</div>
		</div>
	);
};

export default MultipleRequest;
