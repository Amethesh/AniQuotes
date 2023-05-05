import { useDispatch } from "react-redux";
import { getQuoteSuccess } from "../../features/quoteSlice";
import { Quote } from "../../types/interface";

function Random() {
	const dispatch = useDispatch();

	// const [quote, setQuote] = useState<Quote | null>(null);
	const fetchQuote = () => {
		console.log("Fetching quote");
		fetch("https://animechan.vercel.app/api/random")
			.then((response) => response.json())
			.then((data: Quote) => {
				// setQuote(data);
				dispatch(getQuoteSuccess(data));
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
