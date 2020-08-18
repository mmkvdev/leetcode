/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // return haystack.indexOf(needle);
    /*if(!needle || haystack === needle) return 0;
    else {
     let str = '', j=0;
        for(let i = 0; i< haystack.length;i++) {
            //if(str === needle) return i;
            // else str += haystack[i];
            if(haystack[i] === needle[j]) {
                str += haystack[i];
                j++;
            }
            // console.log(str);
        }
        // console.log(str, j);
        if(str === needle) return j;
        else return -1;   
    }*/

    return haystack.indexOf(needle);
};