var duplicateChecker = (nums) => {
    return nums.map(JSON.stringify).reverse().filter(function (e, i, a) {
        return a.indexOf(e, i+1) === -1;
    }).reverse().map(JSON.parse);
}
var threeSum = function(nums) {
    let k, nums_break = [], nums_pro=[];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            k = j+1;
            nums_break = [];
            if (k < nums.length && (nums[i] + nums[j] + nums[k]) === 0) {
                nums_break.push(nums[i], nums[j], nums[k]);
                nums_pro.push(nums_break.sort());
            }
        }
    }
    return duplicateChecker(nums_pro);
};