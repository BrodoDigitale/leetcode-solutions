function sortedSquares(nums: number[]): number[] {
  
    const res = [];
    
    //2 pointers, left and right
    let l = 0;
    let r = nums.length - 1;
 
    
    //array is sorted but we have negative numbers so we should start 
    //inserting numbers into res array from the end
    
    for(let i = r; i >= 0; i-- ) {
        console.log(r, l)
      if(Math.abs(nums[l]) > Math.abs(nums[r])) {
          res[i] = nums[l] ** 2;
          l++;
      } else {
          res[i] = nums[r] **2;
          r--;
      }
    }
    
    return res;
};