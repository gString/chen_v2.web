import React from 'react';

import { Btn, Menu } from './ComMenu.styles';

const sendEmail = () => console.log("Send email btn clicked");
const goLinkdin = () => console.log("goLinkdin btn clicked");

const ComMenu = () =>
	<Menu>
		<li>
			<Btn title='Click to send an email to Yuval Chen'
				 onClick={sendEmail}
				 id="email">
				Send an e-mail
			</Btn>
		</li>
		<li>
			<Btn title='Click to open Yuval Chen LinkedIn profile'
				 onClick={goLinkdin}
				 id='linkedin'>
				Yuval Chen Profile at LinkedIn
			</Btn>
		</li>
	</Menu>


export default ComMenu;