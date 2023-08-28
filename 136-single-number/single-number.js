/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let idx = 0;
    while(idx < nums.length) {
        let curr  = nums[idx];
        let count = 0;
        for(let i = 0; i < nums.length; i++) {
            if (nums[i] === curr) {
                count += 1;
            } 
        }
        if(count === 1) return curr;
        idx+=1;
    }
    return res;
};