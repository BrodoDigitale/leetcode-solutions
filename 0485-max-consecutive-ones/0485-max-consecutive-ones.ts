function findMaxConsecutiveOnes(nums: number[]): number {
    if(!nums.length) {
        return 0;
    }
    let curr:number = 0;
    let res: number = 0;
    for(const num of nums) {
        if(num !== 1) {
           res = Math.max(curr, res);
           curr = 0;
        } else if(num === 1) {
            curr++;
        }
    }
    return Math.max(res, curr);
};