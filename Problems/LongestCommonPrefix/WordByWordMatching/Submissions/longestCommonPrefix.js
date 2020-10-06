/**
 * @param {string[]} strs
 * @return {string}
 */
const checkPrefix = (prefix, subApple) => {
    let prefixTracker = '';
    for (let i = 0, j = 0; i < prefix.length && j < subApple.length; i++, j++) {
        if (prefix[i] != subApple[j]) break;
        prefixTracker += prefix[i];
    }
    return prefixTracker;
}

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        prefix = checkPrefix(prefix, strs[i]);
    }
    return prefix;
};