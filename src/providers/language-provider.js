import UI from "./ui-text-provider";


export const availableLanguages = UI.LANGAGUES;
/*
export const availableLanguages = {
	english: {
		id: 0,
		language: 'english',
		text: {
			"english": 'En',
			"spanish": 'In'
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
*/


let language = 'english';

export const getSelected = () => language;
export const setSelected = lang => {
	console.log("set, id:", lang);
	language = availableLanguages[lang].LANG;
};

export const getText = ( textObj ) => textObj[ language ] || '- -';
export const Text = ( { textObj } ) => textObj[ language ] || '- -';