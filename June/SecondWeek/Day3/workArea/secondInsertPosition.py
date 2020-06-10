def secondInsertPosition(nums,target):
    #k = nums.index(target)
    #print(k)
    if target not in nums:
        nums.append(target)
        return sorted(nums).index(target)
    else:
        return nums.index(target)
    '''if nums.index(target):
        return nums.index(target)
    else:
        for i in range(len(nums)):
            if nums[i] > target:
                return i'''

nums = [1,3,5,6]
target = int(input())

# print(nums.find)
print(secondInsertPosition(nums,target))