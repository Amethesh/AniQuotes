import "./styles/main.css";
import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Random from "./components/RandomQuotes/Random";
import Random10 from "./components/RandomQuotes/Random10";
import ApiRequest from "./components/ApiRequest";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import CharacterInfo from "./components/Anilist/TestApi";
// import { Testrender } from "./components/Anilist/testrender";
// import { useSelector } from "react-redux";
// import { Quote } from "./types/interface";
// import { RandomQuote } from "./features/quote";
// import RandomCharacter from "./components/RandomQuotes/Character";
// import RandomAnime from "./components/RandomQuotes/Anime";
// import Anime10 from "./components/Get10Quotes/Anime10";
// import Character10 from "./components/Get10Quotes/Character10";

function App() {
	// const quote = useSelector(RandomQuote);
	const [quoteInput, setQuoteInput] = useState<string>("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuoteInput(e.target.value);
	};

	console.log(quoteInput);

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "https://graphql.anilist.co"
	});

	return (
		<ApolloProvider client={client}>
			<h1>Home</h1>
			<input type="text" name="main-input" id="main-input" onChange={handleInputChange} />
			<CharacterCard />
			{/* <CharacterInfo /> */}
			<Random />
			{/* <RandomAnime quoteInput={quoteInput} /> */}
			{/* <RandomCharacter quoteInput={quoteInput} /> */}
			<Random10 />
			<ApiRequest quoteInput={quoteInput} />
			{/* <Testrender /> */}
			{/* <Anime10 quoteInput={quoteInput} /> */}
			{/* <Character10 quoteInput={quoteInput} /> */}
		</ApolloProvider>
	);
}

export default App;
