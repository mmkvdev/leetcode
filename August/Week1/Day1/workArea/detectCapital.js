/**
 * @param {string} word
 * @return {boolean}
 */

var findRestCapitals = function(word) {
    for(let i = 1; i< word.length;i++ ){
        if(word[i].toUpperCase() === word[i]) return true
    }
    return false;
}
var detectCapitalUse = function(word) {
    if(word.toUpperCase() === word) return true;
    if(word.toLowerCase() === word) return true;
    else {
        for(let i = 0 ; i < word.length; i++) {
            if(i === 0 && word[i].toUpperCase() === word[i]) {
                if(findRestCapitals(word) === true) return false;
                else return true;
            }
        }
        
        return false;
    }
};