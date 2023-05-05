import { useDispatch } from "react-redux";
import { Quote, InputProps } from "../../types/interface";
import { getQuoteSuccess } from "../../features/quoteSlice";
// import { useState } from "react";

const URL = "https://animechan.vercel.app/api";

const Anime10 = ({ quoteInput }: InputProps) => {
	const dispatch = useDispatch();
	// const [animeTitle, setAnimeTitle] = useState<string | null>(null);

	const fetchQuote = () => {
		console.log("Fetching 10 anime quote");

		fetch(`${URL}/quotes/anime?title=${quoteInput}`)
			.then((response) => response.json())
			.then((data: Quote[]) => {
				console.log(data);
				dispatch(getQuoteSuccess(data));
			});
	};

	return (
		<div className="UsingAnime">
			{/* <input type="text" placeholder="10 Anime title" onChange={(e) => setAnimeTitle(e.target.value || null)} /> */}
			<button onClick={fetchQuote} disabled={quoteInput === ""}>
				Get 10 Anime Quote
			</button>
		</div>
	);
};

export default Anime10;
