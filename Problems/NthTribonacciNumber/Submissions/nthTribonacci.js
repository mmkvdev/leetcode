/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) return 0;
	else if (n === 1 || n === 2) return 1;
    else {
    	let T0 = 0, T1 = 1, T2 = 1, Tn;
    	for(let i = 3; i<=n;i++) {
    		Tn = T0 + T1 + T2;
    		T0 = T1;
    		T1 = T2;
    		T2 = Tn;
    	}
    	return Tn;
    }
};