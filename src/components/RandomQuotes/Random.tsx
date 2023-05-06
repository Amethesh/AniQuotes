import { useDispatch } from "react-redux";
import { Quote, Character } from "../../types/interface";
import { getQuoteSuccess, getQuoteLoading, getQuoteError } from "../../features/quoteSlice";
import { GET_CHARACTER_INFO } from "../../GraphQL/Queries";
import { useLazyQuery } from "@apollo/client";
import { getCharacterSuccess, getCharacterLoading, getCharacterError } from "../../features/characterSlice";

const URL = "https://animechan.vercel.app/api";

const ApiRequest = () => {
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
	const fetchSingleQuote = (request: string) => {
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

	//! Multiple Quote
	const fetchMultipleQuote = (request: string) => {
		console.log(`Sending multiple request: ${request}`);

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

	const handleRandom = () => {
		fetchSingleQuote("/random");
	};
	const handleRandom10 = () => {
		fetchMultipleQuote("/quotes");
	};

	return (
		<div className="UsingAnime">
			<button onClick={handleRandom}>Get Random Quote</button>
			<button onClick={handleRandom10}>Get 10 Random Quote</button>
		</div>
	);
};

export default ApiRequest;
