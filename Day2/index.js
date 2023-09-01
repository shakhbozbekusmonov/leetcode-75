"use strict";
// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 2 started by Shakhbozbek Usmonov
//---------------- Start ----------------
function kidsWithCandies(candies, extraCandies) {
    let maxCand = Math.max(...candies);
    return candies.map((item) => item + extraCandies >= maxCand);
}
//---------------------------------------------------
//# sourceMappingURL=index.js.map