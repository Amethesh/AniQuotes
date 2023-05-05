import { gql } from "@apollo/client";

export const GET_CHARACTER_INFO = gql`
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

export const GET_ANIME_INFO = gql`
	query ($search: String) {
		Media(search: $search, type: ANIME) {
			id
			title {
				english
				romaji
				native
			}
			description(asHtml: false)
			startDate {
				year
				month
				day
			}
			endDate {
				year
				month
				day
			}
			coverImage {
				extraLarge
			}
			genres
			averageScore
		}
	}
`;
