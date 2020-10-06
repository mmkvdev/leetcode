/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let fizzBuzzRes = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) fizzBuzzRes.push('Fizz');
        // return 'Fizz'
        else if (i % 3 !== 0 && i % 5 === 0) fizzBuzzRes.push('Buzz');
        // return 'Buzz'//
        else if (i % 3 === 0 && i % 5 === 0) fizzBuzzRes.push('FizzBuzz');
        // return 'FizzBuzz
        else fizzBuzzRes.push(i.toString()); //return i.toString()
    }

    return fizzBuzzRes;
};
