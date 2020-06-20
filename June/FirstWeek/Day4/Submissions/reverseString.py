class Solution:
    def reverseString(self, s):
        """
        Do not return anything, modify s in-place instead.
        """
        if(len(s) != 0 and len(s) > 0):
            s.reverse()

if __name__ == '__main__':
    s = ["h","e","l","l","o"]
    solution = Solution()
    solution.reverseString(s)