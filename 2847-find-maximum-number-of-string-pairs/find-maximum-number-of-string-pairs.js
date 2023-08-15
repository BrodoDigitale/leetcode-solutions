/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let counter = 0;

    for(let i = 0; i < words.length - 1; i++) {
        let word = words[i];
        for(let j = i + 1; j < words.length; j++) {

            let reversed = words[j].split('').reverse().join('');
            if(word === reversed) {
                counter++;
            }
        }
    }
    return counter;
};