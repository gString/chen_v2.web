import React from 'react';

import { LanguageContext } from "./components/App";

const TextLine = ( {textObj} ) => {
	return <LanguageContext.Consumer>
		{ context => textObj[context.lang] || '- -' }
	</LanguageContext.Consumer>
}

export default TextLine;