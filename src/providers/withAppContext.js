import { withContext, compose } from 'recompose';
import * as PropTypes from 'prop-types';

import withStateAndHandlers from './withStateAndHandlers';

export const  AppPropTypes = {
	selectedLanguage: PropTypes.string,
	changeLanguage: PropTypes.func
}

const AppContext = withContext(
	AppPropTypes,
	({ selectedLanguage, changeLanguage }) => ({
		selectedLanguage,
		changeLanguage
	})
);

export default compose(
	withStateAndHandlers,
	AppContext
)