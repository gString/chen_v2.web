import React, { Component } from 'react';

import ServicesLayout from "./service-page/Services.page";

class App extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			lang: 'en'
		}
	}
	render () {
		return (
			
				<div className="App">
					CHEN V2 - local state
					<ServicesLayout/>
				</div>
				
		);
	}
}

export default App;
