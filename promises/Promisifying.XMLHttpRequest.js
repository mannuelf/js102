
function get(url) {
	// return a new promise.
	return new Promise(function(resolve, reject) {
		// Do the usual XHR stuff
		var req = new XMLHttpRequest();
		req.open('GET', url);

		req.onload = function() {
			// this is called even on 404 etc
			// so check the status
			if (req.status == 200) {
				// Resolve the promise with the response text
				resolve(req.response);
			} else {
				// Otherwise reject with the status text
				// which will hopefully be a meanngfull error
				reject(Error(req.statusText));
			}
		};

		// Handle network errors
		req.onerror = function() {
			reject(Error('Network Error'));
		};

		// Make the request
		req.send();
	});
}

//get('story.json').then(function(response) {
//	console.log('Success!', response);
//	return JSON.parse(response)
//}, function(error) {
//	console.log('Failed!', error);
//});

get('story.json').then(JSON.parse).then(function(response) {
	console.log("Yey JSON!", response);
});