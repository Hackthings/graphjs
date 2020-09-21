import apiCall from './api';

function setGroupCoverCall(args, callback) {
	return apiCall("setGroup", {
		"id": args[0],
		"cover": args[1]
	},
	function(response) {
		callback(response.data);
	});
};

export default function() {
	let args = Array.from(arguments);
	let callback = args.pop();
	return setGroupCoverCall(args, callback);
};