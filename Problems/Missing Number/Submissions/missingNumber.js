/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    // finding the sum of first nums.length elements
    let nSum = ((nums.length)*(nums.length+1))/2;
    
    // finding the sum of all array elements
    let sum = 0;
    for(let i = 0; i<nums.length;i++) {
        sum += nums[i];
    }
    
    // subtracting the above two variables, we get the missing number
    return nSum-sum;
};