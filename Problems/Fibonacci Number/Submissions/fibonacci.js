/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let step1=0,step2=1,stepn;
    let fibTracker = []
    fibTracker[0] = step1;
    fibTracker[1] = step2;
    for(let i = 2; i <= N;i++){
        stepn = step2+step1;
        step1=step2;
        step2=stepn;
        
        fibTracker.push(stepn);
    }
    return fibTracker[N];
};

