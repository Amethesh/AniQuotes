import "./styles/main.css";
import Card from "./components/Card";
import Random from "./components/Random";

function App() {
	return (
		<>
			<h1>Home</h1>
			<Card
				title="Code Geass: Lelouch of the Rebellion"
				character="Suzaku Kururugi"
				quote="The best way to remove your lies is to make them come true"
			/>
			<Random />
		</>
	);
}

export default App;
