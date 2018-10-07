import React from 'react';

import { idMaker } from "../providers/utils";
import { Text } from "../providers/language-provider";

export const MultiParagraph = ( { paragraphsArray } ) => <article>
	{ paragraphsArray.map( (paragraph, index) =>
		<p key={idMaker(index)}>
			<Text textObj={paragraph}/>
		</p>
	)}
</article>;
