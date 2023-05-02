import "./styles/main.css";
import Card from "./components/Card";
import Random from "./components/Random";
import { useSelector } from "react-redux";
import { Quote } from "./types/interface";

function App() {
	const quote = useSelector((state: Quote) => state.quote.value);

	return (
		<>
			<h1>Home</h1>
			{/* <Card
				title="Code Geass: Lelouch of the Rebellion"
				character="Suzaku Kururugi"
				quote="The best way to remove your lies is to make them come true"
			/> */}
			<Card title={quote.anime} character={quote.character} quote={quote.quote} />
			<Random />
		</>
	);
}

export default App;
