const ClimbingStairs = (n) => {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;
    // recursive approach
    else return ClimbingStairs(n - 1) + ClimbingStairs(n - 2);
}

console.log(ClimbingStairs(3));