import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ServicesLayout from "./service-page/Services.page";
import HomeLayout from "./home-page/Home.page";

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
				<div className="App">
					CHEN V2 - local state
					<Route exact path='/' component={HomeLayout} />
					<Route path='/services' component={ServicesLayout}/>
				</div>
			</BrowserRouter>
				
		);
	}
}

export default App;
