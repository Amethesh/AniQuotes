import { useDispatch } from "react-redux";
import { Quote, InputProps } from "../types/interface";
import { getQuoteSuccess, getQuoteLoading, getQuoteError } from "../features/quoteSlice";
// import { useState } from "react";

const URL = "https://animechan.vercel.app/api";

const ApiRequest = ({ quoteInput }: InputProps) => {
	const dispatch = useDispatch();
	// const [animeTitle, setAnimeTitle] = useState<string | null>(null);

	dispatch(getQuoteLoading());

	const fetchQuote = (request: string) => {
		console.log(`Sending Request: ${request}`);

		fetch(`${URL}${request}${quoteInput}`)
			.then((response) => response.json())
			.then((data: Quote[]) => {
				console.log(data);
				dispatch(getQuoteSuccess(data));
			})
			.catch((error) => {
				console.log(error);
				dispatch(getQuoteError(error));
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
