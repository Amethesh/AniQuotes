export interface Quote {
	anime: string;
	character: string;
	quote: string;
}

export interface InputProps {
	quoteInput: string;
}
export interface CharacterInfoProps {
	characterName: string;
}

export interface CharacterInfo extends Quote {
	Character: {
		name: {
			first: string;
			last: string;
			full: string;
			native: string;
		};
		image: {
			large: string;
		};
		description: string;
	};
}
