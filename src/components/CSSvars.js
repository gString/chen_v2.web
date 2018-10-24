import styled from 'styled-components'

const VARS = {
	COLORS: {
		OLIVE:       '#d4c788',
		LEAF_GREEN:  '#93b566',
		LIGHT_GREEN: '#b4e870',
		GREEN_GRAY:  '#c4d0b5',
		WHITE:       '#fffef5',
		DARK_GREEN:  '#005e20',
	},
	GAP:             '4px',
	SMALL_FONT: '0.63rem',
	MIXIN: {
		SMALL_FONT: 'font-size: 0.63rem;',
		IMG_BTN: 'background-image: url(../images/yovalChen_Img.png);\n' +
				 '  background-repeat: no-repeat;\n' +
				 '  color: $DARK-GREEN;\n' +
				 '  border-radius: 3px;'
	}
};

export const imgBtn = styled.button`
	background-image: url(../images/yovalChen_Img.png);
	background-repeat: no-repeat;
	background-color: transparent;
	color: ${VARS.COLORS.DARK_GREEN};
	border-radius: 3px;
	
	:hover {
		color: white;
	}
`;

export default VARS;