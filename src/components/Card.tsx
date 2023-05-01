import "../styles/card.css";

type CardProps = {
	title: string;
	character: string;
	image?: string;
	quote: string;
};
const Card = ({ title, image = "https://animesher.com/orig/0/93/932/9329/animesher.com_not-found-gone-anime-boy-932950.gif", character, quote }: CardProps) => {
	return (
		<section className="card">
			<h1 className="title">{title}</h1>
			<img src={image} alt="NOT FOUND" />
			<h2 className="character">{character}</h2>
			<p className="quote">{quote}</p>
		</section>
	);
};

export default Card;
