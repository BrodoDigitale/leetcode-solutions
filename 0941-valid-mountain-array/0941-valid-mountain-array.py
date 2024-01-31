class Solution(object):
    def validMountainArray(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        
        if len(arr) < 3:
            return False
        
        i = 0
        
        while i < len(arr) - 1 and arr[i] < arr[i + 1]:
            i += 1
            
        if i == 0 or i == len(arr) - 1:
            return False
        
            
        for x in range(i, len(arr) - 1):
            if arr[x] <= arr[x + 1]:
                return False
            
        return True
        
        