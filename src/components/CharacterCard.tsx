import "../styles/card.css";
// import { Quote } from "../types/interface";
import { useSelector } from "react-redux";
import { LoadingStatus, RandomQuote, getError } from "../features/quoteSlice";

// type CardProps = {
// 	title: string;
// 	character: string;
// 	image?: string;
// 	quote: string;
// };
// {
// 	anime,
// 	image = "https://animesher.com/orig/0/93/932/9329/animesher.com_not-found-gone-anime-boy-932950.gif",
// 	character,
// 	quote
// }: Quote

const CharacterCard = () => {
	const quote = useSelector(RandomQuote);
	const loading = useSelector(LoadingStatus);
	const error = useSelector(getError);

	return (
		<>
			{Array.isArray(quote) ? (
				quote.map((quoteItem) => (
					<section className="card" key={quoteItem.id}>
						<h1 className="title">{quoteItem.anime}</h1>
						<img
							src={
								quoteItem.Character.image.large ||
								"https://animesher.com/orig/0/93/932/9329/animesher.com_not-found-gone-anime-boy-932950.gif"
							}
							alt="NOT FOUND"
						/>
						<h2 className="character">{quoteItem.character}</h2>
						<p className="quote">{quoteItem.quote}</p>
					</section>
				))
			) : (
				<section className="card">
					<h1 className="title">{quote.anime}</h1>
					<img
						src={
							quote.Character.image.large ||
							"https://animesher.com/orig/0/93/932/9329/animesher.com_not-found-gone-anime-boy-932950.gif"
						}
						alt="NOT FOUND"
					/>
					<h2 className="character">{quote.character}</h2>
					<h3 className="character">{quote.Character.name.native}</h3>
					<p className="quote">{quote.quote}</p>
					<p className="quote">About:{quote.Character.description}</p>
				</section>
			)}
		</>
	);
};

export default CharacterCard;
