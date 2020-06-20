from itertools import permutations
class Solution:
    def getPermutation(self, n, k):
        s = list(range(1,n+1))
        j = ""
        for i in list(permutations(s,n))[k-1]:
            j += str(i)
        return j

if __name__ == '__main__':
    solution = Solution()
    print(solution.getPermutation(3,3))
    print(solution.getPermutation(4, 9))