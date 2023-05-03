import "./styles/main.css";
import Card from "./components/Card";
import Random from "./components/RandomQuotes/Random";
// import { useSelector } from "react-redux";
// import { Quote } from "./types/interface";
// import { RandomQuote } from "./features/quote";
import RandomCharacter from "./components/RandomQuotes/Character";
import RandomAnime from "./components/RandomQuotes/Anime";
import Random10 from "./components/Get10Quotes/Random10";

function App() {
	// const quote = useSelector(RandomQuote);

	return (
		<>
			<h1>Home</h1>
			{/* <Card
				title="Code Geass: Lelouch of the Rebellion"
				character="Suzaku Kururugi"
				quote="The best way to remove your lies is to make them come true"
			/> */}
			<Card />
			<Random />
			<RandomAnime />
			<RandomCharacter />
			<Random10 />
		</>
	);
}

export default App;
