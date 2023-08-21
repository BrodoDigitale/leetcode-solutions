/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //return s.split(' ').filter(i => i.length > 0).reverse().join(' ');

    let words = [];
    let word = [];

    //iterate through string
    for(char of s) {
        if(char === " ") {
            //there is space and word contains letters, so this is the end of the word
            if(word.length > 0) {
                words.unshift(word.join(""))
                word = [];
            }
        } else {
            //continue writing to word
            word.push(char);
        }
    }

    //adding last word
    if(word.length > 0) {
        words.unshift(word.join(""))
    }

    return words.join(" ");
};