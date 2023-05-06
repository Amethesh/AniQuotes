import { useDispatch } from "react-redux";
import { Quote, InputProps, Character } from "../../types/interface";
import { getQuoteSuccess, getQuoteLoading, getQuoteError } from "../../features/quoteSlice";
import { GET_CHARACTER_INFO } from "../../GraphQL/Queries";
import { useLazyQuery } from "@apollo/client";
import { getCharacterSuccess, getCharacterLoading, getCharacterError } from "../../features/characterSlice";

const URL = "https://animechan.vercel.app/api";

const ApiRequest = ({ quoteInput }: InputProps) => {
	const dispatch = useDispatch();
	// const [animeTitle, setAnimeTitle] = useState<string | null>(null);
	const [getCharacterInfo, {}] = useLazyQuery<Character>(GET_CHARACTER_INFO, {
		onCompleted(data) {
			dispatch(getCharacterSuccess(data));
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

	//! Single Quote

	const fetchSingleRandomQuote = (request: string) => {
		console.log(`Sending Request: ${request}`);

		fetch(`${URL}${request}`)
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

	const handleRandom = () => {
		fetchSingleRandomQuote("/random");
	};
	const handleAnime = () => {
		fetchSingleQuote("/random/anime?title=");
	};
	const handleCharacter = () => {
		fetchSingleQuote("/random/character?name=");
	};

	return (
		<div className="UsingAnime">
			{/* <input type="text" placeholder="10 Anime title" onChange={(e) => setAnimeTitle(e.target.value || null)} /> */}
			<button onClick={handleRandom}>Get Random Quote</button>
			<button onClick={handleAnime} disabled={quoteInput === ""}>
				Get Anime Quote
			</button>
			<button onClick={handleCharacter} disabled={quoteInput === ""}>
				Get Character Quote
			</button>
		</div>
	);
};

export default ApiRequest;
