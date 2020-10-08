/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binarySearch = (nums, l, h, k) => {
    // console.log(l,h,k,nums)
    if (h >= l) {
        let mid = parseInt((l + h) / 2);

        // console.log('mid: ', mid);
        if (nums[mid] === k) {
            //console.log('value: ', mid);
            return mid;
        }

        if (nums[mid] > k) {
            return binarySearch(nums, l, mid - 1, k);
        }

        if (nums[mid] < k) {
            return binarySearch(nums, mid + 1, h, k);
        }
    }

    return -1;
};
var search = function (nums, target) {
    let low = 0;
    let high = nums.length;

    // console.log(low,high)

    return binarySearch(nums, low, high - 1, target);
};
