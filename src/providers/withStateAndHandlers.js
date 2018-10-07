import React from 'react';
import { withState, withHandlers, compose } from 'recompose';

const withStateAndhandlers = compose(
	withState('selectedLanguage', 'changeLanguage', 'en'),
	withHandlers({
		changeLanguage: (props) => (lang, evt) => props.changeLanguage( selectedLanguage => lang)
	})
)

export default withStateAndhandlers;