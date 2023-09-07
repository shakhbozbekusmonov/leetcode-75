"use strict";
// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 6 started by Shakhbozbek Usmonov
//---------------- Start ----------------
function findDifference(nums1, nums2) {
    let len = Math.max(nums1.length, nums2.length);
    const [ans1, ans2] = [new Set(), new Set()];
    for (let i = 0; i < len; i++) {
        if (nums1[i] !== undefined) {
            if (!nums2.includes(nums1[i])) {
                ans1.add(nums1[i]);
            }
        }
        if (nums2[i] !== undefined) {
            if (!nums1.includes(nums2[i])) {
                ans2.add(nums2[i]);
            }
        }
    }
    return [Array.from(ans1), Array.from(ans2)];
}
//----------------------------------------------------------------
function longestOnes(nums, k) {
    let i = 0, j = 0;
    for (; j < nums.length; j++) {
        if (nums[j] === 0) {
            k--;
        }
        if (k < 0) {
            if (nums[i] === 0) {
                k++;
            }
            i++;
        }
    }
    return j - i;
}
//----------------------------------------------------------------
//# sourceMappingURL=index.js.map