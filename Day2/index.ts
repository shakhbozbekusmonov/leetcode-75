// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 2 started by Shakhbozbek Usmonov

//---------------- Start ----------------

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCand: number = Math.max(...candies);
    return candies.map((item) => item + extraCandies >= maxCand);
}

//---------------------------------------------------
