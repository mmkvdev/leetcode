/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    // let count_1 = 0, count_0 = 0
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        // console.log(flowerbed[i]);
        if (
            flowerbed[i] !== 1 &&
            flowerbed[i - 1] !== 1 &&
            flowerbed[i + 1] !== 1
        ) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n === 0;

    // if(Math.abs(count_1 - count_0) === n) console.log('COol')
};
