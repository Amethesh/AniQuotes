import "../../styles/card.css";
// import { Quote } from "../types/interface";
import { useSelector } from "react-redux";
import { RandomQuote } from "../../features/quoteSlice";
import { CharacterDetails } from "../../features/characterSlice";

const CharacterCard = () => {
	const quotes = useSelector(RandomQuote);
	const details = useSelector(CharacterDetails);

	if (details.length > 1) {
		return (
			<>
				{details.map((detail) => (
					<section key={detail.Character?.name.full} className="card">
						<h1 className="title">{quotes?.anime}</h1>
						<img
							src={
								detail.Character?.image.large ||
								"https://animesher.com/orig/0/93/932/9329/animesher.com_not-found-gone-anime-boy-932950.gif"
							}
							alt="NOT_FOUND"
						/>
						<h2 className="character">{detail.Character?.name.full}</h2>
						<p className="quote"> {quotes?.quote}</p>
					</section>
				))}
			</>
		);
	}

	return (
		<>
			<section className="card">
				<h1 className="title">{quotes.anime}</h1>
				<img
					src={
						details[0].Character.image.large ||
						"https://animesher.com/orig/0/93/932/9329/animesher.com_not-found-gone-anime-boy-932950.gif"
					}
					alt="NOT_FOUND"
				/>
				<h2 className="character">{quotes.character}</h2>
				<p className="quote"> {quotes.quote}</p>
			</section>
		</>
	);
};

export default CharacterCard;
