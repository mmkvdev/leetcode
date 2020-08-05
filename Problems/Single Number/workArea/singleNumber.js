/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    /*let k = nums.filter((v,i) => {
        // nums.indexOf(v) === i
        let count = 0;
        if(v === nums[0]) count++;
        if(count >  1) 
    });*/
    // return k[0];
    
    /*nums.map((v,i) => {
        
    });*/
    
    let count, countTracker = [];
    for(let i =0;i<nums.length;i++){
        let k = nums[i], count=0;
        for(let j=0;j<nums.length;j++) {
            if(k === nums[j]) {
                // countTracker.push(count)
                count++;
            }
        }
        countTracker.push(count);
    }
    // console.log(countTracker)
    let k;
    countTracker.map((v,i) => {
        // if(v === 1) return i;
        // console.log(v);
        if(v === 1) k = i;
    });
    
    // console.log(k);
    return nums[k];
};