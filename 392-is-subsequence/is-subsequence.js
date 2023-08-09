/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let currS = 0;
 
    for(let i = 0; i < t.length; i++) {
        let char = s[currS]
        if (t[i] === char) {
            currS++;
        }
    }

    return currS === s.length;
};