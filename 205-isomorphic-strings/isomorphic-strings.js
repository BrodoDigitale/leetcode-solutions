/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    const sSet = [...new Set(s.split(''))];
    const tSet = [...new Set(t.split(''))];

    if(sSet.length !== tSet.length) {
        return false;
    }
    let map = {};

    for(let i = 0; i < s.length; i++) {
        let key = s[i];
        let val = t[i];
        if(map[key] && map[key] !== val) return false;
        if(!map[key]) {
            map[key] = val;
        }
    }

    return true;
};