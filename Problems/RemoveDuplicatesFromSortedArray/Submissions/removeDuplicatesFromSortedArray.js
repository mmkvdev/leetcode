/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }
    }
    return i + 1;

};