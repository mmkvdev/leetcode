/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // t.filter((v,i) => console.log(v,i));
    let k = '';
    /*(for(let i = 0; i<t.length; i++) {
        if(t[i] != s[i]) {
            // console.log(t[i]);
            k = t[i];
        }
    }
    return k;*/
    // console.log(t.split('').sort());
    let sOrder = s.split('').sort();
    let tOrder = t.split('').sort();
    
    // console.log(sOrder.length, tOrder.length)
    // console.log(tOrder)
    for(let i = 0; i<tOrder.length;i++) {
        if(tOrder[i] !== sOrder[i]) {
            // k = tOrder[i];
            return tOrder[i];
        }
    }
    
   //  console.log(k);
};