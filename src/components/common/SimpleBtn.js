import React from 'react';
import PropTypes from 'prop-types';

const SimpleBtn = props => {
	
	// passing click handler, identifier defaults to class
	const id          = props.identifier || props.class;
	const handleClick = () => {
		// ToDo: id is not handled
		props.clickHandler (id);
	};
	
	// title defaults to text
	const title = props.title || props.text;
	
	return (
		<button title={ title }
				className={ props.class }
				onClick={ handleClick }>
			{ props.text }
		</button>
	)
};

SimpleBtn.propTypes = {
	'identifier':   PropTypes.oneOfType ([ PropTypes.string, PropTypes.number ]),
	'title':        PropTypes.string,
	'text':         PropTypes.string.isRequired,
	'class':        PropTypes.string,
	'clickHandler': PropTypes.func.isRequired
};

export default SimpleBtn;