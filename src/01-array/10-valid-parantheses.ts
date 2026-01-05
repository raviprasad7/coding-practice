function isValid(s: string): boolean {
    const stack: string[] = [];

    for (let ch of s) {
        if (['(', '[', '{'].includes(ch)) {
            stack.push(ch);
        } else {
            const top = stack.pop();

            if (
                ch === ')' && top !== '(' ||
                ch === ']' && top !== '[' ||
                ch === '}' && top !== '{'
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid('()'));     // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]'));     // false
console.log(isValid('([])'));   // true
console.log(isValid('([)]'));   // false
