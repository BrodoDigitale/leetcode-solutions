class Solution(object):
    def checkIfExist(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        if len(arr) == 0:
            return False
        
        #keep track of all numbers
        elements = {}
        
        for x in arr:
            if x*2 in elements.keys() or x % 2 == 0 and x / 2 in elements.keys():
                return True
            else:
                elements[x] = x
        
        return False
        