import styled from 'styled-components';

import VARS, { imgBtn } from '../CSSvars';


export const Btn = styled(imgBtn)`
    height: 16px;
    padding-left: 23px;
    
    &#email {
    	background-position: 5px -269px;
    }
    &#email:hover {
	    background-position: 5px -299px;
    }
    
    &#linkedin {
    	background-position: 5px -204px;
    }
    &#linkedin:hover {
	    background-position: 5px -234px;
    }
`;

export const Menu = styled.ul`
	
	display: flex;

	& li {
      padding: 3px 0;
      margin-left: 10px;
    }
`;
