/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sArr = s.split(' ');

    if(sArr.length !== pattern.length) {
        return false;
    }

    let map = new Map();
    let i = 0;

    for (const char of pattern) {
        if(map.has(char) && map.get(char) !== sArr[i]) {
            return false;
        }
        if(!map.has(char)) {
            if([...map.values()].includes(sArr[i])) {
                return false;
            }
            map.set(char, sArr[i]);
        }
        
        i++;
    }

    return true;
};