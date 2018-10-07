import servicesAPI from '../fakeServer/api.fake';

let serviceArr = [];

servicesAPI.then (
	data => {
		serviceArr = data;
	},
	error => {
		console.error (error.toString ());
	}
);

export const servicesData = () => serviceArr;