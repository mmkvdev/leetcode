/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let count, countTracker = [];
    for(let i =0;i<nums.length;i++){
        let k = nums[i], count=0;
        for(let j=0;j<nums.length;j++) {
            if(k === nums[j]) {
                count++;
            }
        }
        countTracker.push(count);
    }
    let k;
    countTracker.map((v,i) => {
        if(v === 1) k = i;
    });
    return nums[k];
};