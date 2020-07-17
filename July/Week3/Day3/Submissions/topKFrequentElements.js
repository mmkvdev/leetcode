/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = nums.reduce((map, num) => {
        const occurence = map.get(num) || 0;
        map.set(num, occurence + 1);
        return map;
    }, new Map());

    return Array.from(map)
        .sort((a, b) => b[1] - a[1])
        .map(item => item[0])
        .slice(0, k);
};