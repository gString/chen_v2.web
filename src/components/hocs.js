import React, { Consumer } from 'react';
import { compose, withState, withHandlers, branch, withStateHandlers } from 'recompose';
import Spinner from './common/Spinner';

export const withToggleOpen = withStateHandlers(
	({ initialToggle = false }) => ({
		isOpen: initialToggle
	}),
	{
		toggle: ({ isOpen }) => () => ({isOpen: !isOpen})
	}
);

export const withToggleVisible = compose(
	withState('isVisible', 'toggle', false),
	withHandlers({
		show: ({ toggle }) => e => toggle(true),
		hide: ({ toggle }) => e => toggle(false),
		toggle: ({ toggle }) => e => toggle(current => !current)
	})
);

/*
export const withSpinnerWhileLoading = branch(
	isLoading,
	renderComponent(Spinner)
);
*/

/*
export const withToggleOpen = compose(
	withState('isOpen', 'toggleOpen', false),
	withHandlers({})
)*/
