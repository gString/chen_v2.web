let language = 'en';

export const getSelected = () => language;
export const setSelected = selected => language = selected;

export const Text = ( { textObj } ) => textObj[ language ] || '- -';