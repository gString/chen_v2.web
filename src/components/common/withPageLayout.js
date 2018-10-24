import React from 'react';

const withPageLayout = Base => {
	const HOC = () => (
		<div>
			<h2>Wrapped component:</h2>
			<Base/>
		</div>
	)
	
	return HOC;
};

export default withPageLayout;