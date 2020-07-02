/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var k=0,count=0,j=1;
    if(n === 1) return 1;
    if(n === 0) return 0;
    for(let i=1;i<=n;i++){
        count += i;
        if(count > n) return k;
        else if(j===i && count <= n){
            k += 1;
            j += 1;
        }
    }
};