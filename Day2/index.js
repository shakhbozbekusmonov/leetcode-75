"use strict";
// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 2 started by Shakhbozbek Usmonov
//---------------- Start ----------------
function kidsWithCandies(candies, extraCandies) {
    let maxCand = Math.max(...candies);
    return candies.map((item) => item + extraCandies >= maxCand);
}
//---------------------------------------------------
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 &&
            (i == 0 || flowerbed[i - 1] == 0) &&
            (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
            flowerbed[i] = 1;
            count++;
        }
    }
    return count >= n;
}
//---------------------- END ----------------
//# sourceMappingURL=index.js.map