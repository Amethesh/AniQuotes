import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRandomQuote } from "../features/quote";

interface Quote {
	quote: string;
	character: string;
	anime: string;
}

function Random() {
	const dispatch = useDispatch();

	const [quote, setQuote] = useState<Quote | null>(null);
	const fetchQuote = () => {
		fetch("https://animechan.vercel.app/api/random")
			.then((response) => response.json())
			.then((data: Quote) => {
				setQuote(data);
				dispatch(getRandomQuote(quote));
			});
	};

	return (
		<div>
			<button onClick={fetchQuote}>Get Random Quote</button>
			{/* {quote && (
				<div>
					<p>{quote.quote}</p>
					<p>{quote.character}</p>
					<p>{quote.anime}</p>
				</div>
			)} */}
		</div>
	);
}

export default Random;
