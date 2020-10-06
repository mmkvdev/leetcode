/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var proTracker = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if (i !== j) proTracker.push((nums[i]-1)*(nums[j]-1));
        }
    }
    var maxValue = Math.max(...proTracker);
    return maxValue;
};