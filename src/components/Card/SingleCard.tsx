import "../styles/card.css";
// import { Quote } from "../types/interface";
import { useSelector } from "react-redux";
import { RandomQuote } from "../../features/quoteSlice";
import { CharacterDetails } from "../../features/characterSlice";

const CharacterCard = () => {
	const quote = useSelector(RandomQuote);
	const details = useSelector(CharacterDetails);

	return (
		<>
			{!details ? (
				<p>Loading...</p>
			) : (
				<section className="card">
					<h1 className="title">{quote.anime}</h1>
					<img
						src={
							details[0].Character.image.large ||
							"https://animesher.com/orig/0/93/932/9329/animesher.com_not-found-gone-anime-boy-932950.gif"
						}
						alt="NOT_FOUND"
					/>
					<h2 className="character">{quote.character}</h2>
					<p className="quote"> {quote.quote}</p>
				</section>
			)}
		</>
	);
};

export default CharacterCard;
