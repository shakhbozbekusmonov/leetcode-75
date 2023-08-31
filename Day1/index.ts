// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 1 started by Shakhbozbek Usmonov

//---------------- Start ----------------

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1: string, word2: string): string {
    let newStr: string = "";
    if (word1.length > word2.length) {
        for (let i = 0; i < word1.length; i++) {
            newStr += word1.charAt(i) + word2.charAt(i);
        }
    } else {
        for (let i = 0; i < word2.length; i++) {
            newStr += word1.charAt(i) + word2.charAt(i);
        }
    }
    return newStr;
}

// ----------------------------------------------------------------
