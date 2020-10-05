/**
 * @param {number} N
 * @return {number}
 */

function binaryGenerator(n) {
    if (n === 0) return 0;
    s = '';
    while (n) {
        s += n % 2;
        n = parseInt(n / 2);
    }
    return s.split('').reverse().join('');
}

function complement(n) {
    return n
        .split('')
        .map((v) => (v === '0' ? '1' : '0'))
        .join('');
}

function number(n) {
    let complement_int = 0;
    for (let i = 0; i < n.length; i++) {
        complement_int += 2 ** i * n[i];
    }

    return complement_int;
}

var bitwiseComplement = function (N) {
    /* console.log(binaryGenerator(N));
    console.log(complement(binaryGenerator(N)));
    console.log(number(complement(binaryGenerator(N)))); */
    if (N === 0) return 1;
    return number(complement(binaryGenerator(N)).split('').reverse().join(''));
};
