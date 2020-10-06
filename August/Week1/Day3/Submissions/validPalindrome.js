/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // replacing the string with a regex that removes all the special characters from it.
    const s_filter = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return (s_filter === s_filter.split("").reverse().join(''))? true:false;
};