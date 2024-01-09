function removeElement(nums: number[], val: number): number {
    let k = 0;
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        if(nums[start] === val) {
            k++;
            nums[start] = nums[end];
            nums[end] = val;
            end--;
        } else {
            start++;
        }
    }
    
    return nums.length - k;
};