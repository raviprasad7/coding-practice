function isAnagram(s: string, t: string): boolean {
    const freqMap = new Map<string, number>();

    for (const ch of s) {
        freqMap.set(ch, (freqMap.get(ch)! || 0) + 1)
    }
    console.log(freqMap);

    for (const ch of t) {
        if (!freqMap.has(ch)) {
            return false;
        }
        if (freqMap.get(ch) === 1) {
            freqMap.delete(ch);
        } else {
            freqMap.set(ch, freqMap.get(ch)! - 1);
        }
    }

    return freqMap.size === 0;
};

console.log(isAnagram('anagram', 'angaram')); // true
console.log(isAnagram('rat', 'car')); // false
