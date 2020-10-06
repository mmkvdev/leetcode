/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const cache = {};
    const ret = wordBreakHelper(s, wordDict, cache);
    return ret.map(arr => arr.join(' '));
};

var wordBreakHelper = function (s, wordDict, cache) {
    if (!cache[s]) {
        const possibilities = [];

        for (let word of wordDict) {
            if (s === word) {
                possibilities.push([word]);
            } else if (s.startsWith(word)) {
                let ret = wordBreakHelper(s.substring(word.length), wordDict, cache);
                ret.forEach(v => possibilities.push([word, ...v]));
            }
        }

        cache[s] = possibilities;
    }

    return cache[s];
};