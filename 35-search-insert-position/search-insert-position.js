/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let guess = high + low / 2
        if (nums[guess] === target) {
            return guess;
        }
        if (nums[guess] > target) {
            high = guess - 1;
        }
        if (nums[guess] < target) {
            low = guess + 1;
        }
    }
    return low;
};