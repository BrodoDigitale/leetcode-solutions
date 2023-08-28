/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    //use case for bitwise XOR operator
    return nums.reduce((a,b) => a ^ b);
};