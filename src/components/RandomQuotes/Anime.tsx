import { useDispatch } from "react-redux";
import { getRandomQuote } from "../../features/quote";
import { Quote, InputProps } from "../../types/interface";
// import { useState } from "react";

const URL = "https://animechan.vercel.app/api";

function RandomAnime({ quoteInput }: InputProps) {
	const dispatch = useDispatch();

	// const [animeTitle, setAnimeTitle] = useState<string | null>(null);

	const fetchQuote = () => {
		console.log(`Fetching ${quoteInput} anime quote`);

		fetch(`${URL}/random/anime?title=${quoteInput}`)
			.then((response) => response.json())
			.then((data: Quote) => {
				// setQuote(data);
				dispatch(getRandomQuote(data));
			});
	};

	return (
		<div className="UsingAnime">
			{/* <input type="text" placeholder="Anime title" onChange={(e) => setAnimeTitle(e.target.value || null)} /> */}
			<button onClick={fetchQuote} disabled={quoteInput === ""}>
				Get Anime based Quote
			</button>
		</div>
	);
}

export default RandomAnime;
