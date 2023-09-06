// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 6 started by Shakhbozbek Usmonov

//---------------- Start ----------------

function largestAltitude(gain: number[]): number {
    let ans: number = 0,
        total: number = 0;
    for (let i = 0; i < gain.length; i++) {
        total += gain[i];
        ans = Math.max(ans, total);
    }
    return ans;
}

//---------------------------------------------------

function pivotIndex(nums: number[]): number {
    let sumLeft: number = 0;
    let sum: number = nums.reduce((acc, cur) => acc + cur, 0);

    for (let i = 0; i < nums.length; i++) {
        if (sumLeft === sum - sumLeft - nums[i]) {
            return i;
        }
        sumLeft += nums[i];
    }
    return -1;
}

//---------------------------------------------------

function maxVowels(s: string, k: number): number {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    let curr: number = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            curr++;
        }
    }

    if (curr === k) {
        return curr;
    }

    let ans: number = curr;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            curr++;
        }

        if (vowels.has(s[i - k])) {
            curr--;
        }

        if (curr === k) {
            return curr;
        }

        ans = Math.max(ans, curr);
    }

    return ans;
}

//--------------------------- END -----------------------
