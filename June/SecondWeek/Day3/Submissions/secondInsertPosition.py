class Solution:
    def searchInsert(self, nums, target):
        if target not in nums:
            nums.append(target)
            return sorted(nums).index(target)
        else:
            return nums.index(target)

if __name__ == '__main__':
    solution = Solution()
    # print(solution.searchInsert([1,3,5,6],5))
    # print(solution.searchInsert([1,3,5,6],2))
    # print(solution.searchInsert([1,3,5,6],7))
    # print(solution.searchInsert([1,3,5,6],0))
    print(solution.searchInsert([1,3,5,6],4))