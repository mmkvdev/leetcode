/**
 * @param {number} num
 * @return {boolean}
 */

var checkLog = (a,b) => {
    return Math.log(a) / Math.log(b);
}
var isPowerOfFour = function(num) {
  if(num === 0) return false;
  return Math.floor(checkLog(num,4)) === Math.ceil(checkLog(num,4))
};