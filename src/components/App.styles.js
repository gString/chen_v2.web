import styled, { injectGlobal } from 'styled-components';

import VARS from './CSSvars';

export const Wrapper = styled.div`
	padding: 9px 5rem;
`;

export const Page = styled.div`
	background-color: ${VARS.COLORS.LEAF_GREEN};
	padding: 0 15px;
`;

injectGlobal`
	* {
		border: none;
		outline: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
	}

	a, a:hover, a:active, a:visited {
		text-decoration: none;
		color: inherit;
	}

	html, body {
		background-color: ${VARS.COLORS.OLIVE};
	}
`;