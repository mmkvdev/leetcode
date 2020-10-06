/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let i, j, k, goodTriplet = [], tripletTracker = [], count=0;
    for(i=0; i < arr.length; i++) {
        for(j=i+1; j < arr.length; j++){
            for(k=j+1; k < arr.length; k++) {
                if(Math.abs(arr[i]-arr[j]) <= a && Math.abs(arr[j]-arr[k]) <= b && Math.abs(arr[i]-arr[k]) <= c) {
                    count++;
                }      
            }
        }
    }
    return count;
};