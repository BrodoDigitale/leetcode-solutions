/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let counter = 0;

    let dict = {}

    for(let word of words) {
        let reversed = word.split('').reverse().join('');
        if(dict[reversed]) {
            dict[reversed]--;
            counter++;
        } else {
            dict[word] = (dict[word] || 0 ) + 1;
        }
    }
    return counter;
};