class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        #as we know there is extra space in num1 let's fill it starting from the end
        
        #find out last index
        last = m + n - 1;
        
        #compare values and fill in nums1
        while m > 0 and n > 0:
            if nums1[m - 1] > nums2[n - 1]:
                nums1[last] = nums1[m - 1]
                #update first array pointer
                m -= 1
            else:
                nums1[last] = nums2[n - 1]
                #update second array pointer
                n -=1
                
            #update filling pointer
            last -= 1
        
        #if there are still values in the second array put them into the first one
        while n > 0:
            nums1[last] = nums2[n - 1]
            n -= 1
            last -= 1