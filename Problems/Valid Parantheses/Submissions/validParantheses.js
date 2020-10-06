/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let paranthesisStack = [], parStack = ["(", "{", "["]
	for(let ele of s) {
		if (parStack.includes(ele)) paranthesisStack.push(ele)
		else {
			if(paranthesisStack.length === 0) return false
			let currentStackElement = paranthesisStack.pop();
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
	if(paranthesisStack.length) return false
	return true
};