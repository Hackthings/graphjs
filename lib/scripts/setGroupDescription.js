import apiCall from './api';

function setGroupDescriptionCall(args, callback) {
	return apiCall("setGroup", {
		"id": args[0],
		"description": args[1]
	},
	function(response) {
		callback(response.data);
	});
};

export default function() {
	let args = Array.from(arguments);
	let callback = args.pop();
	return setGroupDescriptionCall(args, callback);
};