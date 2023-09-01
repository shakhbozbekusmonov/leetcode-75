// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 2 started by Shakhbozbek Usmonov

//---------------- Start ----------------

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCand: number = Math.max(...candies);
    return candies.map((item) => item + extraCandies >= maxCand);
}

//---------------------------------------------------

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count: number = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] == 0 &&
            (i == 0 || flowerbed[i - 1] == 0) &&
            (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)
        ) {
            flowerbed[i] = 1;
            count++;
        }
    }
    return count >= n;
}

//---------------------- END ----------------
