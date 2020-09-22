/**
 * @param {number[]} nums
 * @return {number[]}
 */
var duplicateChecker = (nums) => {
    return nums.filter((v, i) => nums.indexOf(v) === i);
};
var majorityElement = function (nums) {
    let majorElement = parseInt(nums.length / 3),
        counter,
        majorArray = [];
    for (let i = 0; i < nums.length; i++) {
        let prev = nums[i],
            counter = 0;
        for (let j = i; j < nums.length; j++) {
            if (prev === nums[j]) {
                counter++;
                if (counter > majorElement) {
                    majorArray.push(nums[j]);
                    break;
                }
            }
        }
    }

    // checking for duplicates
    var refinedMajorArray = duplicateChecker(majorArray);
    return refinedMajorArray;
};
