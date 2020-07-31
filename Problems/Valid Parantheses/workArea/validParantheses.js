const validParantheses = (s) => {
	// console.log(s[0])
	let paranthesisStack = [], parStack = ["(", "{", "["]
	for(let ele of s) {
		// console.log(ele)
		if (parStack.includes(ele)){
			// console.log(ele)
			paranthesisStack.push(ele)
		}
		else {
			// console.log('Entering reign')
			if(paranthesisStack.length === 0) {
				return false
			}

			let currentStackElement = paranthesisStack.pop();
			// console.log(currentStackElement)
			if(currentStackElement === '(') {
				if (ele !== ')') return false
			}

			if(currentStackElement === '{') {
				if(ele !== '}') return false
			}

			if(currentStackElement === '[') {
				if (ele !== ']') return false
			}

		}
	}

	// console.log(paranthesisStack)
	if(paranthesisStack.length) return false
	return true
}

console.log(validParantheses("()"))
console.log(validParantheses("()[]{}"))
console.log(validParantheses("(]"))
console.log(validParantheses("([)]"))
console.log(validParantheses("{[]}"))
console.log(validParantheses("]"))