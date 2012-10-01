/**
*	console.js: Handle console utilities easily
*/

/**
*	log: debug functions from console object
*/
log = function(object) {
	if (typeof console.log == 'function') {
		console.log(object);
	} else if (typeof console.debug == 'function') {
		console.debug(object);
	} else if (typeof console.info == 'function') {
		console.info(object);
	} else {
		alert("Ops! Your browser doesn´t have cool console functions. Please install a nice browser");
	}
}