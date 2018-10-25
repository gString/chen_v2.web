import React from 'react';

import { Btn, Menu } from './ComMenu.styles';
import { getText, Text } from "../../providers/language-provider";
import UI from '../../providers/ui-text-provider';

const sendEmail = () => console.log("Send email btn clicked");
const goLinkdin = () => console.log("goLinkdin btn clicked");

const ComMenu = () =>
	<Menu>
		<li>
			<Btn title={ getText(UI.COMMENU.EMAIL) }
				 onClick={sendEmail}
				 id="email">
				<Text textObj={UI.COMMENU.EMAILBTN}/>
			</Btn>
		</li>
		<li>
			<Btn title={ getText(UI.COMMENU.LINKEDIN) }
				 onClick={goLinkdin}
				 id='linkedin'>
				<Text textObj={UI.COMMENU.LINKEDINBTN}/>
			</Btn>
		</li>
	</Menu>;


export default ComMenu;