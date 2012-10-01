/**
*	Number.js
*	Toolbox to handle ugly JavaScript number functions
*/ 

/**
*	toD: converts a integer string to an integer type base 10
*/
toD = function(number) {
	return parseInt(number,10);
}

/**
*	toH: converts a integer string to an integer type base 16
*/
toH = function(number) {
	return parseInt(number,16);
}

/**
*	ToF: converts a floating point number string to float
*/
toF = function(number,precision) {
	if (precision == null) {
		precision = 2;
	}
	
	return parseFloat(number.replace(',', '.')).toFixed(precision);
}