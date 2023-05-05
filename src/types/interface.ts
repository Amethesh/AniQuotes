export interface Quote {
	anime: string;
	character: string;
	image?: string;
	quote: string;
}

export interface InputProps {
	quoteInput: string;
}
export interface CharacterInfoProps {
	characterName: string;
}

export interface Character {
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
}
