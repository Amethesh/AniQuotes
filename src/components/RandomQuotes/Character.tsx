import { useDispatch } from "react-redux";
import { getRandomQuote } from "../../features/quote";
import { Quote, InputProps } from "../../types/interface";
// import { useState } from "react";

const URL = "https://animechan.vercel.app/api";

function RandomCharacter({ quoteInput }: InputProps) {
	const dispatch = useDispatch();

	// const [character, setCharacter] = useState<string | null>(null);

	const fetchQuote = () => {
		console.log("Fetching anime quote");
		fetch(`${URL}/random/character?name=${quoteInput}`)
			.then((response) => response.json())
			.then((data: Quote) => {
				// setQuote(data);
				dispatch(getRandomQuote(data));
			});
	};

	return (
		<div className="UsingAnime">
			{/* <input type="text" placeholder="QuotequoteInput title" onChange={(e) => setCharacter(e.target.value || null)} /> */}
			<button onClick={fetchQuote} disabled={quoteInput === ""}>
				Get Character Quote
			</button>
		</div>
	);
}

export default RandomCharacter;
