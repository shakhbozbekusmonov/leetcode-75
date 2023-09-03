// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 4 started by Shakhbozbek Usmonov

//---------------- Start ----------------

function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;

    let firstMin: number = Infinity;
    let secondMin: number = Infinity;

    for (let num of nums) {
        if (num <= firstMin) {
            firstMin = num;
        } else if (num <= secondMin) {
            secondMin = num;
        } else {
            return true;
        }
    }

    return false;
}

//----------------------------------------------------------------

function compress(chars: string[]): number {
    let l: number = 0,
        r: number = 0;

    while (l < chars.length) {
        while (r < chars.length && chars[l] === chars[r]) {
            ++r;
        }

        if (l + 1 === r) {
            l = r;
            continue;
        }

        const len = r - l;

        chars.splice(l + 1, len - 1, ...Array.from(len.toString()));

        l = l + 1 + len.toString().length;
        r = l;
    }

    return chars.length;
}

//----------------------------------------------------------------

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let len: number = nums.length;

    while (len > 0) {
        if (nums[len - 1] === 0) {
            const temp: number[] = nums.splice(len - 1, 1);

            nums.push(...temp);
        }
        len--;
    }
}

//---------------------------- END -----------------------------
