// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 6 started by Shakhbozbek Usmonov

//---------------- Start ----------------

function findDifference(nums1: number[], nums2: number[]): number[][] {
    let len: number = Math.max(nums1.length, nums2.length);
    const [ans1, ans2] = [new Set<number>(), new Set<number>()];

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
