import { gql, useLazyQuery } from "@apollo/client";
import { CharacterInfoProps } from "../../types/interface";
import { CharacterInfo } from "../../types/interface";

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

function CharacterInfo({ characterName }: CharacterInfoProps) {
	// const [characterName, setCharacterName] = useState("");
	const [getCharacterInfo, { loading, error, data }] = useLazyQuery<CharacterInfo>(GET_CHARACTER_INFO);

	console.log(characterName);

	getCharacterInfo({ variables: { characterName } });

	console.log(data);

	// if (!character) return null;

	// let character: Character = data.Character[0];
}

export default CharacterInfo;
