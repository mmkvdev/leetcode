/**
 * @param {number} n
 * @return {number}
 */
var product = (n) => {
    let pro = 1;
    while(n) {
        pro *= (n%10);
        n = parseInt(n/10);
    }
    return pro;
};

var sum = (n) => {
    let sum = 0;
    while(n) {
        sum += (n%10);
        n = parseInt(n/10);
    }
    return sum;
};

var subtractProductAndSum = function(n) {
    return product(n) - sum(n);
};