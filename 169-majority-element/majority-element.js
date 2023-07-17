/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //applying Boyer–Moore majority vote algorithm
    let count = 0;
    let most_frequent_el;

    for (const num of nums) {
        if(count === 0) {
            most_frequent_el = num;
        }
        count += (num === most_frequent_el) ? 1 : -1;
    }
    return most_frequent_el;
};