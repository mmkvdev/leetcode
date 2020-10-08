class Solution {
    public int binarySearch(int[] nums, int l, int h, int target) {
        if(h >= l) {
            int mid = (l + h) / 2;
            
            if(nums[mid] == target) {
                return mid;
            }
            
            if (nums[mid] > target) {
                return binarySearch(nums, l, mid-1, target);
            }
            
            if (nums[mid] < target) {
                return binarySearch(nums, mid+1, h, target);
            }
        }
        
        return -1;
    }
    public int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length;
        
        return binarySearch(nums,low,high-1,target);
    }
}