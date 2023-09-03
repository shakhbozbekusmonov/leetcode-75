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
