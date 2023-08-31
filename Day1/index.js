"use strict";
// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 1 started by Shakhbozbek Usmonov
//---------------- Start ----------------
function mergeAlternately(word1, word2) {
    let len = Math.max(word1.length, word2.length);
    let newStr = "";
    for (let i = 0; i < len; i++) {
        if (word1[i]) {
            newStr += word1[i];
        }
        if (word2[i]) {
            newStr += word2[i];
        }
    }
    return newStr;
}
// ----------------------------------------------------------------
function gcdOfStrings(str1, str2) {
    if (str1 + str2 != str2 + str1)
        return "";
    let max = Math.max(str1.length, str2.length);
    while (max > 0) {
        if (str1.length % max === 0 && str2.length % max === 0) {
            return str1.substring(0, max);
        }
        max -= 1;
    }
    return '';
}
//-------------------------- END ---------------------------
//# sourceMappingURL=index.js.map