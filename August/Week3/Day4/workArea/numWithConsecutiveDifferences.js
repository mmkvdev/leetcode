/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */

/*var checkConsecutiveDifferences = (n,k) => {
    // console.log(n.toString())
    // console.log(n.toString().length)
    let checkCons = n.toString() // numWithSameConsecutiveDifferences = []
    // console.log(checkCons)
    for(let i=0, j=1;i<n.toString().length&&j<n.toString().length;i++,j++){
        // console.log(i,j)
        if(Math.abs(checkCons[i]-checkCons[j]) === k) {
            //if(n) numWithSameConsecutiveDifferences.push(n)
            return n;
            // console.log(n)
            // console.log(n)
            // return n
        }
    }
    // console.log(numWithSameConsecutiveDifferences)
}*/
var numsSameConsecDiff = function(N, K) {
    /*let numWithSameConsecutiveDifferences = []
    if(N === 1) {
        for(let i =0; i<10;i++) {
            numWithSameConsecutiveDifferences.push(i);
        }
        
        return numWithSameConsecutiveDifferences 
    } else {
        let limiters = [10**(N-1), (10**N)-1]
        // let baseLimit = 
        // console.log(limiters)
        for(let i = limiters[0]; i <= limiters[1];i++) {
            // console.log(i);
            numWithSameConsecutiveDifferences.push(checkConsecutiveDifferences(i,K));
        }

        return numWithSameConsecutiveDifferences   
    }*/
    let prevSet = new Set([0,1,2,3,4,5,6,7,8,9]);
    
    for (let n = 2; n <= N; n++) { // we start at 2 since n = 1 is just the one digit numbers 0 through 9
        const newSet = new Set();
        
        for (const prevVal of prevSet) {
            const lastDig = prevVal % 10;
            
            const plusK = lastDig + K;
            const minusK = lastDig - K;
            
            if (prevVal > 0 && plusK < 10) newSet.add((prevVal * 10) + plusK);
            if (prevVal > 0 && minusK >= 0) newSet.add((prevVal * 10) + minusK);
        }
        
        prevSet = newSet;
    }

    return [...prevSet];
};