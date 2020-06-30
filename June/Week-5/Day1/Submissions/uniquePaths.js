/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    /* if (m === 1 || n === 1) {
         return 1;
     };
     
     return uniquePaths(m-1,n) + uniquePaths(m,n-1); // + uniquePaths(m-1,n-1);*/
     
     let path=1;
     for(let i=n;i<(m+n-1);i++) {
         path *= i;
         path /= (i-n+1);
     }
     return path;
 };

 console.log('Unique Paths are: ', uniquePaths(3,2));