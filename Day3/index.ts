// LeetCode 75 Challenge started by Miracle Programmer Shakhbozbek Usmonov.
// Day 3 started by Shakhbozbek Usmonov

//---------------- Start ----------------

function reverseVowels(s: string): string {
    let start: number = 0;
    let end: number = s.length - 1;
    const VOWELS: Set<string> = new Set([
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
    const ans: string[] = [...s];
    while (start < end) {
        if (!VOWELS.has(ans[start])) start++;
        if (!VOWELS.has(ans[end])) end--;
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

function reverseWords(s: string): string {
    let newStr: string[] = [];
    let newS: string[] = s.trim().split(" ");
    for (let i = 0; i < newS.length; i++) {
        if (newS[i]) {
            newStr.push(newS[i], " ");
        }
    }
    newStr.pop();
    return newStr.reverse().join("");
}

//----------------------------------------------------------------

function productExceptSelf(nums: number[]): number[] {
    const result = new Array(nums.length).fill(1);
    let prefix = 1;
    let postfix = 1;
    for (let i = 0; i < nums.length; ++i) {
        result[i] *= prefix
        result[nums.length - 1 - i] *= postfix;
        prefix *= nums[i]
        postfix *= nums[nums.length - 1 - i];
    }
    return result;
};

//------------------- END ------------------------------------