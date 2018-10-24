import React from 'react';
import styled from 'styled-components';

import ComMenu from './ComMenu';
import LangMenu from './LangMenu';

const Bar = styled.aside`
	display: flex;
	justify-content: flex-end;
`;

const MetaBar = ( { name } ) => (
	<Bar>
		<LangMenu/>
		<ComMenu/>
	</Bar>
);

export default MetaBar;