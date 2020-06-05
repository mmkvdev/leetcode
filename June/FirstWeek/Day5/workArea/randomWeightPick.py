import itertools
import random
import bisect


class Solution:

    def __init__(self, w):
        self.val = list(itertools.accumulate(w))

    def pickIndex(self):
        return bisect.bisect_left(self.val, random.randint(1, self.val[-1]))

if __name__ == '__main__':
    weights = [[[1]], []]
    obj = Solution(weights)
    param_1 = obj.pickIndex()
