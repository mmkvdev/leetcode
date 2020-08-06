/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let duplicateFilter = [];
    
    for(let i of nums) {
        i = Math.abs(i);
        
        if(nums[i-1] > 0) {
            nums[i-1] *= -1;
        } else {
            duplicateFilter.push(i);
        }
    }
    
    return duplicateFilter;
};