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

function maxOperations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let operationCount: number = 0;
    let left: number = 0,
        right: number = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === k) {
            operationCount++;
            right--;
            left++;
        } else if (sum > k) {
            right--;
        } else {
            left++;
        }
    }

    return operationCount;
}

//---------------------------------------------------------------------

function findMaxAverage(nums: number[], k: number): number {
    let sum: number = 0,
        max: number = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    max = sum / k;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum / k);
    }

    return max;
}

//------------------------ END -------------------------