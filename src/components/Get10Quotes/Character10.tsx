import { useDispatch } from "react-redux";
import { Quote } from "../../types/interface";
import { getRandomQuote } from "../../features/quote";
import { useState } from "react";

const URL = "https://animechan.vercel.app/api";

const Character10 = () => {
	const dispatch = useDispatch();
	const [character, setCharacter] = useState<string | null>(null);

	const fetchQuote = () => {
		console.log("Fetching 10 anime quote");

		fetch(`${URL}/quotes/character?name=${character}`)
			.then((response) => response.json())
			.then((data: Quote[]) => {
				console.log(data);
				dispatch(getRandomQuote(data));
			});
	};

	return (
		<div className="UsingAnime">
			<input type="text" placeholder="10 Character name" onChange={(e) => setCharacter(e.target.value || null)} />
			<button onClick={fetchQuote} disabled={character === null}>
				Get Random Quote
			</button>
		</div>
	);
};

export default Character10;
