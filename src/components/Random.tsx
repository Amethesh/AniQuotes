import { useState } from "react";

interface Quote {
	quote: string;
	character: string;
	anime: string;
}

function Random() {
	const [quote, setQuote] = useState<Quote | null>(null);

	const fetchQuote = () => {
		fetch("https://animechan.vercel.app/api/random")
			.then((response) => response.json())
			.then((data: Quote) => setQuote(data));
	};

	return (
		<div>
			<button onClick={fetchQuote}>Get Random Quote</button>
			{quote && (
				<div>
					<p>{quote.quote}</p>
					<p>{quote.character}</p>
					<p>{quote.anime}</p>
				</div>
			)}
		</div>
	);
}

export default Random;
