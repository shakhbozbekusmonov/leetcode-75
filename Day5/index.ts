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
