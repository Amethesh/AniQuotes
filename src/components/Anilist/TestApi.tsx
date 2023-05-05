import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

type Character = {
	Character: {
		name: {
			first: string;
			last: string;
			full: string;
			native: string;
		};
		image: {
			large: string;
			medium: string;
		};
		description: string;
	};
};

const GET_CHARACTER_INFO = gql`
	query Character($characterName: String) {
		Character(search: $characterName, sort: SEARCH_MATCH) {
			name {
				first
				last
				full
				native
			}
			image {
				large
				medium
			}
			description
		}
	}
`;

function CharacterInfo({ characterName }: string) {
	// const [characterName, setCharacterName] = useState("");
	const [getCharacterInfo, { loading, error, data }] = useLazyQuery<Character>(GET_CHARACTER_INFO);

	const handleCharacterInfo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(characterName);
		getCharacterInfo({ variables: { characterName } });
		console.log(data);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	// if (!character) return null;

	// let character: Character = data.Character[0];

	// return (
	// 	<div className="Anilist">
	// 		<h1>AniList</h1>
	// 		<form onSubmit={handleSubmit}>
	// 			<label>
	// 				Character Name:
	// 				<input type="text" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
	// 			</label>
	// 			<button type="submit">Search</button>
	// 		</form>
	// 		{data ? (
	// 			<div>
	// 				<h2>{data.Character.name.full}</h2>
	// 				<img src={data.Character.image.large} alt={data.Character.name.full} />
	// 				<p>{data.Character.description}</p>
	// 			</div>
	// 		) : (
	// 			<p>No results found.</p>
	// 		)}
	// 	</div>
	// );
}

export default CharacterInfo;
