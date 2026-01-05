const VALID_CHARACTER_SET = /[a-z\s0-9]/g;

function isPalindrome(s: string): boolean {
    const strippedString = s.toLowerCase().match(VALID_CHARACTER_SET);

    if (strippedString === null) {
        return true;
    }

    console.log(strippedString);
    let left = 0;
    let right = strippedString.length - 1;

    while (left < right) {
        if (strippedString[left] === ' ') {
            left++;
            continue;
        }
        if (strippedString[right] === ' ') {
            right--;
            continue;
        }
        if (strippedString[left] === strippedString[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
console.log(isPalindrome('.'));
console.log(isPalindrome('0P'));
