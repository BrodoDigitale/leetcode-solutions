function findIntersectionValues(nums1: number[], nums2: number[]): number[] {

    let left = 0;
    let right = 0;


    for(let i = 0; i < nums1.length; i++) {
        const val = nums1[i];
        if(nums2.includes(val)) {
            left++;
        }
    }



    for(let i = 0; i < nums2.length; i++) {
        const val = nums2[i];
        if(nums1.includes(val)) {
            right++;
        }
    }

    return [left, right];
};