/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let first = 0;
    let second = first + 1;

    while(second <= nums.length - 1) {
        if(nums[first] !== 0) {
            first++;
            second++;
        } else {
            if(nums[second] !== 0) {
                let temp = nums[first];
                nums[first] = nums[second];
                nums[second] = temp;
                first++;
            }
            second++;
        }
    }


};