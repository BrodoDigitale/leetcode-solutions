function findMaxConsecutiveOnes(nums: number[]): number {
    let curr:number = 0;
    let max: number = 0;
    
    for(const num of nums) {
        curr = num ? curr + 1 : 0;
        max = Math.max(curr, max);
    }
    return max;
};