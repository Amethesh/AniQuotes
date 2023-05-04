import "./styles/main.css";
import { useState } from "react";
import Card from "./components/Card";
import Random from "./components/RandomQuotes/Random";
// import { useSelector } from "react-redux";
// import { Quote } from "./types/interface";
// import { RandomQuote } from "./features/quote";
import RandomCharacter from "./components/RandomQuotes/Character";
import RandomAnime from "./components/RandomQuotes/Anime";
import Random10 from "./components/Get10Quotes/Random10";
import Anime10 from "./components/Get10Quotes/Anime10";
import Character10 from "./components/Get10Quotes/Character10";

function App() {
	// const quote = useSelector(RandomQuote);
	const [quoteInput, setQuoteInput] = useState<string>("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuoteInput(e.target.value);
	};

	console.log(quoteInput);

	return (
		<>
			<h1>Home</h1>
			<input type="text" name="main-input" id="main-input" onChange={handleInputChange} />
			<Card />
			<Random />
			<RandomAnime quoteInput={quoteInput} />
			<RandomCharacter quoteInput={quoteInput} />
			<Random10 />
			<Anime10 quoteInput={quoteInput} />
			<Character10 quoteInput={quoteInput} />
		</>
	);
}

export default App;
