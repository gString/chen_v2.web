export const availableLanguages = {
	english: {
		id: 0,
		language: 'english',
		text: {
			'english': 'En',
			'spanish': 'In'
		},
		title: {
			"english": 'English',
			"spanish": 'Inglés'
		}
	},
	'spanish': {
		id: 1,
		language: 'spanish',
		text: {
			"english": 'Es',
			"spanish": 'Es'
		},
		title: {
			"english": 'Spanish',
			"spanish": 'Español'
		}
	}
};

let language = 'english';

export const getLanguage = () => language;
export const setLanguage = lang => {
	if (availableLanguages.hasOwnProperty(lang)) {
		language = lang;
	}
};