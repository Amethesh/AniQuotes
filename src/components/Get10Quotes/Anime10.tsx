import { useDispatch } from "react-redux";
import { Quote } from "../../types/interface";
import { getRandomQuote } from "../../features/quote";
import { useState } from "react";

const URL = "https://animechan.vercel.app/api";

const Anime10 = () => {
	const dispatch = useDispatch();
	const [animeTitle, setAnimeTitle] = useState<string | null>(null);

	const fetchQuote = () => {
		console.log("Fetching 10 anime quote");

		fetch(`${URL}/quotes/anime?title=${animeTitle}`)
			.then((response) => response.json())
			.then((data: Quote[]) => {
				console.log(data);
				dispatch(getRandomQuote(data));
			});
	};

	return (
		<div className="UsingAnime">
			<input type="text" placeholder="10 Anime title" onChange={(e) => setAnimeTitle(e.target.value || null)} />
			<button onClick={fetchQuote} disabled={animeTitle === null}>
				Get Random Quote
			</button>
		</div>
	);
};

export default Anime10;
