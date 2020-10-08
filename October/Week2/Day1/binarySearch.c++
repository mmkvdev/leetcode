class Solution {
public:
    int binarySearch(vector<int> &nums, int l, int h, int target) {
        if(h >= l) {
            int mid = (l+h) / 2;
            
            if(nums[mid] == target) {
                return mid;
            }
            
            if(nums[mid] > target) {
                return binarySearch(nums,l, mid-1,target);
            }
            
            if(nums[mid] < target) {
                return binarySearch(nums,mid+1,h,target);
            }
        }
        
        return -1;
    }
    
    int search(vector<int>& nums, int target) {
        int low = 0;
        int high = nums.size();
        
        return binarySearch(nums,low,high-1,target);
    }
};