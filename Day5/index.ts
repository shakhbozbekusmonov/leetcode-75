// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 5 started by Shakhbozbek Usmonov

//---------------- Start ----------------

function isSubsequence(s: string, t: string): boolean {
    if (s.length > t.length) return false;

    let count = 0;
    for (let i = 0; i < t.length; i++) {
        if (s.charAt(count) === t.charAt(i)) count++;
    }
    return count === s.length;
}

//----------------------------------------------------------

function maxArea(height: number[]): number {
    let maxArea: number = 0;
    let left: number = 0,
        right: number = height.length - 1;

    while (left < right) {
        maxArea = Math.max(
            maxArea,
            Math.min(height[left], height[right]) * (right - left)
        );

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

//----------------------------------------------------------------------
