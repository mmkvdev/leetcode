/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const allIndexes = (str, str_frag) => {
    console.log('1');
    let res = [];
    for (i = 0; i < str.length; i++) {
        if (str[i] === str_frag) {
            res.push(i);
        }
    }
    return res;
};

const formattedString = (str) => {
    let res = '',
        root = [];
    for (i = 0; i <= str.length; i++) {
        if (str[i] === ' ' || i === str.length) {
            root.push(res);
            res = '';
        } else res += str[i];
    }
    return root;
};

var wordPattern = function (pattern, str) {
    // const k = allIndexes(pattern,)
    /*const k = formattedString(str);
    // console.log(k);
    if(k.length !== pattern.length) return false;
    console.log(pattern.length);
    for(let i=0;i<pattern.length;i++) {
        let res = allIndexes(pattern, pattern[i]);
        // console.log(res);
        // if(res.length)
        // if(str[res[]])
    }*/

    const words = str.split(/\s+/);
    const map = new Map();

    if (words.length !== pattern.length) return false;
    if (new Set(words).size !== new Set(pattern).size) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i])
            return false;
        map.set(pattern[i], words[i]);
    }
    return true;
};
