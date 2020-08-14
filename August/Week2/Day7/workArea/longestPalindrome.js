/**
 * @param {string} s
 * @return {number}
 */

/*var strReverse = (str) => {
    return str.split("").reverse().join('');
}*/

/*var checkPalindrome = strSpliced => {
    if(strSpliced.length === 1 || strSpliced.length === 0 || strSpliced.length < 0) return 0;
    else {
        // console.log(strSpliced);
        if(strReverse(strSpliced) === strSpliced) {
            // return len(strSpliced)
            console.log(strSpliced, strSpliced.length);
            return strSpliced.length;
        }
    }
}*/

var longestPalindrome = function (s) {
    // console.log(s)
    /*let max=0;
    for(let i = 0 ;i< s.length;i++){
        // console.log(s[i]);
        for(let j = i+1; j<=s.length;j++) {
            //console.log(s.slice(i,j));
            let k = checkPalindrome(s.slice(i,j));
            (k>max) ? (max = k) : max;
        }
    }
// console.log(max);
    return max;*/
    let m = new Map();
    for (i = 0; i < s.length; i++) {
        if (m.has(s[i])) m.delete(s[i]);
        else m.set(s[i], 1);
    }

    let nOdds = m.size;
    return nOdds ? s.length - nOdds + 1 : s.length;
};