import React from 'react';
import SimpleBtn from "./SimpleBtn";

const placeHolder = (id) => console.log("Place holder click handler - ", id);

const ComMenu = () => <ul>
		<li><SimpleBtn text={'Send an e-mail'} clickHandler={placeHolder}/></li>
		<li><SimpleBtn text={'Yuval Chen profile in LinkedIn'} clickHandler={placeHolder}/></li>
	</ul>;

export default ComMenu;