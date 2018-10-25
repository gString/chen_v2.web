import React from 'react';
import { compose, branch, renderComponent } from 'recompose';

import { withToggleOpen, withToggleVisible } from '../hocs';
import { availableLanguages, setSelected, getSelected, Text, getText } from '../../providers/language-provider';
import { Btn, Menu, MenuWrapper } from './LangMenu.styles';
import UI from "../../providers/ui-text-provider";


const LangMenu = withToggleVisible(( { isVisible, show, hide, toggle } ) => {
	const statusClass = isVisible ? 'open' : 'close';
	return (
		<MenuWrapper id='lang-menu'
			 className={statusClass}
			 onMouseLeave={ hide }
			 onMouseEnter={ show }
			 onClick={ toggle }>
			
			<Menu className='cell shrink vertical menu'>
				{
					Object.keys( UI.LANGAGUES ).map(
						lang => {
							let _lang = UI.LANGAGUES[lang];
							let _current = _lang.LANG === getSelected() ? 'current' : null;
							console.log("_lang: ", _lang);
							console.log("_current: ", _current);
							return (<li key={_lang.ID} className={_current}>
								<Btn title={ getText(_lang.TITLE) }
									 className={_lang.LANG}
									 onClick ={() => setSelected(lang)}>
									{ getText(_lang.TEXT) }
								</Btn>
							</li>)
						}
					)
				}
			</Menu>
		</MenuWrapper>
	)
});

export default LangMenu;