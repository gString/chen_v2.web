import React from 'react';
import PropTypes from 'prop-types';
import ServiceItem from './ServiceItem';

const ServiceList = ( { list } ) => (
	<dl>
		{ list.map( item => <ServiceItem key={item.id} service={item}/>)}
	</dl>
);

ServiceList.propTypes    = {
	name: PropTypes.string
};
ServiceList.defaultProps = {
	name: 'whatever'
};

export default ServiceList;