import createList from './services.fake';

export const servicesAPI = new Promise((resolve, reject ) => {
	setTimeout(() => {
		resolve( createList() );
	}, 1500);
});
