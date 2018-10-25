import React from 'react';

import UI from '../../providers/ui-text-provider';
import { getText } from "../../providers/language-provider";

const Logo = () =>
	<a title={ getText(UI.LOGOLINK) } href='http://www.yuvalchen.com'>
		<img alt={ getText(UI.LOGO) } src='../../images/logo.png'/>
	</a>;

export default Logo;