/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letters = {};

    //create hash map
    for(let char of magazine) {
        if(letters[char]) {
            letters[char]++;
        } else {
            letters[char] = 1;
        }
    }

    //check all letters 
    for(let char of ransomNote) {
        if(!letters[char]) return false;
        letters[char]--;
    }
    
    return true;

};