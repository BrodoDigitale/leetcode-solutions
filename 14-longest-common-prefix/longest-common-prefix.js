/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix="";

    for (let idx in strs[0]) {
        let arr = strs.filter(el => el[idx] === strs[0][idx]);
        if(arr.length === strs.length) {
            prefix += strs[0][idx];
        } else {
            return prefix;
        }
    }
    return prefix;
};