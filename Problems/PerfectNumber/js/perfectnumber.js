/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let i = 2, sum = 1;
    while (i * i <= num) {
        if (num % i === 0) {
            sum += i + num/i;
        }
        i += 1;
    }
    
    return sum === num && num !== 1 ? true: false;
};