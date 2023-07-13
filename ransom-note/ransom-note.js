/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letters = new Map();

    //create hash map
    for(let i = 0; i < magazine.length; i++) {
        const key = magazine[i];
        if(letters.has(key)) {
            letters.set(key, letters.get(key) + 1)
        } else {
            letters.set(key, 1);
        }
    }

    //check all letters 
    for(let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i];
        if(!letters.has(letter)) return false;
        if (letters.get(letter) === 1) {
            letters.delete(letter)
        } else {
            letters.set(letter, letters.get(letter) - 1)
        }
    }
    return true;

};