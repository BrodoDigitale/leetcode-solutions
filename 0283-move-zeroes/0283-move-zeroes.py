class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        if(len(nums) == 0 or len(nums) == 1):
            return nums
    
        write = 0
        
        for read in range (1, len(nums)):

            if nums[write] == 0 and nums[read] != 0:
                nums[write] = nums[read]
                nums[read] = 0
                write += 1
            elif nums[write] != 0:
                write += 1
                
        return nums
                
                
            
            