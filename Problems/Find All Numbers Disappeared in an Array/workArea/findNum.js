/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    duplicateFilter = []
    for(let i of nums){
        i = Math.abs(i);
            
        if(nums[i-1] > 0) nums[i-1] *= -1;
    }
    // console.log(nums);
    for(let j=0; j <nums.length; j++){
        if(nums[j] > 0) {
            duplicateFilter.push(j+1);
        }
    }
    
    return duplicateFilter;
        // console.log(j)
};