import styled from 'styled-components';

import VARS, { imgBtn } from '../CSSvars';


export const Btn = styled(imgBtn)`
    border: solid 1px ${VARS.COLORS.GREEN_GRAY};
    padding: 3px 3px 3px 18px;
	background-color: ${VARS.COLORS.LEAF_GREEN};
    
    :hover {
    	border: dotted 1px ${VARS.COLORS.GREEN_GRAY};
    }

    &.english {
      background-position: 2px 2px;
    }
    &.english:hover {
      background-position: 2px -28px;
    }

    &.spanish {
      background-position: 2px -68px;
    }
    &.spanish:hover {
      background-position: 2px -98px;
    }
`;

export const MenuWrapper = styled.div`
	position: relative;
	width: 44px;
	
	&close {
		overflow: hidden;
	}
		
	&open {
		overflow: visible;
	}
	
	&close ul.menu {
		background-color: transparent;
		border: solid 1px transparent;
	}
	
	&close ul.menu > li {
		display: none;
	}
`;

export const Menu = styled.ul`
    position: absolute;
    padding: 1px;
    padding-top: 0;
    border-radius: 5px;
    top: -2px;
    
    .close & {
		background-color: transparent;
		border: solid 1px transparent;
	}
    
    .open & {
		background-color: ${VARS.COLORS.LEAF_GREEN};
		border: dotted 1px ${VARS.COLORS.GREEN_GRAY};
		transition: background-color 0.4s ease-in-out;
	}
 
	& li {
      padding: 3px 0;
      margin-left: 3px;
    }
    
	.close & li {
		display: none;
	}
 
	.open & li {
		opacity: 1;
		transition: opacity 0.7s ease-in-out;
	}
 
	.close & .current {
		display: list-item;
	}
`;
