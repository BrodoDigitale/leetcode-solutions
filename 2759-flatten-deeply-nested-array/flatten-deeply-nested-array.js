/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {

    if(n === 0) {
        return arr;
    }

    let resArr = [];

    for(let i = 0; i <arr.length; i++) {
        if(Array.isArray(arr[i])) {
            resArr.push(...flat(arr[i], n - 1));

        } else {
            resArr.push(arr[i]);
        }
    }
    return resArr;
};