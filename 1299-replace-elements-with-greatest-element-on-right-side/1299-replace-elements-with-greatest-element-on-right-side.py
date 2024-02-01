class Solution(object):
    def replaceElements(self, arr):
        """
        :type arr: List[int]
        :rtype: List[int]
        """     
        max = -1
        
        for i in range(len(arr) - 1, -1, -1):
            temp = arr[i]
            arr[i] = max
            if temp > max:
                 max = temp
                    
        return arr
     