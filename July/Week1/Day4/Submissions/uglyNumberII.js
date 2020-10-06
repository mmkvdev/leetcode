/**
 * @param {number} n
 * @return {number}
 */
/*const uglyChecker = (n1,n2) => {
    while(n1%n2 === 0) {
        n1 /= n2;
    }
    return n1;
}
const uglyNumberChecker = (n) => {
    n = uglyChecker(n,2); 
    n = uglyChecker(n, 3); 
    n = uglyChecker(n, 5); 
    return (n == 1)? 1 : 0; 
}*/
var nthUglyNumber = function(n) {
    /*var i=1,l=1;
    while(n > l) {
        i++;
        if(uglyNumberChecker(i)) l++;
    }
    return i;*/
    let uglyArray = [2,3,5]
    let res = [1]
    let i2=0
    let i3=0
    let i5 = 0
    
    while (res.length<n){
        let m2 = res[i2]*2
        let m3 = res[i3]*3
        let m5 = res[i5]*5
        let updated = Math.min(m2,m3,m5)
        if(updated===m2){
            i2++
        }
        if(updated===m3){
            i3++
        }
        if(updated===m5){
            i5++
        }
        res.push(updated)
    }

    return res[n-1]
};