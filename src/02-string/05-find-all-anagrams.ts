function findAnagrams(s: string, p: string): number[] {
    if (p.length > s.length) return [];

    const output: number[] = [];
    const charCount = new Map<string, number>();
    const targetCharCount = new Map<string, number>();
    const targetLength = p.length;
    let left = 0;
    let right = targetLength;
    let isValidAnagram = true;

    for (const ch of p) {
        if (!targetCharCount.has(ch)) {
            targetCharCount.set(ch, 0);
        }
        targetCharCount.set(ch, targetCharCount.get(ch)! + 1);
    }
    console.log(targetCharCount);

    for (let i = left; i < right; i++) {
        if (!charCount.has(s[i])) {
            charCount.set(s[i], 0);
        }
        charCount.set(s[i], charCount.get(s[i])! + 1);
        if (!targetCharCount.has(s[i])) {
            isValidAnagram = false;
        }
    }

    if (isValidAnagram) {
        output.push(left);
    }

    while (right < s.length) {
        for (const entry in charCount) {

        }
        if (!charCount.has(s[right])) {
            charCount.set(s[right], 0);
        }
        charCount.set(s[left], charCount.get(s[left])! - 1);
        charCount.set(s[right], charCount.get(s[right])! + 1);
        left++;
        right++;
    }

    console.log(charCount, isValidAnagram);

    return output;
};

console.log(findAnagrams('cbaebabacd', 'abc')); // [0,6]
console.log(findAnagrams('abab', 'ab')); // [0,1,2]
// console.log(findAnagrams())
// console.log(findAnagrams())