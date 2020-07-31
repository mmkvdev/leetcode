/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
	if (n === 0) return 0;
	else if (n === 1 || n === 2) return 1;
    // return tribonacci(n+3) - (tribonacci(n+1)+tribonacci(n+2))
    else {
    	let T0 = 0, T1 = 1, T2 = 1, Tn;
    	for(let i = 3; i<=n;i++) {
    		Tn = T0 + T1 + T2;
    		// T2 = Tn;
    		// T1 = T2;
    		T0 = T1;
    		T1 = T2;
    		T2 = Tn;

    		// console.log(Tn)
    	}

    	// console.log(Tn)
    	return Tn;
    }
};

console.log(tribonacci(25))