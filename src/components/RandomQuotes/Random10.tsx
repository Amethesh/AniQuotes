import { useDispatch } from "react-redux";
import { Quote } from "../../types/interface";
import { getRandomQuote } from "../../features/quote";

const URL = "https://animechan.vercel.app/api";

const Random10 = () => {
	const dispatch = useDispatch();

	const fetchQuote = () => {
		console.log("Fetching 10 anime quote");

		fetch(`${URL}/quotes`)
			.then((response) => response.json())
			.then((data: Quote[]) => {
				console.log(data);
				dispatch(getRandomQuote(data));
			});
	};

	return (
		<div className="UsingAnime">
			<button onClick={fetchQuote}>Get 10 Random Quote</button>
		</div>
	);
};

export default Random10;
