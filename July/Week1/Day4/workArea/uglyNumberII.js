var nthUglyNumber = (n) => {
    var uglyNumber = [],l=1;
    uglyNumber[0] = 1;
    for(let i = 1 ; i <= 2*n; i++) {
        if (l == n) break;
        if (i%2 === 0 || i%3 === 0 || i%5 === 0) {
            uglyNumber.push(i);
            l += 1;
        }
    }
    // const filter = uglyNumber[n];
    console.log(uglyNumber[n-1]);
}

nthUglyNumber(10);