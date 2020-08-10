/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    // console.log(s)
    /*if(s.length === 1) {
        console.log(s)
    }*/

    // console.log(s[0]-'A')
    /*for(let i = 0; i<s.length;i++) {
        console.log(s[i]-'A');
    }*/

    let res = 0, exp = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        res += (26 ** exp) * (s[i].charCodeAt() % 64);
        exp++;

        // console.log(res);
    }

    return res;
};