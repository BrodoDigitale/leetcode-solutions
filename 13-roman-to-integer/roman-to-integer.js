/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //make a hash table of numbers
    let numbers = {
        "I" : 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    //split string into array
    let arr = s.split('');
    
    //perform calculation
    return arr.reduce((acc, el, currIdx) => {
    let num = numbers[el];
    let nextNum = numbers[arr[currIdx + 1]];
    
    return num < nextNum ? acc - num : acc + num;
    }, 0)
};