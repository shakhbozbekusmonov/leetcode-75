// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 2 started by Shakhbozbek Usmonov

//---------------- Start ----------------

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCand: number = Math.max(...candies);
    let result: boolean[] = [];
    for (let i = 0; i < candies.length; i++) {
        if (maxCand <= extraCandies + candies[i]) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}

//---------------------------------------------------
