/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let onlyLetters = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return onlyLetters.split('').reverse().join('') === onlyLetters;
};