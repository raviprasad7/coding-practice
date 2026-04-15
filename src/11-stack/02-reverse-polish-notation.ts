function evalRPN(tokens: string[]): number {
	if (!tokens.length) return 0;

	const stack = [];
	let result = 0;
	const validOperands = ['+', '-', '*', '/'];

	stack.push(tokens[0]);
	
	while (stack.length) {
		
	}
};

{
	const input = ["2","1","+","3","*"];
	console.log(evalRPN(input));	// 9
}

{
	const input = ["4","13","5","/","+"];
	console.log(evalRPN(input));	// 6
}

{
	const input = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
	console.log(evalRPN(input));	// 22
}
