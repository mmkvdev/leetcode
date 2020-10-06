// var m = 3, n = 2;
function pathfinder(m, n) {

    // Combinatorics Approach
    let path=1;
    for(let i=n;i<(m+n-1); i++) {
        path *= i;
        path /= (i-n+1);
    }
    return path;
    // Dynamic Programming Approach
    /*const path = []; // new Array(m,n);

    // console.log(path);
    for (let i = 0; i < m; i++) {
        path[i] = [];
        for (let j = 0; j < n; j++) {
            path[i][j] = [];
        }
    }

    for (let i = 0; i < m; i++) {
        path[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        path[0][j] = 1;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            path[i][j] = path[i - 1][j] + path[i][j - 1];
        }
    }
    console.log(path);
    // return path[m - 1][n - 1];*/
}

console.log('Unique Paths are: ', pathfinder(3,2));

