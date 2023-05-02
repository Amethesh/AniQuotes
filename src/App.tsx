import "./styles/main.css";
import Card from "./components/Card";
import Random from "./components/Random";
import { useSelector } from "react-redux";
import { Quote } from "./types/interface";
import { RandomQuote } from "./features/quote";

function App() {
	const quote = useSelector(RandomQuote);

	return (
		<>
			<h1>Home</h1>
			{/* <Card
				title="Code Geass: Lelouch of the Rebellion"
				character="Suzaku Kururugi"
				quote="The best way to remove your lies is to make them come true"
			/> */}
			<Card anime={quote.anime} character={quote.character} image={quote.image} quote={quote.quote} />
			<Random />
		</>
	);
}

export default App;
