"use strict";
// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 3 started by Shakhbozbek Usmonov
//---------------- Start ----------------
function reverseVowels(s) {
    let start = 0;
    let end = s.length - 1;
    const VOWELS = new Set([
        "a",
        "i",
        "u",
        "e",
        "o",
        "A",
        "I",
        "U",
        "E",
        "O",
    ]);
    const ans = [...s];
    while (start < end) {
        if (!VOWELS.has(ans[start]))
            start++;
        if (!VOWELS.has(ans[end]))
            end--;
        if (VOWELS.has(ans[start]) && VOWELS.has(ans[end])) {
            const temp = ans[start];
            ans[start] = ans[end];
            ans[end] = temp;
            start++;
            end--;
        }
    }
    return ans.join("");
}
//----------------------------------------------------------------
function reverseWords(s) {
    let newStr = [];
    for (let i = 0; i < s.trim().split(" ").length; i++) {
        if (s[i]) {
            newStr.push(s[i], " ");
        }
    }
    newStr.pop();
    return newStr.reverse().join(" ");
}
console.log(reverseWords("the sky is blue"));
//# sourceMappingURL=index.js.map