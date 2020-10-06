/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var duplicateChecker = (arr) => {
    return arr.filter((v,i) => arr.indexOf(v) === i);
}
var powerfulIntegers = function(x, y, bound) {
    let powIntTracker = [];
    let logBoundMax = Math.log(bound);
    //console.log(logBoundMax);
    let maxX = (x > 1)? Math.floor(logBoundMax / Math.log(x)):1;
    let maxY = (y > 1)? Math.floor(logBoundMax / Math.log(y)):1;
    //console.log(maxX,maxY)
    for(let i = 0; i <= maxX; i++) {
        for(let j = 0; j <= maxY; j++) {
            if(x**i + y**j <= bound) {
                powIntTracker.push(x**i + y**j)
            }
            // else return powIntTracker;
        }
    }
    // console.log(powIntTracker);
    // console.log(duplicateChecker(powIntTracker));
    return duplicateChecker(powIntTracker);
    // console.log(k.sort())
    
};