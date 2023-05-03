import "../styles/card.css";
// import { Quote } from "../types/interface";
import { useSelector } from "react-redux";
import { RandomQuote } from "../features/quote";

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

const Card = () => {
	const quote = useSelector(RandomQuote);

	return (
		<>
			{Array.isArray(quote) ? (
				quote.map((quoteItem) => (
					<section className="card" key={quoteItem.id}>
						<h1 className="title">{quoteItem.anime}</h1>
						<img
							src={
								quoteItem.image ||
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
							quote.image ||
							"https://animesher.com/orig/0/93/932/9329/animesher.com_not-found-gone-anime-boy-932950.gif"
						}
						alt="NOT FOUND"
					/>
					<h2 className="character">{quote.character}</h2>
					<p className="quote">{quote.quote}</p>
				</section>
			)}
		</>
	);
};

export default Card;
