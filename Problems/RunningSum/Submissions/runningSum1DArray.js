var runningSum = (arr) => {
    let runningCount = [], sum;
    runningCount[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = 0;
        for (j = 0; j <= i; j++) {
            sum += arr[j];
        }
        runningCount.push(sum);
        // console.log(runningCount);
    }

    return runningCount;
}

console.log(runningSum([1, 2, 3, 4]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let runningCount = [], sum;
    runningCount[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = 0;
        for (j = 0; j <= i; j++) {
            sum += arr[j];
        }
        runningCount.push(sum);
    }

    return runningCount;
};