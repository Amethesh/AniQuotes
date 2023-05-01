import "./styles/main.css";
import Card from "./components/Card";
import Random from "./components/Random";
import { useSelector } from "react-redux";

function App() {
	const quote = useSelector((state: any) => state.quote.value);

	return (
		<>
			<h1>Home</h1>
			{/* <Card
				title="Code Geass: Lelouch of the Rebellion"
				character="Suzaku Kururugi"
				quote="The best way to remove your lies is to make them come true"
			/> */}
			<Card title={quote.title} character={quote.character} quote={quote.quote} />
			<Random />
		</>
	);
}

export default App;
