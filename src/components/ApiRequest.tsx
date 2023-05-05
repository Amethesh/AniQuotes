import { useDispatch } from "react-redux";
import { Quote, InputProps, Character } from "../types/interface";
import { getQuoteSuccess, getQuoteLoading, getQuoteError } from "../features/quoteSlice";
import { GET_CHARACTER_INFO } from "../GraphQL/Queries";
import { useLazyQuery } from "@apollo/client";
import { getCharacterSuccess, getCharacterLoading, getCharacterError } from "../features/characterSlice";

const URL = "https://animechan.vercel.app/api";

const ApiRequest = ({ quoteInput }: InputProps) => {
	const dispatch = useDispatch();
	// const [animeTitle, setAnimeTitle] = useState<string | null>(null);
	const [getCharacterInfo, { data: info }] = useLazyQuery<Character>(GET_CHARACTER_INFO, {
		onCompleted(data) {
			dispatch(getCharacterSuccess(data));
		},
		onError(error) {
			dispatch(getCharacterError(error));
		}
	});

	dispatch(getQuoteLoading());

	const handleCharacterInfo = (characterName: string) => {
		dispatch(getCharacterLoading());
		console.log("getting character info");
		getCharacterInfo({ variables: { characterName } });
		// dispatch(getCharacterSuccess(info));
	};

	//! Single Quote
	const fetchSingleQuote = (request: string) => {
		console.log(`Sending Request: ${request}`);

		fetch(`${URL}${request}${quoteInput}`)
			.then((response) => response.json())
			.then((data: Quote) => {
				console.log(data);
				dispatch(getQuoteSuccess(data));
				handleCharacterInfo(data.character);
			})
			.catch((error) => {
				console.log(error);
				dispatch(getQuoteError(error));
			});
	};

	//! Multiple Quote
	const fetchMultipleQuote = (request: string) => {
		console.log(`Sending multiple request: ${request}`);

		fetch(`${URL}${request}${quoteInput}`)
			.then((response) => response.json())
			.then((data: Quote) => {
				console.log(data);
				dispatch(getQuoteSuccess(data));
				handleCharacterInfo(data.character);
			})
			.catch((error) => {
				console.log(error);
				dispatch(getQuoteError(error));
			});
	};

	const handleAnime = () => {
		fetchSingleQuote("/random/anime?title=");
	};
	const handleCharacter = () => {
		fetchSingleQuote("/random/character?name=");
	};
	const handle10Anime = () => {
		fetchMultipleQuote("/quotes/anime?title=");
	};
	const handle10Character = () => {
		fetchMultipleQuote("/quotes/character?name=");
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
