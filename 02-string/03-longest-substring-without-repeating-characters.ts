function lengthOfLongestSubstring(s: string): number {
    if (s.length < 2) return s.length;

    let longestSubstring = -Infinity;
    let left = 0;
    let right = 0;
    const freqMap = new Set<string>();

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        console.log(s, char, freqMap.has(char));
        if (freqMap.has(char)) {
            while (freqMap.has(char)) {
                freqMap.delete(s.charAt(left));
                left++;
            }
        }
        freqMap.add(char);
        right++;
        console.log(s, left, right);
        longestSubstring = Math.max(longestSubstring, right - left);
    }

    return longestSubstring;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('au')); // 2
console.log(lengthOfLongestSubstring('aabaab!bb')); // 3
