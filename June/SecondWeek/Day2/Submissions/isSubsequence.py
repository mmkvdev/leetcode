class Solution:
    def isSubsequence(self, s, t):
        if len(s) == 0:
            return True
        k = 0
        for i in range(len(t)):
            if t[i] == s[k]:
                k += 1
            if k == len(s):
                return True
        return k == len(s)

if __name__ == '__main__':
    solution = Solution()
    print(solution.isSubsequence('abc','ahbgdc'))