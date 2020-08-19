/**
 * @param {string} S
 * @return {string}
 */

var checkVowCons = (s, vowels, i, n) => {
    if (s.length === 1) {
        if (vowels.includes(s.toLowerCase())) {
            s = s + 'ma';
            for (let j = 0; j <= i; j++) s += 'a';
            if (i !== n) s += ' ';
            return s;
        } else {
            s = s + 'ma';
            for (let j = 0; j <= i; j++) s += 'a';
            if (i !== n) s += ' ';
            return s;
        }
    } else {
        if (vowels.includes(s[0].toLowerCase())) {
            s += 'ma';
            for (let j = 0; j <= i; j++) s += 'a';
            if (i !== n) s += ' ';
            return s;
        } else {
            let res = s.slice(1) + s.slice(0, 1);
            res += 'ma';
            for (let j = 0; j <= i; j++) res += 'a';
            if (i !== n) res += ' ';
            return res;
        }
    }
};
var toGoatLatin = function (S) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let k = S.split(' ');
    let res = '';
    for (i = 0; i < k.length; i++) {
        res += checkVowCons(k[i], vowels, i, k.length);
    }
    if (res[res.length - 1] === ' ') {
        return res.slice(0, res.length - 1);
    } else {
        return res;
    }
};
