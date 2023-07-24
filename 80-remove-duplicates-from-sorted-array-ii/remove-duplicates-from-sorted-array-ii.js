/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //left and right pointers
    let i = 0;
    let j = 0;
    
    while(j < nums.length) {
        //counting same numbers in a streak
        let count = 1;
        while(nums[j] === nums[j + 1] && j + 1 < nums.length) {
            count++;
            //updating right pointer
            j++;
        }

        //finding minimum between 2 and streak count (might be 1 and pushing numbers to left pointer)
        for (let x = 0; x <  Math.min(count, 2); x++){
            nums[i] = nums[j];
            i++;
        }
        //update right pointer to move to the next streak
        j++;
    }
    return i;
};