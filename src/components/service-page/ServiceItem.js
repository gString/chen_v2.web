import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../providers/language-provider';
import { MultiParagraph } from '../common/MultiParagraph';

const ServiceItem = ( { service } ) => (
	<div>
		<dt>
			<h3><Text textObj={service.header}/></h3>
			<h5><Text textObj={service.sub}/></h5>
		</dt>
		<dd>
			<MultiParagraph paragraphsArray={service.text}/>
		</dd>
	</div>
);

ServiceItem.propTypes    = {
	name: PropTypes.string
};
ServiceItem.defaultProps = {
	name: 'whatever'
};

export default ServiceItem;