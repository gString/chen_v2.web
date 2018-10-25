import { Btn } from "../components/meta-bar/ComMenu.styles";
import React from "react";

const UI = {
	LOGOLINK: {
		"english": 'Welcome to Yuval Chen website - Arid Land and Fruit Crop specialist (click for the home page)',
		"spanish": 'Es Welcome to Yuval Chen website (click for the home page)'
	},
	LOGO: {
		"english": "Yuval Chen's logo",
		"spanish": "Es Welcome to Yuval Chen website (click for the home page)"
	},
	COMMENU: {
		EMAILBTN: {
			"english": "Email Yuval Chen",
			"spanish": "Es Email Yuval Chen"
		},
		EMAIL: {
			"english": "Click to send email to Yuval Chen",
			"spanish": "Es Email Yuval Chen"
		},
		LINKEDINBTN: {
			"english": "Yuval Chen Profile at LinkedIn",
			"spanish": "Es Yuval Chen Profile at LinkedInn"
		},
		LINKEDIN: {
			"english": "Click to open Yuval Chen LinkedIn profile",
			"spanish": "Es Email Yuval Chen"
		}
	},
	// languages entry here is used as data to drive the languages menu
	LANGAGUES: {
		ENGLISH: {
			ID: 0,
			LANG: 'english',
			TEXT: {
				"english": 'En',
				"spanish": 'In'
			},
			TITLE: {
				"english": 'English',
				"spanish": 'Inglés'
			}
		},
		'spanish': {
			ID: 1,
			LANG: 'spanish',
			TEXT: {
				"english": 'Es',
				"spanish": 'Es'
			},
			TITLE: {
				"english": 'Spanish',
				"spanish": 'Español'
			}
		}
		
	}
}

export default UI;