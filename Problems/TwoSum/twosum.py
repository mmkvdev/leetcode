def twosum(nums,target):
    container = {}
    for i, num in enumerate(nums):
        if target - num in container:
            return [container[target - num], i]
        container[num] = i
    return

print(twosum([2,7,11,15],9))