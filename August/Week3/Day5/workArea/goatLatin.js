/**
 * @param {string} S
 * @return {string}
 */

var checkVowCons = (s, vowels, i, n) => {
    if (s.length === 1) {
        if (vowels.includes(s.toLowerCase())) {
            // console.log('vowel len1 index', i, s)
            s = s + 'ma';
            for (let j = 0; j <= i; j++) s += 'a';
            // console.log('vow res',s)
            if (i !== n) s += ' ';
            return s;
        } else {
            // console.log('consonant thing not estimated',i, s)
            s = s + 'ma';
            // console.log(s)
            for (let j = 0; j <= i; j++) s += 'a';
            // console.log(s)
            if (i !== n) s += ' ';
            return s;
        }
        // console.log(s)
    } else {
        // console.log('else', s)
        if (vowels.includes(s[0].toLowerCase())) {
            s += 'ma';
            // console.log('vow len n index', i, s)
            for (let j = 0; j <= i; j++) s += 'a';
            if (i !== n) s += ' ';
            return s;
        } else {
            // let u = s.slice(0,1)
            // let remU = slice(1)
            // console.log('cons len n index', i, s)
            let res = s.slice(1) + s.slice(0, 1);
            res += 'ma';
            for (let j = 0; j <= i; j++) res += 'a';
            if (i !== n) res += ' ';
            return res;
            // console.log('conso res', res)
        }
    }
};
var toGoatLatin = function (S) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // console.log(S.split(' '))
    let k = S.split(' ');
    // console.log(k)
    let res = '';
    for (i = 0; i < k.length; i++) {
        // console.log(S[i]);
        // console.log(k[i]);
        //if(vowels.includes(k[i])) {
        // console.log(k[i]);
        // console.log(checkVowCons(k[i],vowels,i));
        // res += (checkVowCons(k[i],vowels,i))
        res += checkVowCons(k[i], vowels, i, k.length);
        // console.log(res);
        // if(i === k.length-1) break;
        //else res += ' '
        // }
    }
    // console.log(res)

    // res.map((v,i) => )
    // let goatLatin = '';
    // res.map((v,i) => goatLatin += v+ ' ')
    // console.log(goatLatin)
    // return goatLatin
    // return res
    // res.map((v,i) => console.log(v,i))

    // return res.slice(0,res.length-1)
    if (res[res.length - 1] === ' ') {
        // console.log(res.slice(0,res.length-1));
        return res.slice(0, res.length - 1);
    } else {
        // console.log(res);
        return res;
    }
    // console.log(res)
};
