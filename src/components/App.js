import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ServicesLayout from './service-page/Services.page';
import HomeLayout from './home-page/Home.page';
import ComMenu from './meta-bar/ComMenu';

import { Wrapper, Page } from './App.styles';
import SiteHeader from './header/SiteHeader';
import LangMenu from './meta-bar/LangMenu';
import MetaBar from './meta-bar/MetaBar';

class App extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			lang: 'en'
		}
	}
	render () {
		return (
			<BrowserRouter>
				<Wrapper>
					<Page>
						<MetaBar/>
						<SiteHeader/>
					
					CHEN V2 - local state
\					<Route exact path='/' component={HomeLayout} />
					<Route path='/services' component={ServicesLayout}/>
					</Page>
				</Wrapper>
			</BrowserRouter>
				
		);
	}
}

export default App;
