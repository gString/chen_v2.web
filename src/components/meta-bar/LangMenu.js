import React from 'react';
import { compose, branch, renderComponent } from 'recompose';

import { withToggleOpen, withToggleVisible } from '../hocs';
import { availableLanguages, setSelected, getSelected, Text, getText } from '../../providers/language-provider';
import { Btn, Menu, MenuWrapper } from './LangMenu.styles';

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
					Object.keys( availableLanguages ).map(
						id => {
							let _lang = availableLanguages[id];
							let _current = _lang.language === getSelected() ? 'current' : null;
							
							return (<li key={id} className={_current}>
								<Btn title={ getText(_lang.title) }
									 className={_lang.language}
									 onClick ={() => setSelected(id)}>
									{ getText(_lang.text) }
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