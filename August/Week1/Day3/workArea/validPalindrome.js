/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // console.log(s.toLowerCase());
    // const s_filter = s.toLowerCase();
    // console.log(s_filter);
    /*for(let i=0;i<s_filter.length;i++) {
        if(s_filter.match(/^[a-zA-Z]/)) {
            console.log(s_filter[i]);
        }
    }*/
    
    // replacing the string with a regex that removes all the special characters from it.
    const s_filter = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    //console.log(s_filter);
    // return (s_filter === s_filter.reverse())? true: false;
    // console.log(s_filter.reverse())
    return (s_filter === s_filter.split("").reverse().join(''))? true:false;
};