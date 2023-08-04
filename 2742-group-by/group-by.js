/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let res = {};

    for(let i of this) {
        const id = fn(i)
        if(res[id]) {
            res[id].push(i)
        } else {
            res[id] = [i]
        }
    }

    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */