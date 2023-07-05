/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	return function(x) {
        if(!functions.length) return x;
        return functions.reduceRight((prevFunc, nextFunc) => nextFunc(prevFunc), x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */