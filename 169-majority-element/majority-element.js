/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    let count = 0;
    let most_frequent_el = nums[0];
    let major_frequency = 0;
    while (count < nums.length) {
        let frequency = 0;
        let el = nums[count];
        nums.forEach(e => {
            if(e === el) {
                frequency++;
            }
        })
        if(frequency > major_frequency) {
            most_frequent_el = el;
            major_frequency = frequency;
        }
        count++;
    }
    return most_frequent_el;
};