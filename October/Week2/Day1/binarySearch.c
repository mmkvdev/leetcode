

int binarySearch(int nums[], int l, int h, int k) {
    if (h >= l) {
        int mid = (l+h)/2;
        
        if (nums[mid] == k) {
            return mid;
        }
        
        if (nums[mid] > k) {
            return binarySearch(nums,l,mid-1,k);
        }
        
        if (nums[mid] < k) {
            return binarySearch(nums,mid+1,h,k);
        }
    }
    
    return -1;
}
int search(int* nums, int numsSize, int target){
    int low = 0;
    int high = numsSize;
    
    return binarySearch(nums, low, high-1, target);
}