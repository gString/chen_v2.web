import React, { Component } from 'react';

import { servicesAPI } from '../../fakeServer/api.fake';
import ServiceList from './ServiceList';
import withPageLayout from '../common/withPageLayout';

class Services extends Component {
	
	constructor ( props ) {
		super (props);
		
		//  state
		this.state = {
			list:      [],
			isLoading: true,
			error:     null
		};
		
		//  Bind functions
		
	}
	
	componentDidMount() {
		servicesAPI
			.then( response => {
				if ( response.ok ) {
					return response.json
				} else {
					throw new Error('Something went wrong ...');
				}
			})
			.then( data => this.setState({
				list:      data,
				isLoading: false
			}) )
			.catch( error => this.setState({ isLoading: false, error }));
	}
	
	render () {
		const { list, isLoading, error } = this.state;
		
		if ( error ) {
			return <p>{error}</p>
		}
		
		if ( isLoading ) {
			return <p>Loading ...</p>
		}
		
		return <ServiceList list={list}/>
	}
}

const ServicesLayout = withPageLayout(Services);

export default ServicesLayout;