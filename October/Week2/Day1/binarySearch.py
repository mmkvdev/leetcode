class Solution:
    def search(self, nums: List[int], target: int) -> int:
        
        def binarySearch(nums, l, h, k):
            # print(nums,l,h,k)
            if h >= l:
                mid = l + (h - l) // 2
                
                if nums[mid] == k:
                    return mid
                elif nums[mid] > k:
                    return binarySearch(nums,l,mid-1,target)
                elif nums[mid] < k:
                    return binarySearch(nums,mid+1,h,target)
            return -1
            
        low = 0
        high = len(nums)
        # print(binarySearch(nums,low,high,target))
        return binarySearch(nums,low,high-1,target)