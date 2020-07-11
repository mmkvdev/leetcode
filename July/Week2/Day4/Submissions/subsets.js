/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetGenerator = (nums) => {
    let subsetNum = [[]];
    for (let i = 0; i < nums.length; i++) {
        subsetNum.forEach((ele) => {
            subsetNum.push([...ele, nums[i]]);
        });
    };
    return subsetNum;
};

var subsets = function (nums) {
    return subsetGenerator(nums);
}