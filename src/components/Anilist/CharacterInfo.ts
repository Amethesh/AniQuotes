import { gql, useLazyQuery } from "@apollo/client";
import { CharacterInfoProps } from "../../types/interface";
import { CharacterInfo } from "../../types/interface";
import { useDispatch } from "react-redux";
import { getError, getRandomQuote, isLoading } from "../../features/quote";

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
			}
			description
		}
	}
`;

function CharacterInfo(characterName: string) {
	// const [characterName, setCharacterName] = useState("");
	const [getCharacterInfo, { loading, error, data }] = useLazyQuery<CharacterInfo>(GET_CHARACTER_INFO);
	const dispatch = useDispatch();

	console.log(characterName);

	getCharacterInfo({ variables: { characterName } });

	console.log(data);

	dispatch(getRandomQuote(data));
	dispatch(isLoading(loading));
	dispatch(getError(error));
	// if (!character) return null;

	// let character: Character = data.Character[0];
}

export default CharacterInfo;
