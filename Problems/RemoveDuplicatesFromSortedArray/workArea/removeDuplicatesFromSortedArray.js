var removeDuplicates = function(nums) {
    // nums = nums.filter((v,i) => nums.indexOf(v) === i);
    //console.log(nums.length);
    // return nums.length;
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i] !== nums[j]) {
            i++;
            let temp=nums[j];
            nums[j]=nums[i];
            nums[i]=temp;
        }
    }
    // console.log(i+1);
    return i+1;
    
};