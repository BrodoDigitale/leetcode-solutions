function findNumbers(nums: number[]): number {
    let sum = 0;
    
    for(const num of nums) {
        let digits = 0;
        let cur = num;
        while(cur >= 1) {
           cur = cur / 10;
           digits++;
        }
        if((digits % 2) === 0) {
            sum++;
        }
    }
    return sum;
};