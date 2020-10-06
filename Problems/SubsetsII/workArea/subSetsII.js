/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var duplicateSubsetChecker = (nums) => {
    return nums.map(JSON.stringify).reverse().filter(function (e, i, a) {
        return a.indexOf(e, i + 1) === -1;
    }).reverse().map(JSON.parse);
};

var subsetsWithDup = function (nums) {
    let subset = [[]];
    nums.sort();
    // console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        subset.forEach((item) => {
            subset.push([...item, nums[i]]);
        });
    }

    // checking for duplicates
    return duplicateSubsetChecker(subset);
    // return subset;
};