const arrangingCoins = (n) => {
    var coin = '¤', k = 0, count = 0, j = 1;
    for (let i = 1; i <= n; i++) {
        count += i;
        if (count > n) {
            return k;
        }
        else if (j === i && count <= n) {
            k++;
            j++;
        }
        /*if (k < n) {
            console.log(k, j, coin);
            k += 1;
        }*/
    }
    // console.log('count', count);
}

console.log(arrangingCoins(10));