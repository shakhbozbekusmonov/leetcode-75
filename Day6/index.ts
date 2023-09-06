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
