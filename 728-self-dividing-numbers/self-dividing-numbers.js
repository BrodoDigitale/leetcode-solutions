/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let nums = [];

    for(let i = left; i <= right; i++) {
        let num = i;
        let res = true;
        while (num) {
            let curr = num % 10;
            if(i % curr !== 0) {
                res = false;
            }
            num = Math.floor(num / 10);
        }
        if(res) {
            nums.push(i)
        }
        
    }

    return nums;
    
};