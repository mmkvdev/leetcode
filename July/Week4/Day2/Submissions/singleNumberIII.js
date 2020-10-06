/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let set = new Set();
    nums.forEach(num => set.has(num) ? set.delete(num) : set.add(num));
    return Array.from(set);
};