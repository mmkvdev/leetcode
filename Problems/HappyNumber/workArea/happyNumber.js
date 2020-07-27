/**
 * @param {number} n
 * @return {boolean}
 */
var checkHappy = (n) => {
    let sum = 0;
    while (n) {
        sum += Math.pow(n % 10, 2);
        // console.log(sum);
        n = parseInt(n / 10);
    }

    // console.log(sum);
    return sum;
}
var isHappy = function (n) {
    let happyTracker = checkHappy(n), arr = [];
    while (!arr.includes(happyTracker)) {
        if (happyTracker === 1) return true;
        arr.push(happyTracker);
        happyTracker = checkHappy(happyTracker);
    }
    return false;
    // console.log(happyTracker);
    // else return false;
};

if (isHappy(919)){
    console.log('Happy')
} else {
    console.log('Cool');
}