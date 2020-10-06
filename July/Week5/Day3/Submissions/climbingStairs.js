/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let step1=0,step2=1,stepn;
    for(let i = 1; i <= n;i++){
        stepn = step2+step1;
        step1=step2;
        step2=stepn;
    }
    return stepn;
};
