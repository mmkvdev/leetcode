/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str1 = s.split(" "),
        str2 = [];
    for (i = str1.length - 1; i >= 0; i--) str2.push(str1[i]);
    return str2.join(" ").replace(/\s+/g, " ").trim();
};