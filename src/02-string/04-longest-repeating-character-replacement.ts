function characterReplacement(s: string, k: number): number {
    if (s.length === 0) return 0;

    let left = 0;
    let charFreq: { [key: string]: number } = {};
    let maxFreq = 0;
    let longestSubstring = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s.charAt(right);
        charFreq[char] = (charFreq[char] || 0) + 1;
        maxFreq = Math.max(maxFreq, charFreq[char]);

        if ((right - left + 1) - maxFreq > k) {
            charFreq[s.charAt(left)] = charFreq[s.charAt(left)] - 1;
            left++;
        }

        longestSubstring = Math.max(longestSubstring, right - left + 1);
    }

    return longestSubstring;
};

console.log(characterReplacement('ABAB', 0)); // 1
console.log(characterReplacement('ABAB', 2)); // 4
console.log(characterReplacement('AABABBA', 1)); // 4
console.log(characterReplacement('', 0)); // 0
console.log(characterReplacement('AB', 0)); // 1
console.log(characterReplacement('ABCDE', 1)); // 2
console.log(characterReplacement('AAAAA', 5)); // 5
console.log(characterReplacement('ABBB', 2)); // 4
